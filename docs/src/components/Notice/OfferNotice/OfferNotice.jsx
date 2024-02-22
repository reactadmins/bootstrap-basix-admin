import logo from "/img/black-logo.png";
import FlipClock from "../FlipClock/FlipClock";
import { useEffect, useState } from "react";
import "./OfferNotice.css";

const OfferNotice = ({ offerData, onCloseOffer }) => {
    const [isEven, setIsEven] = useState("");

    //GET IP
    const getIpAddress = async () => {
        const res = await fetch("https://www.cloudflare.com/cdn-cgi/trace").then((res) =>
            res.text()
        );
        const arr = res.split("\n");
        const iPStr = arr[2];
        const ip = Number(iPStr.replace("ip=", "").replaceAll(".", ""));

        if (ip % 2 === 0) {
            setIsEven(true);
        } else {
            setIsEven(false);
        }
    };

    useEffect(() => {
        getIpAddress();
    }, []);

    return (
        <div
            className={"notice-wrapper"}
            style={{ /*[offerData?.notice_position] */ bottom: "40px" }}>
            <div className={"notice-content"}>
                <div>
                    <img src={logo} />
                    {/* logo */}
                </div>
                <div>{`${offerData?.notice} ${
                    isEven ? offerData?.even_coupon_code : offerData?.odd_coupon_code
                }`}</div>

                <FlipClock date={offerData?.counter_time} />

                <div className={"button_wrapper"}>
                    <a
                        href={offerData?.button_url}
                        target="_blank"
                        style={{ background: offerData?.btn_color, color: "#fff" }}>
                        {offerData?.button_text}
                    </a>
                </div>
                <div onClick={onCloseOffer} className={"notice-close"}>
                    x
                </div>
            </div>
        </div>
    );
};

export default OfferNotice;

