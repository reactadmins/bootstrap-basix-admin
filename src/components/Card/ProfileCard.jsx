import { Card } from "react-bootstrap";
import admin from "../../assets/img/admin.jpg";

const ProfileCard = ({
    type = "",
    title = "",
    userInfo = "",
    headerIcon = "",
    headerTitle = "",
    footerTitle = "",
}) => {
    return (
        <Card className="rounded-0">
            {headerTitle && (
                <Card.Header>
                    {headerIcon && (
                        <i
                            className={`${headerIcon}`}
                            style={{ marginRight: "6px" }}
                        ></i>
                    )}
                    <strong className="text-dark">{headerTitle}</strong>
                </Card.Header>
            )}

            <Card.Body>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <img
                        src={admin}
                        alt="Card image"
                        className="rounded-circle inline-blocks"
                        style={{ width: `${type == "info" ? "90px" : ""}` }}
                    />

                    <span
                        className="mt-2"
                        style={{
                            fontSize: `${type == "info" ? "2rem" : ""}`,
                            fontWeight: `${type == "info" ? "500" : ""}`,
                        }}
                    >
                        {title}
                    </span>
                    {type == "info" ? (
                        <>{userInfo}</>
                    ) : (
                        <>
                            <span>
                                <i className="fa-solid fa-location-dot"></i>{" "}
                                California, United States
                            </span>
                            <hr className="w-100 bg-secondary" />
                            <div className="d-flex gap-2">
                                <a
                                    href="#"
                                    className="text-decoration-none text-secondary"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-decoration-none text-secondary"
                                >
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-decoration-none text-secondary"
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-decoration-none text-secondary"
                                >
                                    <i className="fa-brands fa-pinterest"></i>
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </Card.Body>
            {footerTitle && (
                <Card.Footer style={{ padding: "12px 16px" }}>
                    <strong className="text-dark">{footerTitle}</strong>
                </Card.Footer>
            )}
        </Card>
    );
};

export default ProfileCard;

