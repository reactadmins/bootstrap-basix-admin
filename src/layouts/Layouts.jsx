import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useDashboardDataContext } from "@/context/dashboardDataContext";
import styles from "@/assets/scss/Layouts.module.scss";
import { Fragment, useEffect, useState } from "react";
import Navbars from "@/components/Navbars/Navrars";

const Layouts = () => {
    const [selectSize, setSelectSize] = useState(null);
    const { activeVariation, sidebarMini, navbarFixed } =
        useDashboardDataContext();

    useEffect(() => {
        window.onresize = function () {
            setSelectSize(window.screen.width);
        };
    }, [selectSize]);

    switch (activeVariation) {
        case "vertical": {
            return (
                <div className={styles.layout}>
                    <Sidebar />
                    <div
                        className={styles.content}
                        style={{
                            width: `${
                                sidebarMini
                                    ? "calc(100% - 70px)"
                                    : "calc(100% - 280px)"
                            }`,
                        }}
                    >
                        <Navbars />
                        <div
                            className="p-4"
                            style={{
                                marginTop: `${navbarFixed ? "80px" : "0"}`,
                            }}
                        >
                            <Outlet />
                        </div>
                    </div>
                </div>
            );
        }
        case "horizontal": {
            return (
                <Fragment>
                    <Navbars />
                    <div
                        className="p-4"
                        style={{
                            marginTop: `${navbarFixed ? "80px" : "0"}`,
                        }}
                    >
                        <Outlet />
                    </div>
                </Fragment>
            );
        }
        case "combo": {
            return (
                <div className={styles.layout}>
                    <Navbars />
                    <div
                        style={{
                            marginTop: `${
                                activeVariation === "combo" ? "80px" : "0"
                            }`,
                        }}
                    >
                        <Sidebar type="combo" />
                        <div
                            className={`${styles.content} p-4`}
                            style={{
                                width: `${
                                    sidebarMini
                                        ? "calc(100% - 70px)"
                                        : "calc(100% - 280px)"
                                }`,
                            }}
                        >
                            <Outlet />
                        </div>
                    </div>
                </div>
            );
        }
        case "dual_nav": {
            return (
                <div className={styles.layout}>
                    <Navbars />
                    <div
                        className={`${styles.content} p-4 w-100`}
                        style={{
                            marginTop: `${
                                navbarFixed
                                    ? `${selectSize > 1024 ? "150px" : "80px"}`
                                    : "0"
                            }`,
                        }}
                    >
                        <Outlet />
                    </div>
                </div>
            );
        }
        default:
            return null;
    }
};

export default Layouts;

