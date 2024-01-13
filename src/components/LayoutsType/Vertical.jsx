import { Outlet } from "react-router-dom";
import VerticalSidebar from "../Sidebar/VerticalSidebar";
import VerticalNav from "../Navbars/NavbarType/VerticalNav";
import { useDashboardDataContext } from "../../context/dashboardDataContext";
import layoutStyle from "../../assets/scss/variation/layouts/Vertical.module.scss";

const Vertical = ({ setSidebarMini, sidebarMini }) => {
    const { navbarFixed, isThemeDirection } =
        useDashboardDataContext();
    return (
        <div
            className={layoutStyle.layout_container}
            data={!isThemeDirection ? "false" : "true"}
        >
            <div
                className={`${layoutStyle.sidebar_nav} ${
                    sidebarMini ? layoutStyle.active_menu : ""
                }`}
            >
                <VerticalSidebar
                    setSidebarMini={setSidebarMini}
                    sidebarMini={sidebarMini}
                />
            </div>
            <div
                className={`${layoutStyle.right_panel} ${
                    sidebarMini ? layoutStyle.sidebar_mini : ""
                }`}
            >
                <VerticalNav
                    setSidebarMini={setSidebarMini}
                    sidebarMini={sidebarMini}
                />
                <div
                    className={layoutStyle.content}
                    style={{ marginTop: `${navbarFixed ? "80px" : "0"}` }}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Vertical;

