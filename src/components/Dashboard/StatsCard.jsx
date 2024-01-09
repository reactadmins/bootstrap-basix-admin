import { Card } from "react-bootstrap";
import CountUp from "react-countup";
import ProgressBar from "../ProgressBar/ProgressBar";
import StatsCardStyle from "../../assets/scss/StatsCard.module.scss";

const StatsCard = ({
    type = "",
    cardBg,
    padding = "16px",
    symbol = "",
    symbolDirection = "left",
    counter = "",
    isCounter = false,
    title = "",
    iconDirection = "left",
    icon = "",
    isBorder = false,
    iconCorverWidth = "",
    iconCorverHeight = "",
    iconBg = "",
    borderColor = "",
    isProgress = false,
    progressPercent = "",
    progressBarTitle = "",
    ViewMore = false,
}) => {
    const count = (counter) => {
        return (
            <>
                {isCounter == true ? (
                    <CountUp end={counter} duration={3} />
                ) : (
                    <span>{counter}</span>
                )}
            </>
        );
    };

    const cardIcon = (icon) => {
        return (
            <>
                {icon && (
                    <div
                        className={StatsCardStyle.counter_icon}
                        style={{
                            width: `${iconCorverWidth}`,
                            height: `${iconCorverHeight}`,
                            backgroundColor: `${iconBg}`,
                            border: `${
                                isBorder == true
                                    ? `3px solid ${borderColor}`
                                    : null
                            }`,
                            borderRadius: `${isBorder == true ? "50%" : null}`,
                        }}
                    >
                        {typeof icon === "string" ? (
                            <i
                                className={icon}
                                style={{
                                    color: `${isBorder == true && borderColor}`,
                                }}
                            ></i>
                        ) : (
                            icon
                        )}
                    </div>
                )}
            </>
        );
    };

    return (
        <Card
            className={`${StatsCardStyle.card} rounded-0 h-100 ${
                type == "revenue-card" ? "h-100" : ""
            }`}
            style={{
                backgroundColor: `${cardBg}`,
                border: `${
                    type == "revenue-card" || type == "progressbar"
                        ? "0px"
                        : "1px solid #d2d2d2"
                }`,
            }}
        >
            <Card.Body
                className={`${StatsCardStyle.card_body} d-flex flex-column justify-content-center`}
                style={{
                    padding: `${type == "revenue-card" ? "20px" : padding}`,
                }}
            >
                <div
                    className={`${StatsCardStyle[type]}`}
                    style={{
                        flexDirection: `${isProgress == true && "column"}`,
                        alignItems: `${isProgress == true && "flex-start"}`,
                    }}
                >
                    {iconDirection == "left" && cardIcon(icon)}
                    <div style={{ width: `${isProgress == true && "100%"}` }}>
                        {type == "user-info" && (
                            <p
                                className={StatsCardStyle.title}
                                style={{
                                    fontSize: `${isBorder == true && "15px"}`,
                                    color: `${isBorder == true && "#868e96"}`,
                                }}
                            >
                                {title}
                            </p>
                        )}
                        <div
                            className={`d-flex align-items-center ${StatsCardStyle.counter}`}
                            style={{
                                fontSize: `${isBorder == true && "24px"}`,
                                color: `${isBorder == true && "#373757"}`,
                            }}
                        >
                            {type == "user-info" && isBorder == false ? (
                                <span>Total: </span>
                            ) : null}
                            {counter
                                ? (() => {
                                      switch (symbolDirection) {
                                          case "left":
                                              return (
                                                  <>
                                                      <span
                                                          style={{
                                                              marginRight:
                                                                  "4px",
                                                          }}
                                                      >
                                                          {symbol}
                                                      </span>
                                                      {count(counter)}
                                                  </>
                                              );
                                          case "right":
                                              return (
                                                  <>
                                                      {count(counter)}
                                                      <span>{symbol}</span>
                                                  </>
                                              );
                                          default:
                                              return <>{count(counter)}</>;
                                      }
                                  })()
                                : null}
                        </div>
                        {type == "user-info" ? null : (
                            <p className={StatsCardStyle.title}>{title}</p>
                        )}
                        {isProgress == true && (
                            <div className="mt-2">
                                <ProgressBar
                                    percent={progressPercent}
                                    height={5}
                                    progressBg="transparent"
                                    strokeColor="white"
                                />
                                <span
                                    className={`${StatsCardStyle.progress_bar_title} mt-1`}
                                >
                                    {progressBarTitle}
                                </span>
                            </div>
                        )}
                    </div>
                    {iconDirection == "right" && cardIcon(icon)}
                </div>
                {ViewMore == true && (
                    <>
                        <hr
                            style={{
                                margin: "24px 0px 20px 0px",
                                borderTop: "1.9px solid #868e96",
                            }}
                        />
                        <a
                            href="#"
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
                    </>
                )}
            </Card.Body>
        </Card>
    );
};

export default StatsCard;

