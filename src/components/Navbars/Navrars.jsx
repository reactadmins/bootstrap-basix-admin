import { useDashboardDataContext } from "../../context/dashboardDataContext";
import Combo from "./NavbarType/Combo";
import DualTopNav from "./NavbarType/DualTopNav";
import HorizontalNav from "./NavbarType/HorizontalNav";
import VerticalNav from "./NavbarType/VerticalNav";

const Navbars = () => {
    const { activeVariation } = useDashboardDataContext();
    switch (activeVariation) {
        case "vertical":
            return <VerticalNav />;
        case "horizontal":
            return <HorizontalNav />;
        case "combo":
            return <Combo type="combo" />;
        case "dual_nav":
            return <DualTopNav type={activeVariation} />;
        default:
            return null;
    }
};

export default Navbars;

