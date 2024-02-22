import "./ProgressBar.scss"

const ProgressBar = ({
    isAnimated = false,
    isStriped = false,
    variant = "success",
    value = "10",
    label,
    percent = ""
}) => {
    
    return (
        <div
            className={`progressbar_container progressbar-container rounded-1`}
            style={{ height: "16px", backgroundColor: "#E9ECEF" }}
        >
            <div
                className={`rounded-1 progress ${
                    isAnimated ? "progress_bar" : ""
                }  ${isStriped ? "progress-bar-striped" : ""} bg-${variant}`}
                role="progressbar"
                style={{
                    width: `${value}%`,
                    height: "100%",
                    alignItems: "center",
                }}
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                {label && (
                    <span
                        className="labels text-white d-block text-center w-100"
                        style={{ fontSize: "13px" }}
                    >
                        {label}%
                    </span>
                )}
            </div>
        </div>
    );
};

export default ProgressBar;

