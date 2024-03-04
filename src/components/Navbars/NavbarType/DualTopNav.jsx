import { useState, useEffect, useRef, Fragment } from "react";
import profile from "@/assets/image/admin.jpg";
import light_logo from "@/assets/image/logo.png";
import mini_light_logo from "@/assets/image/mini-logo.png";
import black_logo from "@/assets/image/black-logo.png";
import black_mini_logo from "@/assets/image/black-mini-logo.png";
import DropdownMenu from "@/components/DropdownMenu/DropdownMenu";
import Notification from "@/components/Navbars/Notification/Notification";
import Message from "@/components/Navbars/Message/Message";
import UserProfile from "@/components/Navbars/UserProfile/UserProfile";
import { useDashboardDataContext } from "@/context/dashboardDataContext";
import styles from "@/assets/scss/navbars/DualTopNav.module.scss";
import { navItems } from "@/nav";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";
import DarkModeSwitch from "@/components/DarkModeSwitch/DarkModeSwitch";

const DualTopNav = () => {
    const [openNotification, setOpenNotification] = useState(true);
    const [openMessage, setOpenMessage] = useState(true);
    const [openUser, setOpenUser] = useState(true);
    const [navIsOpen, setNavIsOpen] = useState(null);
    const {
        sidebarMini,
        setSidebarMini,
        topNavbarBgColor,
        navbarFixed,
        isDark,
    } = useDashboardDataContext();

    let dropRef = useRef();
    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if (dropRef.current && !dropRef.current.contains(e.target)) {
                setOpenNotification(true);
                setOpenMessage(true);
                setOpenUser(true);
            }
        });
    }, []);

    return (
        <Fragment>
            <div
                className={`${styles.dual_nav} ${
                    navbarFixed ? styles.fixed_top : ""
                } p-0 flex-column`}
            >
                <div
                    className={`${styles.header_action} d-flex align-items-center justify-content-between`}
                >
                    <div className={styles.navbar_nav}>
                        <div className={styles.logo_container}>
                            <button
                                type="button"
                                onClick={() => setSidebarMini(!sidebarMini)}
                            >
                                {sidebarMini ? (
                                    <i className="fa-solid fa-xmark"></i>
                                ) : (
                                    <i className="fa-solid fa-bars"></i>
                                )}
                            </button>
                            <Link to="/">
                                <img
                                    className={styles.logo}
                                    src={isDark ? light_logo : black_logo}
                                    alt="basix-admin"
                                />
                                <img
                                    className={styles.mini_logo}
                                    src={
                                        isDark
                                            ? mini_light_logo
                                            : black_mini_logo
                                    }
                                    alt="basix-admin"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.search_container}>
                        <button type="button" className={styles.search_btn}>
                            <i className="fa fa-search"></i>
                        </button>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="search..."
                            className={styles.search_field}
                        />
                    </div>
                    <ul className={styles.social_item} ref={dropRef}>
                        <li>
                            <DarkModeSwitch />
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    setOpenNotification(!openNotification);
                                    setOpenMessage(true);
                                    setOpenUser(true);
                                }}
                                className={styles.for_notification}
                            >
                                <i className="fa fa-bell"></i>
                                <span className={`${styles.count}  bg-danger`}>
                                    5
                                </span>
                            </button>
                            {!openNotification ? (
                                <DropdownMenu left="24px" right="24px">
                                    <Notification />
                                </DropdownMenu>
                            ) : null}
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    setOpenMessage(!openMessage);
                                    setOpenNotification(true);
                                    setOpenUser(true);
                                }}
                                className={styles.for_message}
                            >
                                <i className="fa-solid fa-envelope"></i>
                                <span className={`${styles.count} bg-primary`}>
                                    5
                                </span>
                            </button>
                            {!openMessage ? (
                                <DropdownMenu left="24px" right="24px">
                                    <Message />
                                </DropdownMenu>
                            ) : null}
                        </li>
                        <li>
                            <div className={styles.user_area}>
                                <a
                                    href="#"
                                    onClick={() => {
                                        setOpenUser(!openUser);
                                        setOpenMessage(true);
                                        setOpenNotification(true);
                                    }}
                                    className={styles.user_dropdown}
                                >
                                    <img src={profile} alt="uesr" />
                                </a>
                            </div>
                            {!openUser ? (
                                <DropdownMenu left="168px" right="62px">
                                    <UserProfile />
                                </DropdownMenu>
                            ) : null}
                        </li>
                    </ul>
                </div>
                <div
                    data-color={topNavbarBgColor}
                    className={`${styles.duall_navbar} ${
                        sidebarMini ? styles.toggle_menu : ""
                    }`}
                >
                    <ul className={`${styles.nav}`}>
                        {navItems?.map((item, index) => (
                            <li
                                key={index}
                                className={`${styles.nav_item} ${
                                    item.title ? "d-none" : ""
                                }`}
                            >
                                {(item?.path && (
                                    <Fragment>
                                        {isEmpty(item?.children) ? (
                                            <Link
                                                to={item?.path}
                                                {...(item?.target && {
                                                    target: "_blank",
                                                })}
                                                onClick={() =>
                                                    setNavIsOpen(
                                                        navIsOpen === index
                                                            ? null
                                                            : index
                                                    )
                                                }
                                                className="d-flex justify-content-between align-items-center"
                                            >
                                                <div className="d-flex align-items-center gap-2">
                                                    <i
                                                        className={`${item.icon} menu-icon`}
                                                    ></i>
                                                    <span>{item.name}</span>
                                                </div>
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
                                                <div className="d-flex align-items-center gap-2">
                                                    <i
                                                        className={`${item.icon} menu-icon`}
                                                    ></i>
                                                    <span>{item.name}</span>
                                                </div>
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
                                            <div className="d-flex align-items-center gap-2">
                                                <i
                                                    className={`${item.icon} menu-icon`}
                                                ></i>
                                                <span>{item.name}</span>
                                            </div>
                                        </a>
                                    ))}
                                {item.children ? (
                                    <ul className={styles.sub_menu}>
                                        {item?.children?.map(
                                            (childItem, index) => (
                                                <li key={index}>
                                                    <Link
                                                        to={childItem?.path}
                                                        className="d-flex justify-content-between align-items-center"
                                                    >
                                                        <div className="d-flex align-items-center gap-2">
                                                            <i
                                                                className={`${childItem.icon} menu-icon`}
                                                            ></i>
                                                            <span>
                                                                {childItem.name}
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                ) : null}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default DualTopNav;

