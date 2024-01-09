import { Fragment, useEffect, useState } from "react";
import { useDashboardDataContext } from "../../context/dashboardDataContext";
import sidebarBg1 from "./sidebar-bg/SidebarBg-1.jpg";
import sidebarBg2 from "./sidebar-bg/SidebarBg-2.jpg";
import sidebarBg3 from "./sidebar-bg/SidebarBg-3.jpg";
import sidebarBg4 from "./sidebar-bg/SidebarBg-4.jpg";
import sidebarBg5 from "./sidebar-bg/SidebarBg-5.jpg";


export const SwitchControl = ({
    directionType = "",
    title,
    switchType = "groupSwatch",
    buttonList = "",
    activeSwitch,
    isActiveSwitch,
}) => {
    const [active, setActive] = useState(1);
    return (
        <div className={SwitcherStyle.switch_contorl}>
            <div
                className={SwitcherStyle.toggle_button}
                style={{
                    gap: `${directionType === "vertical" ? "10px" : ""}`,
                }}
            >
                <span>{title}</span>
                {switchType === "checkbox" ? (
                    <button
                        type="button"
                        className={`${SwitcherStyle.switch} ${
                            activeSwitch ? SwitcherStyle.active : ""
                        }`}
                        onClick={() => isActiveSwitch(!activeSwitch)}
                    >
                        <input type="checkbox" />
                        <span className={SwitcherStyle.slider}></span>
                    </button>
                ) : (
                    <div className={SwitcherStyle.group_swatch}>
                        {buttonList.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <button
                                        type="button"
                                        style={{
                                            color: `${
                                                active === index + 1
                                                    ? "#fff"
                                                    : "#475467"
                                            }`,
                                            backgroundColor: `${
                                                active === index + 1
                                                    ? "#7A5AF8"
                                                    : "transparent"
                                            }`,
                                            borderColor: `${
                                                active === index + 1
                                                    ? "#7A5AF8"
                                                    : "#f8f9fc"
                                            }`,
                                        }}
                                        onClick={() => {
                                            isActiveSwitch(!activeSwitch);
                                            setActive(index + 1);
                                        }}
                                    >
                                        {item.name}
                                    </button>
                                </Fragment>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export const ColorControl = ({ title, bgList, bgColorName, selectedBg }) => {
    const [active, setActive] = useState(bgColorName);

    useEffect(() => {
        bgList.filter((item) => {
            if (item.name === active) {
                selectedBg(item.name);
            }
        });
    }, [active, bgList, selectedBg]);

    return (
        <div className={SwitcherStyle.color_control_wrapper}>
            <h2 className={SwitcherStyle.title}>{title}</h2>
            <div className={SwitcherStyle.bg_wrapper}>
                {bgList?.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <button
                                type="button"
                                style={{
                                    backgroundColor: `${item.bg}`,
                                }}
                                className={`${
                                    active === item.name
                                        ? SwitcherStyle.active
                                        : ""
                                }`}
                                onClick={() => {
                                    setActive(item.name);
                                }}
                            >
                                <span
                                    style={{
                                        color: `${
                                            active === item.name
                                                ? item.activeColor
                                                : ""
                                        }`,
                                    }}
                                ></span>
                            </button>
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export const SidebarBgControl = () => {
    const { sidebarBgImg, setSidebarBgImg } = useDashboardDataContext();
    const [selected, setSelected] = useState(3);
    const bgImg = [
        { url: sidebarBg1 },
        { img_url: sidebarBg2 },
        { img_url: sidebarBg3 },
        { img_url: sidebarBg4 },
        { img_url: sidebarBg5 },
    ];
    useEffect(() => {
        const sidebarBg = bgImg.filter((item, index) =>
            index + 1 === selected && !item.url ? item.img_url : ""
        );
        setSidebarBgImg(sidebarBg.map((i) => i.img_url));
    }, [selected, setSidebarBgImg]);
    return (
        <div className={SwitcherStyle.switcher_wrapper}>
            <span className={SwitcherStyle.title}>Sidebar BG Image</span>
            <div className={SwitcherStyle.bg_container}>
                {bgImg.map((item, index) => {
                    return (
                        <div
                            className={`position-relative ${
                                selected === index + 1
                                    ? SwitcherStyle.active
                                    : ""
                            }`}
                            onClick={() => {
                                setSelected(index + 1);
                            }}
                            key={index}
                        >
                            {item.url && (
                                <img src={item.url} alt="sidebar bg img" />
                            )}
                            {item.img_url && (
                                <img src={item.img_url} alt="sidebar bg img" />
                            )}

                            <span
                                style={{
                                    color: `${
                                        sidebarBgImg?.length === 0
                                            ? "#1b5de0"
                                            : "#fff"
                                    }`,
                                }}
                            ></span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Switcher = ({ setSidebarMini, sidebarMini }) => {
    const {
        isSwitcher,
        setIsSwitcher,
        topNavbarBgColor,
        sidebarBgColor,
        setSidebarBgColor,
        setTopNavbarBgColor,
        navbarFixed,
        setNavbarFixed,
        isDark,
        setIsDark,
        isThemeDirection,
        setIsThemeDirection,
    } = useDashboardDataContext();

    const layoutsTheme = [
        {
            name: "Light",
        },
        {
            name: "Dark",
        },
    ];

    const themeDirection = [
        {
            name: "LTR",
        },
        {
            name: "RTL",
        },
    ];

    const sidebarBg = [
        {
            name: "bg_white",
            activeColor: "#1B5DE0",
            bg: "#F4F4F4",
        },
        {
            name: "bg_black",
            activeColor: "#fff",
            bg: "#292b35",
        },
        {
            name: "bg_red",
            activeColor: "#fff",
            bg: "#f44336",
        },
    ];

    const navbarBg = [
        {
            name: "bg_white",
            activeColor: "#1B5DE0",
            bg: "#F4F4F4",
        },
        {
            name: "bg_black",
            activeColor: "#fff",
            bg: "#263238",
        },
        {
            name: "bg_red",
            activeColor: "#fff",
            bg: "#f44336",
        },
    ];

    return (
        <div
            className={SwitcherStyle.switch_wrapper}
            data={!isThemeDirection ? "false" : "true"}
        >
            <button
                type="button"
                className={SwitcherStyle.switch_btn}
                onClick={() => setIsSwitcher(!isSwitcher)}
            >
                <i className="fa-solid fa-gear"></i>
            </button>
            <div
                className={`${isSwitcher ? "d-none" : "d-block"} ${
                    SwitcherStyle.switch_menu
                }`}
            >
                <div className="px-3">
                    <SwitchControl
                        title="Layouts Theme"
                        directionType="vertical"
                        buttonList={layoutsTheme}
                        activeSwitch={isDark}
                        isActiveSwitch={setIsDark}
                    />
                    <SwitchControl
                        title="Theme Direction"
                        buttonList={themeDirection}
                        activeSwitch={isThemeDirection}
                        isActiveSwitch={setIsThemeDirection}
                    />

                    <SwitchControl
                        title="Navbar Fixed"
                        switchType="checkbox"
                        activeSwitch={navbarFixed}
                        isActiveSwitch={setNavbarFixed}
                    />

                    <SwitchControl
                        title="Sidebar Collapse"
                        switchType="checkbox"
                        activeSwitch={sidebarMini}
                        isActiveSwitch={setSidebarMini}
                    />
                    <ColorControl
                        title="Navbar BG Color Options"
                        bgList={navbarBg}
                        bgColorName={topNavbarBgColor}
                        selectedBg={setTopNavbarBgColor}
                    />

                    <ColorControl
                        title="Sidebar BG Color Options"
                        bgList={sidebarBg}
                        bgColorName={sidebarBgColor}
                        selectedBg={setSidebarBgColor}
                    />
                    <SidebarBgControl />
                    <div className="py-3">
                        <a href="#" className={SwitcherStyle.bownload_btn}>
                            Download Free
                        </a>
                        <a
                            href="#"
                            className={`${SwitcherStyle.purchase_btn} mt-2`}
                        >
                            Purchase Now
                        </a>
                        <a
                            href="#"
                            className={`${SwitcherStyle.documentatione_btn} mt-2`}
                        >
                            Documentation
                        </a>
                    </div>
                    <div className={`${SwitcherStyle.social_btn} mt-3`}>
                        <a href="#" className={SwitcherStyle.facebook_btn}>
                            <i className="fa-brands fa-facebook"></i>
                            <span>Share</span>
                        </a>
                        <a href="#" className={SwitcherStyle.twitter_btn}>
                            <i className="fa-brands fa-twitter"></i>
                            <span>Tweet</span>
                        </a>
                    </div>
                </div>
            </div>
            {!isSwitcher ? (
                <div
                    className={SwitcherStyle.overlay_bg}
                    onClick={() => setIsSwitcher(!isSwitcher)}
                ></div>
            ) : null}
        </div>
    );
};

export default Switcher;

