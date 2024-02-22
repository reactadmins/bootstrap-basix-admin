import React, { useEffect, useState } from "react";
// 
import OfferNotice from "./OfferNotice/OfferNotice";

function getStartOrEndOffer(date) {
    return new Date(date).getTime();
}

function App() {
    const [offerData, setOfferData] = useState({});
    const [isOpenOffer, setIsOpenOffer] = useState(false);
    // const [githubStart, setGithubStart] = useState(0);

    const day1 = 8.64e7;
    const day3 = 259200000;
    const product_slug = "basix_admin";

    const offerStartDate = getStartOrEndOffer(offerData?.start_date);
    const offerEndDate = getStartOrEndOffer(offerData?.end_date);
    const currentDate = new Date().getTime();

    // GET Google Sheet Data
    const getSheetData = async () => {
        const sheet_id = "1VLpfKspHHNM6JIFOQtohqDRyHR85J3KR5RLF4jqlz0Q";
        const tab_id = 38890577;
        let url = `https://docs.google.com/spreadsheets/export?format=csv&id=${sheet_id}&gid=${tab_id}`;

        await fetch(url)
            .then((res) => res.text())
            .then((data) => {
                const dataArr = data.split("\n");
                const firstRow = dataArr?.[0]?.split(",");

                const sheetData = dataArr.slice(1, dataArr.length).reduce((acc, current) => {
                    const rowDataArr = current.split(",");
                    const rowData = {};
                    for (let i = 0; i < firstRow?.length; i++) {
                        Object.assign(rowData, {
                            [firstRow[i]]: rowDataArr[i],
                        });
                    }
                    if (rowDataArr?.[1]) {
                        Object.assign(acc, {
                            ...acc,
                            [rowDataArr?.[1]]: rowData,
                        });
                    }
                    return acc;
                }, {});

                //counter_time

                const mainObj = sheetData[product_slug];
                const checkCounterTime = new Date(mainObj.counter_time).getTime();

                if (mainObj.counter_time && checkCounterTime < currentDate) {
                    mainObj.counter_time = checkCounterTime + day3;
                }

                if (!mainObj.counter_time) {
                    mainObj.counter_time = currentDate + day3;
                }

                setOfferData(mainObj);

                const obj = {
                    data: mainObj,
                    exp_t: currentDate + day1,
                };

                localStorage.setItem(`${product_slug}_offer_data`, JSON.stringify(obj));

                // offerStartDate < currentDate && currentDate < offerEndDate && isOpenOffer
                // if (mainObj?.start_date < currentDate && currentDate < mainObj?.end_date) {
                //     setIsOpenOffer(true);
                // }
            });
    };

    // Close Offer
    const handleCloseOffer = () => {
        setIsOpenOffer(false);
        localStorage.setItem(`${product_slug}_sl`, currentDate + day1);
    };

    useEffect(() => {
        // call github start count
        // getGithubStarCount();

        const savedOfferData = localStorage.getItem(`${product_slug}_offer_data`);
        const isShowOffer = localStorage.getItem(`${product_slug}_sl`);

        // Manage Google Sheet Data
        if (savedOfferData) {
            const offerData = JSON.parse(savedOfferData);
            const currentTime = new Date().getTime();

            if (Object.keys(offerData).length > 0 && currentTime < offerData?.exp_t) {
                setOfferData(offerData?.data);
                setIsOpenOffer(true);
            } else {
                localStorage.removeItem(`${product_slug}_offer_data`);
                getSheetData();
                setIsOpenOffer(true);
            }
        } else {
            getSheetData();
            setIsOpenOffer(true);
        }

        // Manage Show/Hide Offer Notice
        if (isShowOffer && +isShowOffer > currentDate) {
            setIsOpenOffer(false);
        }
    }, []);

    // const [isClick, setIsClick] = useState(false);

    // useEffect(() => {
    //     const lightDarkBtn = document.querySelector(".clean-btn");
    //     console.log('lightDarkBtn', lightDarkBtn);

    //     addEventListener("click", (event) => {
    //         setIsClick(!isClick)
    //     });
    //     const isDark = document.documentElement.getAttribute("data-theme");
    //     console.log("isDrak", isDark)
    //     document.documentElement.setAttribute('data-bs-theme', isDark);
    //   },[]);

    return (
        <div>
            {offerStartDate < currentDate && currentDate < offerEndDate && isOpenOffer ? (
                <OfferNotice offerData={offerData} onCloseOffer={handleCloseOffer} />
            ) : null}
        </div>
    );
}

export default App;

