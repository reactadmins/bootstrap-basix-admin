import { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import __, { isEmpty } from "lodash";
import { navItems } from "../../nav";
import { useDashboardDataContext } from "../../context/dashboardDataContext";
import sidebarStyle from "../../assets/scss/variation/sidebar/ComboSidebar.module.scss";

const ComboSidebar = ({ setSidebarMini, sidebarMini }) => {
    const [navIsOpen, setNavIsOpen] = useState(null);
    const [selectSize, setSelectSize] = useState();
    const { sidebarBgImg, sidebarBgColor, isThemeDirection, isDark } =
        useDashboardDataContext();

    useEffect(() => {
        window.onresize = function () {
            setSelectSize(window.screen.width);
        };
        if (selectSize === 1024) {
            setSidebarMini(true);
        } else if (selectSize === 768 || selectSize > 100) {
            setSidebarMini(true);
        } else {
            setSidebarMini(false);
        }
    }, [selectSize, setSidebarMini]);

    return (
        <div
            className={`${sidebarStyle.sidebar_nav_wrapper} ${
                sidebarStyle[sidebarBgColor]
            } ${sidebarMini ? sidebarStyle.sidebar_mini : ""}`}
            style={{
                backgroundImage: `url(${sidebarBgImg ? sidebarBgImg : ""})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
            }}
            data={!isThemeDirection ? "false" : "true"}
            dark-mode={isDark ? "true" : "false"}
        >
            <div className={sidebarStyle.navbar}>
                <div className={sidebarStyle.main_menu}>
                    <ul className={sidebarStyle.navbar_nav}>
                        {navItems?.map((item, index) => (
                            <li
                                key={index}
                                className={`${sidebarStyle.nav_item} ${
                                    item.title
                                        ? `d-flex align-items-center text-uppercase ${sidebarStyle.menu_title}`
                                        : ""
                                }`}
                            >
                                {(item?.path && (
                                    <Fragment>
                                        {isEmpty(item?.children) ? (
                                            <Link
                                                to={item?.path}
                                                onClick={() =>
                                                    setNavIsOpen(
                                                        navIsOpen === index
                                                            ? null
                                                            : index
                                                    )
                                                }
                                                className="d-flex justify-content-between align-items-center"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <i
                                                        className={`${item.icon} ${sidebarStyle.menu_icon}`}
                                                    ></i>
                                                    <span>{item.name}</span>
                                                </div>

                                                {item?.badge && (
                                                    <span
                                                        className={`badge bg-${item?.badge?.variant}`}
                                                    >
                                                        {item?.badge?.text}
                                                    </span>
                                                )}
                                            </Link>
                                        ) : (
                                            <a
                                                onClick={() =>
                                                    setNavIsOpen(
                                                        navIsOpen === index
                                                            ? null
                                                            : index
                                                    )
                                                }
                                                className="d-flex justify-content-between align-items-center user-select-none"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <i
                                                        className={`${item.icon} ${sidebarStyle.menu_icon}`}
                                                    ></i>
                                                    <span>{item.name}</span>
                                                </div>
                                                {item?.children && (
                                                    <i
                                                        className={`${
                                                            navIsOpen === index
                                                                ? "fa-solid fa-angle-down"
                                                                : "fa-solid fa-chevron-right"
                                                        } ${
                                                            sidebarStyle.arrow
                                                        }`}
                                                    ></i>
                                                )}
                                            </a>
                                        )}
                                    </Fragment>
                                )) ||
                                    (item?.url && (
                                        <a
                                            href={item?.url}
                                            target="_blank"
                                            className="d-flex align-items-center"
                                        >
                                            <i
                                                className={`${item.icon} ${sidebarStyle.menu_icon}`}
                                            ></i>
                                            <span>{item.name}</span>
                                        </a>
                                    ))}
                                {item.title && <Fragment>{item.name}</Fragment>}
                                {navIsOpen === index &&
                                    (item?.children ? (
                                        <ul className={sidebarStyle.sub_menu}>
                                            {item?.children?.map(
                                                (childItem, index) => (
                                                    <li
                                                        key={index}
                                                        className={
                                                            sidebarStyle.nav_item
                                                        }
                                                    >
                                                        <Link
                                                            to={childItem?.path}
                                                            className="d-flex justify-content-between align-items-center"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <i
                                                                    className={`${childItem.icon} ${sidebarStyle.menu_icon}`}
                                                                ></i>
                                                                <span>
                                                                    {
                                                                        childItem.name
                                                                    }
                                                                </span>
                                                            </div>
                                                            {childItem.badge && (
                                                                <span
                                                                    className={`badge bg-${childItem?.badge?.variant}`}
                                                                >
                                                                    {
                                                                        childItem
                                                                            .badge
                                                                            .text
                                                                    }
                                                                </span>
                                                            )}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    ) : null)}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {sidebarBgImg?.length === 0 ? null : (
                <div id="overlayBg" className={sidebarStyle.overlay_bg}></div>
            )}
            <button
                className={sidebarStyle.arrow_btn}
                onClick={() => setSidebarMini(!sidebarMini)}
            >
                <i
                    className={`${
                        !sidebarMini
                            ? "fa-solid fa-chevron-left"
                            : "fa-solid fa-chevron-right"
                    }`}
                ></i>
            </button>
        </div>
    );
};

export default ComboSidebar;

