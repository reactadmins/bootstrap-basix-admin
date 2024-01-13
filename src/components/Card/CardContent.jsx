import { Fragment, useState } from "react";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import cardContentStyle from "../../assets/scss/CardContent.module.scss";
import { useDashboardDataContext } from "../../context/dashboardDataContext";

const CardContent = ({
    title = "",
    titleCode = "",
    icons = "",
    CardBody = "",
    bodyHeight = "",
    CardFooter = "",
}) => {
    const [isOpen, setIsOpen] = useState();
    const [hiddenContent, setHiddenContent] = useState();
    const { isDark } = useDashboardDataContext();

    return (
        <Fragment>
            {!hiddenContent ? (
                <Card
                    className={`${cardContentStyle.card} rounded-0`}
                    style={{
                        border: `${isDark ? "0" : ""}`,
                        boxShadow: `${isDark ? "0 0 0 1px #ffffff25" : ""}`,
                    }}
                >
                    <CardHeader
                        className={`${cardContentStyle.card_header} rounded-0`}
                    >
                        <div
                            className={`d-flex align-items-center ${
                                icons ? "justify-content-between" : " "
                            }`}
                        >
                            <strong
                                className={cardContentStyle.card_title}
                                style={{
                                    fontSize: `${icons ? "0.875em" : "1rem"}`,
                                    fontWeight: `${icons ? "600" : "700"}`,
                                }}
                            >
                                {title}
                            </strong>
                            {titleCode}
                            {icons && (
                                <div
                                    className={`d-flex align-items-center ${cardContentStyle.card_icon}`}
                                >
                                    {icons?.map((item, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => {
                                                setIsOpen(
                                                    item === "fa fa-cog"
                                                        ? !isOpen
                                                        : "" ||
                                                          item ===
                                                              "fa fa-ellipsis-v"
                                                        ? !isOpen
                                                        : ""
                                                );
                                                setHiddenContent(
                                                    item === "fa fa-times"
                                                        ? !hiddenContent
                                                        : ""
                                                );
                                            }}
                                            className={`${cardContentStyle.content_settings} border-0 bg-transparent`}
                                        >
                                            <i className={item}></i>
                                        </button>
                                    ))}
                                    {isOpen ? (
                                        <div
                                            className={
                                                cardContentStyle.card_setting
                                            }
                                        >
                                            <button type="button">
                                                <i className="fa-solid fa-gear"></i>
                                                Edit
                                            </button>
                                            <button type="button">
                                                <i className="fa-solid fa-trash"></i>
                                                Delete
                                            </button>
                                            <button type="button">
                                                <i className="fa-solid fa-recycle"></i>
                                                Update
                                            </button>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            )}
                        </div>
                    </CardHeader>
                    <Card.Body
                        className={cardContentStyle.card_body}
                        style={{ height: bodyHeight }}
                    >
                        {CardBody}
                    </Card.Body>
                    {CardFooter && (
                        <Card.Footer className={cardContentStyle.card_footer}>
                            {CardFooter}
                        </Card.Footer>
                    )}
                </Card>
            ) : (
                ""
            )}
        </Fragment>
    );
};

export default CardContent;

