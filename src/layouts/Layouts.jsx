import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import { useDashboardDataContext } from "../context/dashboardDataContext";
import LayoutStyle from "../assets/scss/Layouts.module.scss";

const Layouts = ({ setSidebarMini, sidebarMini }) => {
    const { isSwitcher, navbarFixed, isThemeDirection } =
        useDashboardDataContext();
    return (
        <div
            className={`${LayoutStyle.layouts_container} ${
                !isSwitcher ? LayoutStyle.switcher_active : ""
            }`}
            data={!isThemeDirection ? "false" : "true"}
        >
            <div
                className={`${LayoutStyle.sidebar_nav} ${
                    sidebarMini ? LayoutStyle.active_menu : ""
                }`}
            >
                <Sidebar
                    setSidebarMini={setSidebarMini}
                    sidebarMini={sidebarMini}
                />
            </div>
            <div
                className={`${LayoutStyle.right_panel} ${
                    sidebarMini ? LayoutStyle.sidebar_mini : ""
                }`}
            >
                <AdminNavbar
                    setSidebarMini={setSidebarMini}
                    sidebarMini={sidebarMini}
                />
                <div
                    className={LayoutStyle.content}
                    style={{ marginTop: `${navbarFixed ? "80px" : "0"}` }}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layouts;

