import { Outlet } from "react-router-dom";
import HorizontalNav from "../Navbars/NavbarType/HorizontalNav";
import ComboSidebar from "../Sidebar/ComboSidebar";
import layoutStyle from "../../assets/scss/variation/layouts/Combo.module.scss";
import { useDashboardDataContext } from "../../context/dashboardDataContext";

const Combo = ({ setSidebarMini, sidebarMini }) => {
    const { isThemeDirection } = useDashboardDataContext();
    
    return (
        <div
            className={layoutStyle.layouts_container}
            data={!isThemeDirection ? "false" : "true"}
        >
            <HorizontalNav
                setSidebarMini={setSidebarMini}
                sidebarMini={sidebarMini}
            />
            <div style={{ marginTop: "80px" }}>
                <div
                    className={`${layoutStyle.sidebar_nav} ${
                        sidebarMini ? layoutStyle.active_menu : ""
                    }`}
                >
                    <ComboSidebar
                        setSidebarMini={setSidebarMini}
                        sidebarMini={sidebarMini}
                    />
                </div>

                <div
                    className={`${layoutStyle.right_panel} ${
                        sidebarMini ? layoutStyle.sidebar_mini : ""
                    }`}
                >
                    <div className={layoutStyle.content}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Combo;

