import { useEffect, useRef, useState } from "react";
import style from "@/assets/scss/SidebarBgWrapper.module.scss";
import { useDashboardDataContext } from "@/context/dashboardDataContext";

const SidebarBgWrapper = ({ type, children }) => {
    const [selectSize, setSelectSize] = useState(null);
    const { sidebarMini, setSidebarMini, sidebarBgColor, sidebarBgImg } =
        useDashboardDataContext();

    const ref = useRef();

    useEffect(() => {
        window.onresize = function () {
            setSelectSize(window.screen.width);
        };
        if (selectSize === 1024 || selectSize > 0) {
            const handleClickOutside = (event) => {
                if (!ref?.current?.contains(event.target)) {
                    setSidebarMini(true);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
        }
    }, [ref, selectSize]);

    return (
        <div
            ref={ref}
            data-background-color={sidebarBgColor}
            theme-type={type === "combo" ? "combo" : ""}
            className={`${style.sidebar_bg} ${sidebarMini ? style.active : ""}`}
        >
            {children}
            <div
                style={{
                    backgroundImage: `url(${sidebarBgImg ? sidebarBgImg : ""})`,
                }}
                className={style.overlay_bg}
            ></div>
        </div>
    );
};

export default SidebarBgWrapper;

