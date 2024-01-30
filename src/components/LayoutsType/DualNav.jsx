import { Outlet } from "react-router-dom";
import DualTopNav from "../Navbars/NavbarType/DualTopNav";
import layoutStyle from "../../assets/scss/variation/layouts/DualNav.module.scss";
import { useDashboardDataContext } from "../../context/dashboardDataContext";

const DualNav = ({ sidebarMini, setSidebarMini }) => {
    const { navbarFixed, isThemeDirection } =
        useDashboardDataContext();
    return (
        <div
            className={layoutStyle.layout_container}
            data={!isThemeDirection ? "false" : "true"}
        >
            <DualTopNav
                sidebarMini={sidebarMini}
                setSidebarMini={setSidebarMini}
            />

            <div
                className={layoutStyle.content}
                style={{ marginTop: `${navbarFixed ? "150px" : "0"}`}}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default DualNav;

