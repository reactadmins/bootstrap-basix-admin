import { Card } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

const UserStats = ({
    bgColor = "",
    icon = "",
    conunt = "",
    title = "",
    size = "17px",
    progressBg = "#fff",
    progressPercent = "",
    isAnimated = "",
}) => {
    return (
        <Card
            className="rounded-0"
            style={{
                backgroundColor: `${bgColor ? bgColor : "var(--bg-content)"}`,
                border: "1px solid var(--border-color)",
            }}>
            <Card.Body>
                <div className="text-end mb-3">
                    <i
                        className={`${icon}`}
                        style={{
                            fontSize: size,
                            color: `${bgColor ? "#fff" : "var(--content-text-color)"}`,
                        }}></i>
                </div>
                <div>
                    <h2
                        style={{
                            fontSize: "1.5rem",
                            color: `${bgColor ? "#fff" : "var(--hedging-text-color)"}`,
                            fontWeight: "500",
                        }}>
                        {conunt}
                    </h2>
                    <span
                        className="d-block text-uppercase"
                        style={{
                            fontSize: "14px",
                            color: `${bgColor ? "#fff" : "var(--content-text-color)"}`,
                            fontWeight: "700",
                        }}>
                        {title}
                    </span>
                </div>
                <div className={`mt-3 ${size == "2xl" ? "mb-3" : "mb-2"}`}>
                    {/* <ProgressBar
                        isAnimated={isAnimated}
                        value={progressPercent}
                        ProgressBarBg="transparent"
                        height="5px"
                        progressBg={progressBg}
                    /> */}
                </div>
            </Card.Body>
        </Card>
    );
};

export default UserStats;

