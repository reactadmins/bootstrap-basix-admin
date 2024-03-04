import { Fragment, useEffect, useRef, useState } from "react";
import { miniNav } from "@/nav";
import { Link } from "react-router-dom";
import DropdownMenu from "@/components/DropdownMenu/DropdownMenu";
import Notification from "@/components/Navbars/Notification/Notification";
import Message from "@/components/Navbars/Message/Message";
import UserProfile from "@/components/Navbars/UserProfile/UserProfile";
import { useDashboardDataContext } from "@/context/dashboardDataContext";
import logo from "@/assets/image/logo.png";
import mini_logo from "@/assets/image/mini-logo.png";
import black_logo from "@/assets/image/black-logo.png";
import black_mini_logo from "@/assets/image/black-mini-logo.png";
import profile from "@/assets/image/admin.jpg";
import DarkModeSwitch from "@/components/DarkModeSwitch/DarkModeSwitch";
import NavBarBgWrapper from "@/components/Navbars/NavBarBgWrapper";
import styles from "@/assets/scss/navbars/HorizontalNav.module.scss";

const HorizontalNav = () => {
    const [openNotification, setOpenNotification] = useState(true);
    const [openMessage, setOpenMessage] = useState(true);
    const [openUser, setOpenUser] = useState(true);
    const [isOpenSearch, setIsOpenSearch] = useState(true);
    const [toggle, setToggle] = useState(false);

    const { topNavbarBgColor, isDark, sidebarMini, setSidebarMini } =
        useDashboardDataContext();

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
        <NavBarBgWrapper>
            <div
                data-color={topNavbarBgColor}
                className={styles.horizontal_nav}
            >
                <div className="d-flex align-item-center justify-content-between">
                    <div className="d-flex align-item-center gap-3">
                        <button
                            type="button"
                            className={`${styles.toggle_btn} ${
                                toggle ? styles.active : ""
                            }`}
                            onClick={() => setToggle(!toggle)}
                        >
                            <span></span>
                        </button>
                        <Link to="/">
                            {isDark ? (
                                <Fragment>
                                    <img
                                        className={styles.logo}
                                        src={logo}
                                        alt="logo"
                                    />
                                    <img
                                        className={styles.mini_logo}
                                        src={mini_logo}
                                        alt="logo"
                                    />
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <img
                                        className={styles.logo}
                                        src={
                                            topNavbarBgColor === "white"
                                                ? black_logo
                                                : logo
                                        }
                                        alt="logo"
                                    />
                                    <img
                                        className={styles.mini_logo}
                                        src={
                                            topNavbarBgColor === "white"
                                                ? black_mini_logo
                                                : mini_logo
                                        }
                                        alt="logo"
                                    />
                                </Fragment>
                            )}
                        </Link>
                    </div>
                    <ul
                        className={`d-flex align-items-center gap-2 ${
                            styles.nav
                        } ${toggle ? styles.nav_active : ""}`}
                    >
                        {miniNav.map((item, index) => {
                            return (
                                <li key={index} className={styles.nav_item}>
                                    {item.children ? (
                                        <a>
                                            <i className={item.icon} />
                                            {item.name}
                                        </a>
                                    ) : null}
                                    {item.path &&
                                    !item.url &&
                                    !item.children ? (
                                        <Link to={item.path}>
                                            <i className={item.icon} />
                                            {item.name}
                                        </Link>
                                    ) : null}
                                    {item.url ? (
                                        <a href={item.url} target="_blank">
                                            <i className={item.icon} />
                                            {item.name}
                                        </a>
                                    ) : null}
                                    {item?.children ? (
                                        <ul>
                                            {item?.children?.map(
                                                (child, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <Link
                                                                to={child.path}
                                                            >
                                                                <i
                                                                    className={
                                                                        child.icon
                                                                    }
                                                                />
                                                                {child.name}
                                                            </Link>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    ) : null}
                                </li>
                            );
                        })}
                    </ul>
                    <ul
                        className={`${styles.social_item} d-flex align-items-center`}
                        ref={dropRef}
                    >
                        <li>
                            <DarkModeSwitch />
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsOpenSearch(!isOpenSearch);
                                }}
                            >
                                <i className="fa fa-search"></i>
                            </button>
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
                                <span className={`${styles.count} bg-danger`}>
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
                                >
                                    <img src={profile} alt="uesr" />
                                </a>
                            </div>
                            {!openUser ? (
                                <DropdownMenu left="24px" right="24px">
                                    <UserProfile />
                                </DropdownMenu>
                            ) : null}
                        </li>
                    </ul>
                </div>
            </div>
        </NavBarBgWrapper>
    );
};

export default HorizontalNav;

