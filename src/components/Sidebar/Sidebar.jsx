import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SidebarBgWrapper from "@/components/Sidebar/SidebarBgWrapper";
import { useDashboardDataContext } from "@/context/dashboardDataContext";
import { navItems } from "@/nav";
import SidebarMenu from "@/components/Sidebar/SidebarMenu";
import style from "@/assets/scss/Sidebar.module.scss";
import logo from "@/assets/image/logo.png";
import mini_logo from "@/assets/image/mini-logo.png";
import black_logo from "@/assets/image/black-logo.png";
import black_mini_logo from "@/assets/image/black-mini-logo.png";

const Sidebar = ({ type = "vertical" }) => {
    const [navIsOpen, setNavIsOpen] = useState(null);
    const [selectSize, setSelectSize] = useState(null);
    const { sidebarMini, setSidebarMini, sidebarBgColor, isDark } =
        useDashboardDataContext();

    useEffect(() => {
        window.onresize = function () {
            setSelectSize(window.screen.width);
        };
        if (selectSize === 1024 || selectSize > 0) {
            setSidebarMini(true);
        } else {
            setSidebarMini(false);
        }
    }, [selectSize, setSidebarMini]);

    return (
        <SidebarBgWrapper type={type}>
            <div
                data-color={sidebarBgColor}
                className={`${style.sidebar} ${
                    sidebarMini ? style.sidebar_mini : ""
                }`}
            >
                {type === "vertical" ? (
                    <div
                        className={`d-flex align-items-center justify-content-between ${style.logo}`}
                    >
                        <Link to="/">
                            {isDark ? (
                                <img
                                    src={sidebarMini ? mini_logo : logo}
                                    alt="basix-admin"
                                />
                            ) : (
                                <Fragment>
                                    {sidebarBgColor === "white" ? (
                                        <img
                                            src={
                                                sidebarMini
                                                    ? black_mini_logo
                                                    : black_logo
                                            }
                                            alt="basix-admin"
                                        />
                                    ) : (
                                        <img
                                            src={sidebarMini ? mini_logo : logo}
                                            alt="basix-admin"
                                        />
                                    )}
                                </Fragment>
                            )}
                        </Link>
                        <button
                            type="button"
                            onClick={() => setSidebarMini(!sidebarMini)}
                        >
                            <i className="fa-solid fa-bars-progress"></i>
                        </button>
                    </div>
                ) : (
                    <button
                        type="button"
                        onClick={() => setSidebarMini(!sidebarMini)}
                        className={style.toggle_arrow_btn}
                    >
                        <i
                            className={`${
                                sidebarMini
                                    ? "fa-solid fa-chevron-left"
                                    : "fa-solid fa-chevron-right"
                            }`}
                        ></i>
                    </button>
                )}

                <nav className={style.nav}>
                    <ul>
                        {navItems.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={
                                        item?.title ? style.nav_title : ""
                                    }
                                >
                                    {item?.path && (
                                        <SidebarMenu
                                            item={item}
                                            index={index}
                                            navIsOpen={navIsOpen}
                                            setNavIsOpen={setNavIsOpen}
                                        />
                                    )}
                                    {item?.title && !sidebarMini ? (
                                        <span>{item.name}</span>
                                    ) : null}
                                    {item?.url ? (
                                        <a
                                            href={item?.url}
                                            target="_blank"
                                            className="d-flex align-items-center"
                                        >
                                            <i
                                                className={`${item?.icon} ${style.menu_iocn}`}
                                            ></i>
                                            <span>{item?.name}</span>
                                        </a>
                                    ) : null}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </SidebarBgWrapper>
    );
};

export default Sidebar;

