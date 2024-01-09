const DropdownMenu = ({ children }) => {
    return (
        <div style={{ position: "absolute", top: "66px", zIndex: "999" }}>
            {children}
        </div>
    );
};

export default DropdownMenu;

