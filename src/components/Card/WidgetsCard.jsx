import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const WidgetsCard = ({
    cardBg = "",
    title = "",
    cardImage = "",
    headerTitle = "",
    headerBg = "",
    badge = "",
    badgeBg = "",
    bodyBg = "white",
    bodyContent = "",
    footerContent = "",
    cardBorderColor = "",
}) => {
    return (
        <Card
            className={`rounded-0 ${
                cardBorderColor ? `border border-${cardBorderColor}` : ""
            } ${cardBg ? `bg-${cardBg}` : ""}`}
        >
            {headerTitle && (
                <CardHeader
                    className={`rounded-0 ${
                        badge
                            ? "d-flex justify-content-between align-items-center"
                            : ""
                    } ${headerBg ? `bg-${headerBg}` : "bg-white"}`}
                >
                    <strong className={`${headerBg ? "text-white" : ""}`}>
                        {headerTitle}
                    </strong>
                    {badge && (
                        <span className={`badge bg-${badgeBg}`}>{badge}</span>
                    )}
                </CardHeader>
            )}
            {cardImage && <img src={cardImage} alt="Card image cap" />}
            <Card.Body
                className={`bg-${(cardBg && cardBg) || (bodyBg && bodyBg)}`}
                style={{
                    padding: "20px",
                    backgroundColor: `${cardBg ? "" : bodyBg}`,
                }}
            >
                {title && (
                    <h5 className="card-title mb-3 fs-6 fw-medium">{title}</h5>
                )}
                <p
                    className={`fs-6 fw-normal lh-base ${
                        cardBg && "text-white"
                    } ${bodyBg == "white" ? "text-secondary" : "text-white "}`}
                >
                    {bodyContent}
                </p>
            </Card.Body>
            {footerContent && (
                <Card.Footer className="border-0 pt-0 bg-transparent">
                    <div className="d-flex gap-2 align-items-center">
                        <div
                            className="bg-light"
                            style={{
                                width: "20px",
                                height: "2px",
                            }}
                        ></div>
                        <span className="text-light">{footerContent}</span>
                    </div>
                </Card.Footer>
            )}
        </Card>
    );
};

export default WidgetsCard;

