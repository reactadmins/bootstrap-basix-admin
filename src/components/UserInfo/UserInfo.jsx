import { Card } from "react-bootstrap";
import ProgressBar from "../ProgressBar/ProgressBar";

const UserInfo = ({
    cardBg = "#fff",
    icon = "",
    conunt = "",
    title = "",
    iconfontSize = "sm",
    ProgressBarBg = "#fff",
    progressPercent = "",
}) => {
    return (
        <Card
            className="rounded-0"
            style={{
                backgroundColor: `${cardBg}`,
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
                            color: `${cardBg == "#fff" ? "#868E96" : "#fff"}`,
                        }}
                    ></i>
                </div>
                <div>
                    <span
                        style={{
                            fontSize: "1.5rem",
                            color: `${cardBg == "#fff" ? "#212529" : "#fff"}`,
                            fontWeight: "500",
                        }}
                    >
                        {conunt}
                    </span>
                    <small
                        className="d-block text-uppercase"
                        style={{
                            fontSize: "14px",
                            color: `${cardBg == "#fff" ? "#868e96" : "#fff"}`,
                            fontWeight: "700",
                        }}
                    >
                        {title}
                    </small>
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

