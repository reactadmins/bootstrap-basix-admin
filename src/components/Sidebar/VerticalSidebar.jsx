import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import __, { isEmpty } from "lodash";
import { navItems } from "../../nav";
import logo from "../../assets/image/logo.png";
import mini_logo from "../../assets/image/mini-logo.png";
import black_logo from "../../assets/image/black-logo.png";
import black_mini_logo from "../../assets/image/black-mini-logo.png";
import { useDashboardDataContext } from "../../context/dashboardDataContext";
import sidebarStyle from "../../assets/scss/variation/Sidebar/VerticalSidebar.module.scss";

const VerticalSidebar = ({ setSidebarMini, sidebarMini }) => {
    const [navIsOpen, setNavIsOpen] = useState(null);
    const { sidebarBgImg, sidebarBgColor, isThemeDirection, isDark } =
        useDashboardDataContext();

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
                <div
                    className={`${sidebarStyle.navbar_header} d-flex align-items-center justify-content-between`}
                >
                    {!isDark ? (
                        <a href="/" className={sidebarStyle.logo}>
                            {sidebarMini ? (
                                <img
                                    src={
                                        sidebarBgColor === "bg_white"
                                            ? black_mini_logo
                                            : mini_logo
                                    }
                                    alt="basix-admin"
                                />
                            ) : (
                                <img
                                    src={
                                        sidebarBgColor === "bg_white"
                                            ? black_logo
                                            : logo
                                    }
                                    alt="basix-admin"
                                />
                            )}
                        </a>
                    ) : (
                        <a href="/" className={sidebarStyle.logo}>
                            <img
                                src={sidebarMini ? mini_logo : logo}
                                alt="basix-admin"
                            />
                        </a>
                    )}

                    <button
                        className={sidebarStyle.menu_toggle}
                        onClick={() => setSidebarMini(!sidebarMini)}
                    >
                        <i
                            className="fa-solid fa-bars-progress"
                            aria-hidden="true"
                        ></i>
                    </button>
                </div>
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
                <div className={sidebarStyle.overlay_bg}></div>
            )}
        </div>
    );
};

export default VerticalSidebar;

