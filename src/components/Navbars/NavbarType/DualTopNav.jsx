import { useState, useEffect, useRef, Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import profile from "../../../assets/image/admin.jpg";
import light_logo from "../../../assets/image/logo.png";
import mini_light_logo from "../../../assets/image/mini-logo.png";
import black_logo from "../../../assets/image/black-logo.png";
import black_mini_logo from "../../../assets/image/black-mini-logo.png";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";
import Notification from "../Notification/Notification";
import Message from "../Message/Message";
import UserProfile from "../UserProfile/UserProfile";
import { useDashboardDataContext } from "../../../context/dashboardDataContext";
import navbarStyle from "../../../assets/scss/variation/topNav/DualTopNav.module.scss";
import { navItems } from "../../../nav";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";
import DarkModeSwitch from "../../DarkModeSwitch/DarkModeSwitch";

const DualTopNav = ({ sidebarMini, setSidebarMini }) => {
    const [openNotification, setOpenNotification] = useState(true);
    const [openMessage, setOpenMessage] = useState(true);
    const [openUser, setOpenUser] = useState(true);
    const [navIsOpen, setNavIsOpen] = useState(null);
    const { topNavbarBgColor, navbarFixed, isDark } = useDashboardDataContext();

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
            <Navbar
                className={`${navbarStyle.top_navbar} ${
                    navbarFixed ? navbarStyle.fixed_top : ""
                } p-0 flex-column`}
            >
                <Container fluid className="px-4">
                    <Navbar.Collapse
                        className={`${navbarStyle.collapse} justify-content-between`}
                    >
                        <Nav className={navbarStyle.navbar_nav}>
                            <div className={navbarStyle.logo_container}>
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
                                <a href="/">
                                    <img
                                        className={navbarStyle.logo}
                                        src={isDark ? light_logo : black_logo}
                                        alt="basix-admin"
                                    />
                                    <img
                                        className={navbarStyle.mini_logo}
                                        src={
                                            isDark
                                                ? mini_light_logo
                                                : black_mini_logo
                                        }
                                        alt="basix-admin"
                                    />
                                </a>
                            </div>
                        </Nav>
                        <div className={navbarStyle.search_container}>
                            <button
                                type="button"
                                className={navbarStyle.search_btn}
                            >
                                <i className="fa fa-search"></i>
                            </button>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="search..."
                                className={navbarStyle.search_field}
                            />
                        </div>
                        <Nav>
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
                                            className={`${navbarStyle.count}  bg-danger`}
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
                                            className={
                                                navbarStyle.user_dropdown
                                            }
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
                <div
                    data={isDark ? "true" : "false"}
                    className={`${navbarStyle.duall_navbar} ${
                        navbarStyle[topNavbarBgColor]
                    } ${sidebarMini ? navbarStyle.toggle_menu : ""}`}
                >
                    <ul className={`${navbarStyle.nav} nav navbar-nav`}>
                        {navItems?.map((item, index) => (
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
                                                <div className="d-flex align-items-center">
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
                                            <div className="d-flex align-items-center">
                                                <i
                                                    className={`${item.icon} menu-icon`}
                                                ></i>
                                                <span>{item.name}</span>
                                            </div>
                                        </a>
                                    ))}
                                {item.children ? (
                                    <ul className={navbarStyle.sub_menu}>
                                        {item?.children?.map(
                                            (childItem, index) => (
                                                <li
                                                    key={index}
                                                    className={
                                                        navbarStyle.nav_item
                                                    }
                                                >
                                                    <Link
                                                        to={childItem?.path}
                                                        className="d-flex justify-content-between align-items-center"
                                                    >
                                                        <div className="d-flex align-items-center">
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
            </Navbar>
        </Fragment>
    );
};

export default DualTopNav;

