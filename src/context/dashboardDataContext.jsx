import { createContext, useContext, useEffect, useState } from "react";

export const DashboardDataCreateContext = createContext();

export const DashboardDataProvider = ({ children }) => {
    const [isSwitcher, setIsSwitcher] = useState(true);
    const [navbarFixed, setNavbarFixed] = useState(false);
    const [isDark, setIsDark] = useState();
    const [isThemeDirection, setIsThemeDirection] = useState(false);
    const [topNavbarBgColor, setTopNavbarBgColor] = useState("bg_white");
    const [sidebarBgColor, setSidebarBgColor] = useState("bg_black");
    const [sidebarBgImg, setSidebarBgImg] = useState();

    useEffect(() => {
        let element = document.body;
        if (isThemeDirection === false) {
            element.classList.add("direction_ltr");
            element.classList.remove("direction_rtl");
        } else if (isThemeDirection === true) {
            element.classList.add("direction_rtl");
            element.classList.remove("direction_ltr");
        }
    }, [isThemeDirection]);

    return (
        <DashboardDataCreateContext.Provider
            value={{
                isSwitcher,
                setIsSwitcher,
                sidebarBgColor,
                setSidebarBgColor,
                topNavbarBgColor,
                setTopNavbarBgColor,
                navbarFixed,
                setNavbarFixed,
                isDark,
                setIsDark,
                sidebarBgImg,
                setSidebarBgImg,
                isThemeDirection,
                setIsThemeDirection,
            }}
        >
            {children}
        </DashboardDataCreateContext.Provider>
    );
};

export const useDashboardDataContext = () => {
    return useContext(DashboardDataCreateContext);
};

