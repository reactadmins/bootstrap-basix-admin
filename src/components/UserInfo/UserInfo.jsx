import { Card } from "react-bootstrap";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useDashboardDataContext } from "../../context/dashboardDataContext";

const UserInfo = ({
    cardBg = "#fff",
    icon = "",
    conunt = "",
    title = "",
    iconfontSize = "sm",
    ProgressBarBg = "#fff",
    progressPercent = "",
}) => {
    const { isDark } = useDashboardDataContext();
    return (
        <Card
            className="rounded-0"
            style={{
                borderColor: "var(--border-color)",
                backgroundColor: `${isDark ? "var(--bg-content)" : cardBg}`,
            }}
        >
            <Card.Body>
                <div className="text-end mt-2 mb-3">
                    <i
                        className={`${icon}`}
                        style={{
                            fontSize: `${
                                (iconfontSize == "sm" && "17px") ||
                                (iconfontSize == "2xl" && "2rem")
                            }`,
                            color: `${
                                cardBg == "#fff"
                                    ? "var(--content-text-color)"
                                    : "#fff"
                            }`,
                        }}
                    ></i>
                </div>
                <div>
                    <h2
                        style={{
                            fontSize: "1.5rem",
                            color: `${
                                cardBg == "#fff"
                                    ? "var(--hedging-text-color)"
                                    : "#fff"
                            }`,
                            fontWeight: "500",
                        }}
                    >
                        {conunt}
                    </h2>
                    <span
                        className="d-block text-uppercase"
                        style={{
                            fontSize: "14px",
                            color: `${
                                cardBg == "#fff"
                                    ? "var(--content-text-color)"
                                    : "#fff"
                            }`,
                            fontWeight: "700",
                        }}
                    >
                        {title}
                    </span>
                </div>
                <div
                    className={`mt-3 ${
                        iconfontSize == "2xl" ? "mb-3" : "mb-2"
                    }`}
                >
                    <ProgressBar
                        percent={progressPercent}
                        progressBg="transparent"
                        height={5}
                        strokeColor={ProgressBarBg}
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

export default UserInfo;

