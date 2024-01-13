import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import widgetsCardStyle from "../../assets/scss/WidgetsCard.module.scss";
import { useDashboardDataContext } from "../../context/dashboardDataContext";

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
    const { isDark } = useDashboardDataContext();
    return (
        <Card
            data={isDark ? "true" : "false"}
            className={`rounded-0 ${widgetsCardStyle.card} ${
                cardBorderColor ? `border border-${cardBorderColor}` : ""
            } ${cardBg ? `bg-${cardBg}` : ""}`}
        >
            {headerTitle && (
                <CardHeader
                    className={`rounded-0 ${widgetsCardStyle.card_header} ${
                        badge
                            ? "d-flex justify-content-between align-items-center"
                            : ""
                    } ${headerBg ? `bg-${headerBg}` : ""}`}
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
                className={`${widgetsCardStyle.card_body} bg-${
                    cardBg || bodyBg || ""
                }`}
                style={{
                    backgroundColor: `${cardBg ? "" : bodyBg}`,
                }}
            >
                {title && (
                    <h5 className="card-title mb-3 fs-6 fw-medium">{title}</h5>
                )}
                <p
                    className={`fs-6 fw-normal lh-base ${
                        cardBg && "text-white"
                    } ${bodyBg == "white" ? "text-secondary" : "text-white"}`}
                >
                    {bodyContent}
                </p>
            </Card.Body>
            {footerContent && (
                <Card.Footer
                    className={`${widgetsCardStyle.card_footer} border-0 pt-0 bg-transparent`}
                >
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

