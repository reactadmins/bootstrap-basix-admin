import Combo from "../components/LayoutsType/Combo";
import DualNav from "../components/LayoutsType/DualNav";
import Horizontal from "../components/LayoutsType/Horizontal";
import Vertical from "../components/LayoutsType/Vertical";
import { useDashboardDataContext } from "../context/dashboardDataContext";

const Layouts = ({ setSidebarMini, sidebarMini }) => {
    const { activeVariation } = useDashboardDataContext();
    switch (activeVariation ? activeVariation : "vertical") {
        case "vertical": {
            return (
                <Vertical
                    sidebarMini={sidebarMini}
                    setSidebarMini={setSidebarMini}
                />
            );
        }
        case "horizontal": {
            return (
                <Horizontal
                    sidebarMini={sidebarMini}
                    setSidebarMini={setSidebarMini}
                />
            );
        }
        case "combo": {
            return (
                <Combo
                    sidebarMini={sidebarMini}
                    setSidebarMini={setSidebarMini}
                />
            );
        }
        case "dual_nav": {
            return (
                <DualNav
                    sidebarMini={sidebarMini}
                    setSidebarMini={setSidebarMini}
                />
            );
        }
        default:
            return null;
    }
};

export default Layouts;

