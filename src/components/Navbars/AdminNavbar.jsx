import { useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Notification from "./Notification/Notification";
import Message from "./Message/Message";
import UserProfile from "./UserProfile/UserProfile";
import SearchBar from "../SearchBar/SearchBar";
import profile from "../../assets/img/admin.jpg";
import { useDashboardDataContext } from "../../context/dashboardDataContext";
import AdminNavbarStyle from "../../assets/scss/AdminNavbar.module.scss";

const AdminNavbar = ({ setSidebarMini, sidebarMini }) => {
    const [openNotification, setOpenNotification] = useState(true);
    const [openMessage, setOpenMessage] = useState(true);
    const [openUser, setOpenUser] = useState(true);
    const [isOpenSearch, setIsOpenSearch] = useState(true);
    const { topNavbarBgColor, navbarFixed, isThemeDirection } =
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
            className={`${AdminNavbarStyle.top_navbar} ${
                navbarFixed ? AdminNavbarStyle.fixed_top : "position-relative"
            }`}
        >
            <Navbar className={`p-0 ${AdminNavbarStyle.navbar}`}>
                <Container
                    fluid
                    className={`${AdminNavbarStyle[topNavbarBgColor]} ${AdminNavbarStyle.container_fluid}`}
                >
                    <Navbar.Collapse
                        className={`justify-content-between ${AdminNavbarStyle.navbar_collapse}`}
                    >
                        <Nav className={AdminNavbarStyle.navbar_nav}>
                            <ul
                                className={AdminNavbarStyle.header_left}
                                ref={dropRef}
                                style={{
                                    paddingLeft: `${!sidebarMini ? "5px" : ""}`,
                                }}
                            >
                                <li
                                    className={`${
                                        AdminNavbarStyle.sidebar_menu
                                    } ${
                                        sidebarMini
                                            ? AdminNavbarStyle.active
                                            : ""
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
                                                AdminNavbarStyle.sidebar_menu_icon
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
                                        className={
                                            AdminNavbarStyle.for_notification
                                        }
                                    >
                                        <i className="fa fa-bell"></i>
                                        <span
                                            className={`${
                                                AdminNavbarStyle.count
                                            } ${
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
                                        className={AdminNavbarStyle.for_message}
                                    >
                                        <i className="fa-solid fa-envelope"></i>
                                        <span
                                            className={`${AdminNavbarStyle.count} bg-primary`}
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
                            className={AdminNavbarStyle.navbar_nav}
                            ref={dropRef}
                        >
                            <div className={AdminNavbarStyle.user_area}>
                                <a
                                    href="#"
                                    onClick={() => {
                                        setOpenUser(!openUser);
                                        setOpenMessage(true);
                                        setOpenNotification(true);
                                    }}
                                    className={AdminNavbarStyle.user_dropdown}
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

export default AdminNavbar;

