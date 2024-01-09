import { Card } from "react-bootstrap";
import CountUp from "react-countup";

const SocialCounter = ({
    background = "transparent",
    position = "left",
    icon,
    count = 0,
    padding = "24px",
    countType = false,
    socialUser = {},
}) => {
    return (
        <Card
            className="rounded-0 bg-white"
            style={{ border: "1px solid #DEE2E6" }}
        >
            <Card.Body className="p-0">
                <div
                    className={`d-flex align-items-center ${
                        position === "top" ? "flex-column gap-0" : "gap-3"
                    }`}
                >
                    <div
                        style={{
                            width: `${
                                (position === "left" && "90px") ||
                                (position === "top" && "100%")
                            }`,
                            backgroundColor: `${background}`,
                            padding: `${padding}`,
                        }}
                    >
                        <i
                            className={`${icon} d-block text-center text-white`}
                            style={{ fontSize: "2.8125rem" }}
                        ></i>
                    </div>
                    {countType === true ? (
                        <div>
                            <CountUp
                                end={count}
                                duration={3}
                                style={{
                                    fontSize: "1.1rem",
                                    fontWeight: "500",
                                }}
                            />
                            <span
                                className="d-block"
                                style={{
                                    fontSize: "14px",
                                    color: "rgb(134, 142, 150)",
                                }}
                            >
                                Followers
                            </span>
                        </div>
                    ) : (
                        <div className="d-flex gap-3 justify-content-center align-items-center py-3">
                            <div
                                style={{
                                    color: "rgb(148, 156, 160)",
                                    textAlign: "right",
                                }}
                            >
                                <strong
                                    style={{
                                        fontSize: " 20px",
                                        fontWeight: "500",
                                    }}
                                >
                                    {socialUser.followers}
                                    <span
                                        className="mx-1"
                                        style={{ fontWeight: "800" }}
                                    >
                                        {socialUser.countType}
                                    </span>
                                </strong>
                                <span
                                    className="d-block text-uppercase position-relative"
                                    style={{ fontSize: "14px", top: "-3px" }}
                                >
                                    {socialUser.followersType}
                                </span>
                            </div>
                            <hr
                                style={{
                                    width: "2px",
                                    height: "50px",
                                    backgroundColor: "rgb(148, 156, 160)",
                                }}
                            />
                            <p
                                style={{
                                    color: "rgb(148, 156, 160)",
                                    textAlign: "left",
                                }}
                            >
                                <span
                                    className="d-block"
                                    style={{
                                        fontSize: " 20px",
                                        fontWeight: "500",
                                    }}
                                >
                                    {socialUser.usre}
                                </span>
                                <span
                                    span
                                    className="d-block text-uppercase position-relative"
                                    style={{ fontSize: "14px", top: "-3px" }}
                                >
                                    {socialUser.feeds}
                                </span>
                            </p>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};

export default SocialCounter;

