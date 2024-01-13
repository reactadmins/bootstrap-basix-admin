import { Outlet } from "react-router-dom";
import HorizontalNav from "../Navbars/NavbarType/HorizontalNav";
import { useDashboardDataContext } from "../../context/dashboardDataContext";
import layoutStyle from "../../assets/scss/variation/layouts/Horizontal.module.scss";

const Horizontal = ({ setSidebarMini, sidebarMini }) => {
    const { navbarFixed, isThemeDirection } =
        useDashboardDataContext();
    return (
        <div
            className={layoutStyle.layouts_container}
            data={!isThemeDirection ? "false" : "true"}
        >
            <HorizontalNav
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
    );
};

export default Horizontal;

