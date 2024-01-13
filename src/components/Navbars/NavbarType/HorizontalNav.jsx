import { Fragment, useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { miniNav } from "../../../nav";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";
import Notification from "../Notification/Notification";
import Message from "../Message/Message";
import UserProfile from "../UserProfile/UserProfile";
import SearchBar from "../../SearchBar/SearchBar";
import { useDashboardDataContext } from "../../../context/dashboardDataContext";
import navbarStyle from "../../../assets/scss/variation/topNav/HorizontalNav.module.scss";
import logo from "../../../assets/image/logo.png";
import black_logo from "../../../assets/image/black-logo.png";
import profile from "../../../assets/image/admin.jpg";
import DarkModeSwitch from "../../DarkModeSwitch/DarkModeSwitch";

const HorizontalNav = ({ setSidebarMini, sidebarMini }) => {
    const [openNotification, setOpenNotification] = useState(true);
    const [openMessage, setOpenMessage] = useState(true);
    const [openUser, setOpenUser] = useState(true);
    const [isOpenSearch, setIsOpenSearch] = useState(true);
    const { topNavbarBgColor, navbarFixed, isDark, activeVariation } =
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
        <div
            className={`p-0 ${navbarStyle[topNavbarBgColor]} ${
                navbarStyle.top_navbar
            } ${
                navbarFixed || activeVariation === "combo"
                    ? navbarStyle.top_fixed
                    : ""
            }`}
            dark-mode={isDark ? "true" : "false"}
        >
            <Navbar className={navbarStyle.navbar}>
                <Container fluid className="px-4">
                    <Navbar.Collapse className="justify-content-between">
                        <Nav className={navbarStyle.navbar_nav}>
                            <div className={navbarStyle.logo_container}>
                                <button
                                    type="button"
                                    onClick={() => setSidebarMini(!sidebarMini)}
                                >
                                    <i className="fa-solid fa-bars"></i>
                                </button>

                                <a href="/" className={navbarStyle.logo}>
                                    {!isDark ? (
                                        <img
                                            src={
                                                topNavbarBgColor === "bg_white"
                                                    ? black_logo
                                                    : logo
                                            }
                                            alt="basix-admin"
                                        />
                                    ) : (
                                        <img src={logo} alt="basix-admin" />
                                    )}
                                </a>
                            </div>
                        </Nav>
                        <Nav
                            className={`${navbarStyle.combo_nav} ${
                                sidebarMini ? navbarStyle.toggle_menu : ""
                            }`}
                        >
                            <ul className={`${navbarStyle.nav}`}>
                                {miniNav?.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`${navbarStyle.nav_item} ${
                                            item.title ? "d-none" : ""
                                        }`}
                                    >
                                        {(item?.path && (
                                            <Fragment>
                                                {isEmpty(item?.children) ? (
                                                    <Link
                                                        to={item?.path}
                                                        className="d-flex justify-content-between align-items-center"
                                                    >
                                                        <div className="d-flex align-items-center">
                                                            <i
                                                                className={`${item.icon} ${navbarStyle.menu_icon}`}
                                                            ></i>
                                                            <span>
                                                                {item.name}
                                                            </span>
                                                        </div>
                                                    </Link>
                                                ) : (
                                                    <a className="d-flex justify-content-between align-items-center user-select-none">
                                                        <div className="d-flex align-items-center">
                                                            <i
                                                                className={`${item.icon} menu-icon`}
                                                            ></i>
                                                            <span>
                                                                {item.name}
                                                            </span>
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
                                                    <div className="d-flex align-items-center">
                                                        <i
                                                            className={`${item.icon} menu-icon`}
                                                        ></i>
                                                        <span>{item.name}</span>
                                                    </div>
                                                </a>
                                            ))}
                                        {item.children ? (
                                            <ul
                                                className={navbarStyle.sub_menu}
                                            >
                                                {item?.children?.map(
                                                    (childItem, index) => (
                                                        <li
                                                            key={index}
                                                            className={
                                                                navbarStyle.nav_item
                                                            }
                                                        >
                                                            <Link
                                                                to={
                                                                    childItem?.path
                                                                }
                                                                className="d-flex justify-content-between align-items-center"
                                                            >
                                                                <div className="d-flex align-items-center">
                                                                    <i
                                                                        className={`${childItem.icon} menu-icon`}
                                                                    ></i>
                                                                    <span>
                                                                        {
                                                                            childItem.name
                                                                        }
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
                        </Nav>
                        <Nav className={navbarStyle.navbar_nav}>
                            <ul
                                className={navbarStyle.social_item}
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
                                            setOpenNotification(
                                                !openNotification
                                            );
                                            setOpenMessage(true);
                                            setOpenUser(true);
                                        }}
                                        className={navbarStyle.for_notification}
                                    >
                                        <i className="fa fa-bell"></i>
                                        <span
                                            className={`${navbarStyle.count} bg-danger`}
                                        >
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
                                        className={navbarStyle.for_message}
                                    >
                                        <i className="fa-solid fa-envelope"></i>
                                        <span
                                            className={`${navbarStyle.count} bg-primary`}
                                        >
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
                                    <div className={navbarStyle.user_area}>
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
                                        <DropdownMenu left="168px" right="62px">
                                            <UserProfile />
                                        </DropdownMenu>
                                    ) : null}
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {!isOpenSearch ? (
                <SearchBar
                    isOpenSearch={isOpenSearch}
                    setIsOpenSearch={setIsOpenSearch}
                />
            ) : null}
        </div>
    );
};

export default HorizontalNav;

