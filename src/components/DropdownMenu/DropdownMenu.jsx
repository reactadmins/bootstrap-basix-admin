import { useDashboardDataContext } from "@/context/dashboardDataContext";

const DropdownMenu = ({ children, left = 0, right }) => {
    const { isThemeDirection } = useDashboardDataContext();
    return (
        <div
            style={{
                position: "absolute",
                top: "85px",
                left: isThemeDirection === true && left,
                right: isThemeDirection === false && right,
                zIndex: "9999999",
            }}
        >
            {children}
        </div>
    );
};

export default DropdownMenu;

