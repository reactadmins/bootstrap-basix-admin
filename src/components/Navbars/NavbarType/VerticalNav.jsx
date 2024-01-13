import { useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";
import Notification from "../Notification/Notification";
import Message from "../Message/Message";
import UserProfile from "../UserProfile/UserProfile";
import SearchBar from "../../SearchBar/SearchBar";
import profile from "../../../assets/image/admin.jpg";
import { useDashboardDataContext } from "../../../context/dashboardDataContext";
import navbarStyle from "../../../assets/scss/variation/topNav/VerticalNav.module.scss";
import DarkModeSwitch from "../../DarkModeSwitch/DarkModeSwitch";

const VerticalNav = ({ setSidebarMini, sidebarMini }) => {
    const [openNotification, setOpenNotification] = useState(true);
    const [openMessage, setOpenMessage] = useState(true);
    const [openUser, setOpenUser] = useState(true);
    const [isOpenSearch, setIsOpenSearch] = useState(true);
    const { topNavbarBgColor, navbarFixed, isThemeDirection, isDark } =
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
            className={`${navbarStyle.top_navbar} ${
                navbarFixed ? navbarStyle.fixed_top : "position-relative"
            }`}
            dark-mode={isDark ? "true" : "false"}
        >
            <Navbar className={`p-0 ${navbarStyle.navbar}`}>
                <Container
                    fluid
                    className={`${navbarStyle[topNavbarBgColor]} ${navbarStyle.container_fluid}`}
                >
                    <Navbar.Collapse
                        className={`justify-content-between ${navbarStyle.navbar_collapse}`}
                    >
                        <Nav className={navbarStyle.navbar_nav}>
                            <ul
                                className={navbarStyle.header_left}
                                ref={dropRef}
                                style={{
                                    paddingLeft: `${!sidebarMini ? "5px" : ""}`,
                                }}
                            >
                                <li
                                    className={`${navbarStyle.sidebar_menu} ${
                                        sidebarMini ? navbarStyle.active : ""
                                    }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSidebarMini(!sidebarMini)
                                        }
                                    >
                                        <span
                                            className={
                                                navbarStyle.sidebar_menu_icon
                                            }
                                        ></span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setIsOpenSearch(!isOpenSearch)
                                        }
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
                                        }}
                                        className={navbarStyle.for_notification}
                                    >
                                        <i className="fa fa-bell"></i>
                                        <span
                                            className={`${navbarStyle.count} ${
                                                topNavbarBgColor === "red"
                                                    ? "bg-info"
                                                    : "bg-danger"
                                            }`}
                                        >
                                            5
                                        </span>
                                    </button>
                                    {!openNotification ? (
                                        <DropdownMenu top="66px" right="auto">
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
                                        <DropdownMenu top="66px" right="auto">
                                            <Message />
                                        </DropdownMenu>
                                    ) : null}
                                </li>
                            </ul>
                        </Nav>
                        <Nav
                            className={`${navbarStyle.navbar_nav} ${navbarStyle.navbar_nav_right}`}
                            ref={dropRef}
                        >
                            <DarkModeSwitch />
                            <div className={navbarStyle.user_area}>
                                <a
                                    href="#"
                                    onClick={() => {
                                        setOpenUser(!openUser);
                                        setOpenMessage(true);
                                        setOpenNotification(true);
                                    }}
                                    className={navbarStyle.user_dropdown}
                                >
                                    <img src={profile} alt="uesr" />
                                </a>
                            </div>
                            {!openUser ? (
                                <DropdownMenu top="50px" right="26px">
                                    <UserProfile
                                        isThemeDirection={isThemeDirection}
                                    />
                                </DropdownMenu>
                            ) : null}
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

export default VerticalNav;

