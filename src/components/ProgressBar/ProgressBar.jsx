import "../../assets/scss/ProgressBar.scss";

const ProgressBar = ({
    isProgress = false,
    isStriped = false,
    percent = "0",
    height = "16",
    progressBg = "#E9ECEF",
    strokeColor = "#fff",
    labels,
}) => {
    return (
        <div
            className={`progressbar_container progressbar-container rounded-1`}
            style={{ height: `${height}px`, backgroundColor: `${progressBg}` }}
        >
            <div
                className={`rounded-1 progress ${
                    isProgress ? "progress_bar" : ""
                }  ${isStriped ? "progress-bar-striped" : ""}`}
                role="progressbar"
                style={{
                    backgroundColor: `${strokeColor}`,
                    width: `${percent}%`,
                    height: "100%",
                }}
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                {labels && (
                    <span
                        className="labels text-white d-block text-center w-100"
                        style={{ fontSize: "13px" }}
                    >
                        {labels}%
                    </span>
                )}
            </div>
        </div>
    );
};

export default ProgressBar;

