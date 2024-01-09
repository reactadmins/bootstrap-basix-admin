import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import __, { isEmpty } from "lodash";
import { navItems } from "../../nav";
import logo from "../../assets/img/logo.png";
import mini_logo from "../../assets/img/mini-logo.png";
import black_logo from "../../assets/img/black-logo.png";
import black_mini_logo from "../../assets/img/black-mini-logo.png";
import { useDashboardDataContext } from "../../context/dashboardDataContext";
import SidebarStyle from "../../assets/scss/Sidebar.module.scss";

const Sidebar = ({ setSidebarMini, sidebarMini }) => {
    const [navIsOpen, setNavIsOpen] = useState(null);
    const { sidebarBgImg, sidebarBgColor, isThemeDirection } =
        useDashboardDataContext();

    return (
        <div
            className={`${SidebarStyle.sidebar_nav_wrapper} ${
                SidebarStyle[sidebarBgColor]
            } ${sidebarMini ? SidebarStyle.sidebar_mini : ""}`}
            style={{
                backgroundImage: `url(${sidebarBgImg ? sidebarBgImg : ""})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
            }}
            data={!isThemeDirection ? "false" : "true"}
        >
            <div className={SidebarStyle.navbar}>
                <div
                    className={`${SidebarStyle.navbar_header} d-flex align-items-center justify-content-between`}
                >
                    <a href="/" className={SidebarStyle.logo}>
                        {!!sidebarMini ? (
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
                    <button
                        className={SidebarStyle.menu_toggle}
                        onClick={() => setSidebarMini(!sidebarMini)}
                    >
                        <i
                            className="fa-solid fa-bars-progress"
                            aria-hidden="true"
                        ></i>
                    </button>
                </div>
                <div className={SidebarStyle.main_menu}>
                    <ul className={SidebarStyle.navbar_nav}>
                        {navItems?.map((item, index) => (
                            <li
                                key={index}
                                className={`${SidebarStyle.nav_item} ${
                                    item.title
                                        ? `d-flex align-items-center text-uppercase ${SidebarStyle.menu_title}`
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
                                                        className={`${item.icon} ${SidebarStyle.menu_icon}`}
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
                                                        className={`${item.icon} ${SidebarStyle.menu_icon}`}
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
                                                            SidebarStyle.arrow
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
                                                className={`${item.icon} ${SidebarStyle.menu_icon}`}
                                            ></i>
                                            <span>{item.name}</span>
                                        </a>
                                    ))}
                                {item.title && <Fragment>{item.name}</Fragment>}
                                {navIsOpen === index &&
                                    (item?.children ? (
                                        <ul className={SidebarStyle.sub_menu}>
                                            {item?.children?.map(
                                                (childItem, index) => (
                                                    <li
                                                        key={index}
                                                        className={
                                                            SidebarStyle.nav_item
                                                        }
                                                    >
                                                        <Link
                                                            to={childItem?.path}
                                                            className="d-flex justify-content-between align-items-center"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <i
                                                                    className={`${childItem.icon} ${SidebarStyle.menu_icon}`}
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
                <div className={SidebarStyle.overlay_bg}></div>
            )}
        </div>
    );
};

export default Sidebar;

