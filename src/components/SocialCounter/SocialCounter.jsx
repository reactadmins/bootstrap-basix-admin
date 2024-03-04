import { Card, CardBody } from "react-bootstrap";
import CountUp from "react-countup";
import styles from "@/assets/scss/SocialCounter.module.scss";

const SocialCounter = ({
    bgColor = "transparent",
    iconPosition = "left",
    icon = "",
    count = 0,
    padding = "24px",
    isCounter = false,
    socialActivity = {},
}) => {
    return (
        <Card className={`rounded-0 ${styles.social_counter_wrapper}`}>
            <CardBody className="p-0">
                <div
                    className={`d-flex align-items-center ${
                        iconPosition === "top" ? "flex-column gap-0" : "gap-3"
                    } ${styles.social_counter}`}
                >
                    <div
                        className={styles.icon}
                        style={{
                            width: `${
                                (iconPosition === "left" && "90px") ||
                                (iconPosition === "top" && "100%")
                            }`,
                            backgroundColor: `${bgColor}`,
                            padding: `${padding}`,
                        }}
                    >
                        <i
                            className={`${icon} d-block text-center text-white`}
                        ></i>
                    </div>
                    {isCounter ? (
                        <div className={styles.counter}>
                            <CountUp end={count} duration={3} />
                            <p className="d-block">Followers</p>
                        </div>
                    ) : (
                        <div
                            className={`d-flex gap-3 justify-content-center align-items-center py-3 ${styles.counter_group}`}
                        >
                            <div
                                style={{
                                    textAlign: "right",
                                }}
                            >
                                <strong>
                                    {socialActivity.followers}
                                    <span className="mx-1">
                                        {socialActivity.isCounter}
                                    </span>
                                </strong>
                                <p className="d-block text-uppercase position-relative">
                                    {socialActivity.followersType}
                                </p>
                            </div>
                            <hr
                                style={{
                                    width: "2px",
                                    height: "50px",
                                    backgroundColor: "rgb(148, 156, 160)",
                                }}
                            />
                            <div
                                style={{
                                    textAlign: "left",
                                }}
                            >
                                <strong className="d-block">
                                    {socialActivity.usre}
                                </strong>
                                <p className="d-block text-uppercase position-relative">
                                    {socialActivity.feeds}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </CardBody>
        </Card>
    );
};

export default SocialCounter;

