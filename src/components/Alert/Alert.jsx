const Alert = ({
    type = "",
    title = "",
    badgeTitle = "",
    alertBg = "",
    alertContent = "",
}) => {
    return (
        <div
            className={`alert alert-${alertBg} ${
                type === "dismissible" ? "alert-dismissible fade show" : ""
            }`}
            role="alert"
        >
            {badgeTitle && (
                <span className={`badge  bg-${alertBg} mx-1`}>
                    {badgeTitle}
                </span>
            )}
            {type === "content" ? (
                <h4 className="alert-heading fs-5">{title}</h4>
            ) : (
                title
            )}
            {alertContent}
            {type === "dismissible" && (
                <button
                    style={{ fontSize: "13px" }}
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
            )}
        </div>
    );
};

export default Alert;

