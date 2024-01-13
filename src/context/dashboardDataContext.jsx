import { createContext, useContext, useEffect, useState } from "react";

export const DashboardDataCreateContext = createContext();

export const DashboardDataProvider = ({ children }) => {
    const [navbarFixed, setNavbarFixed] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [isThemeDirection, setIsThemeDirection] = useState(false);
    const [topNavbarBgColor, setTopNavbarBgColor] = useState("bg_white");
    const [sidebarBgColor, setSidebarBgColor] = useState("bg_black");
    const [sidebarBgImg, setSidebarBgImg] = useState();
    const [activeVariation, setActiveVariation] = useState("vertical");

    useEffect(() => {
        let element = document.body;
        if (!isThemeDirection) {
            element.classList.add("direction_ltr");
            element.classList.remove("direction_rtl");
        } else if (isThemeDirection) {
            element.classList.add("direction_rtl");
            element.classList.remove("direction_ltr");
        }
    }, [isThemeDirection]);

    useEffect(() => {
        let element = document.body;
        if (!isDark) {
            element.classList.add("light");
            element.classList.remove("dark");
        } else if (isDark) {
            element.classList.add("dark");
            element.classList.remove("light");
        }
    }, [isDark]);

    return (
        <DashboardDataCreateContext.Provider
            value={{
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
                activeVariation,
                setActiveVariation,
            }}
        >
            {children}
        </DashboardDataCreateContext.Provider>
    );
};

export const useDashboardDataContext = () => {
    return useContext(DashboardDataCreateContext);
};

