import { Card, CardBody } from "react-bootstrap";
import CountUp from "react-countup";
import { Fragment } from "react";
import styles from "@/assets/scss/StatsCard.module.scss";

export const Count = ({
    counter = "",
    symbolPosition = "",
    symbol = "",
    isCounter = "",
}) => {
    return (
        <h2 className="d-flex gap-1 align-items-center mb-0">
            {symbolPosition === "left" && <span>{symbol}</span>}
            {isCounter == true ? (
                <CountUp end={counter} duration={3} />
            ) : (
                <Fragment>{counter}</Fragment>
            )}
            {symbolPosition === "right" && <span>{symbol}</span>}
        </h2>
    );
};

export const Progress = ({ progressPercent, description }) => {
    return (
        <Fragment>
            <div
                className={`${styles.progress} bg-white my-2`}
                style={{ width: `${progressPercent}%` }}
            ></div>
            <p className={styles.description}>{description}</p>
        </Fragment>
    );
};

const StatsCard = ({
    type = "revenue-counter",
    bgColor = "#fff",
    icon = "",
    isCounter = false,
    counter = "",
    symbolPosition = "left",
    symbol = "",
    title = "",
    progressPercent = "",
    description = "",
    borderColor = "",
    isIconBorder = false,
    padding = "16px",
    width = "45px",
    height = "45px",
    isViewMore = false,
    link = "#",
}) => {
    return (
        <Card
            className={`${styles.stats_card_wrapper} p-0 rounded-0 h-100`}
            style={{
                backgroundColor: `${
                    type === "revenue-counter"
                        ? bgColor
                        : "" || (type === "revenue-progressBar" ? bgColor : "")
                }`,
                borderColor: `${
                    type === "revenue-counter"
                        ? bgColor
                        : "" || (type === "revenue-progressBar" ? bgColor : "")
                }`,
            }}
        >
            <CardBody style={{ padding: padding }}>
                <div
                    className={`d-flex ${
                        styles[type.replace(/-/g, "_")]
                    } w-100 h-100`}
                >
                    <div className={styles.title}>
                        <Count
                            counter={counter}
                            symbolPosition={symbolPosition}
                            symbol={symbol}
                            isCounter={isCounter}
                        />
                        <h4 className="mb-0">{title}</h4>
                    </div>
                    {icon ? (
                        <div
                            className={`${styles.icon} ${
                                isIconBorder
                                    ? "d-flex align-items-center justify-content-center rounded-circle"
                                    : ""
                            }`}
                            style={{
                                width: `${
                                    isIconBorder
                                        ? "66px"
                                        : "" || type === "revenue-earning"
                                        ? width
                                        : ""
                                }`,
                                height: `${
                                    isIconBorder
                                        ? "66px"
                                        : "" || type === "revenue-earning"
                                        ? height
                                        : ""
                                }`,
                                border: `${
                                    isIconBorder
                                        ? `3px solid ${borderColor}`
                                        : ""
                                }`,
                                backgroundColor: `${
                                    type === "revenue-earning" ? bgColor : ""
                                }`,
                            }}
                        >
                            {typeof icon === "string" ? (
                                <i
                                    className={`${icon}`}
                                    style={{
                                        color: `${
                                            isIconBorder
                                                ? borderColor
                                                : "#868e96"
                                        }`,
                                    }}
                                ></i>
                            ) : (
                                icon
                            )}
                        </div>
                    ) : null}
                    {type === "revenue-progressBar" ? (
                        <Progress
                            progressPercent={progressPercent}
                            description={description}
                        />
                    ) : null}
                </div>
                {isViewMore ? (
                    <div className={styles.view_more}>
                        <hr />
                        <a
                            href={link}
                            target="_blank"
                            className="d-flex justify-content-between"
                            style={{
                                fontSize: "15px",
                                fontWeight: "700",
                                color: "#868e96",
                            }}
                        >
                            View More
                            <i className="fa-sharp fa-solid fa-angle-right"></i>
                        </a>
                    </div>
                ) : null}
            </CardBody>
        </Card>
    );
};

export default StatsCard;

