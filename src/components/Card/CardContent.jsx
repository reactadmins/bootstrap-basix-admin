import { Fragment, useState } from "react";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import CardContentStyle from "../../assets/scss/CardContent.module.scss";

const CardContent = ({
    title = "",
    titleCode = "",
    icons = "",
    CardBody = "",
    bodyHeight = "",
    bodyBg = "#fff",
    CardFooter = "",
}) => {
    const [isOpen, setIsOpen] = useState();
    const [hiddenContent, setHiddenContent] = useState();

    return (
        <Fragment>
            {!hiddenContent ? (
                <Card className={`${CardContentStyle.card} rounded-0`}>
                    <CardHeader
                        className={`${CardContentStyle.card_header} rounded-0`}
                        style={{ backgroundColor: "#F7F7F7" }}
                    >
                        <div
                            className={`d-flex align-items-center ${
                                icons ? "justify-content-between" : " "
                            }`}
                        >
                            <strong
                                className={CardContentStyle.card_title}
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
                                    className={`d-flex align-items-center ${CardContentStyle.card_icon}`}
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
                                            className={`${CardContentStyle.content_settings} border-0 bg-transparent`}
                                        >
                                            <i className={item}></i>
                                        </button>
                                    ))}
                                    {isOpen ? (
                                        <div
                                            className={
                                                CardContentStyle.card_setting
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
                        style={{ backgroundColor: bodyBg, height: bodyHeight }}
                    >
                        {CardBody}
                    </Card.Body>
                    {CardFooter && (
                        <Card.Footer className="bg-white">
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

