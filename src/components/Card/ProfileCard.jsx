import { Card } from "react-bootstrap";
        import admin from "../../assets/image/admin.jpg";
        import profileCardStyle from "../../assets/scss/ProfileCard.module.scss";
        
        const ProfileCard = ({
            type = "",
            title = "",
            userInfo = "",
            headerIcon = "",
            headerTitle = "",
            footerTitle = "",
        }) => {
            return (
                <Card className={`${profileCardStyle.card} rounded-0 border-0`}>
                    {headerTitle && (
                        <Card.Header className={profileCardStyle.card_header}>
                            {headerIcon && <i className={`${headerIcon}`}></i>}
                            <strong>{headerTitle}</strong>
                        </Card.Header>
                    )}
        
                    <Card.Body className={profileCardStyle.card_body}>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <img
                                src={admin}
                                alt="Card image"
                                className="rounded-circle inline-blocks"
                                style={{ width: `${type == "info" ? "90px" : ""}`}}
                            />
        
                            <h2
                                className={`${profileCardStyle.title} mt-2`}
                                style={{
                                    fontSize: `${type == "info" ? "2rem" : ""}`,
                                    fontWeight: `${type == "info" ? "500" : ""}`,
                                }}
                            >
                                {title}
                            </h2>
                            {type == "info" ? (
                                <>{userInfo}</>
                            ) : (
                                <>
                                    <span>
                                        <i className="fa-solid fa-location-dot"></i>{" "}
                                        California, United States
                                    </span>
                                    <hr className="w-100 border-0" />
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
                        <Card.Footer className={profileCardStyle.card_footer}>
                            <strong>{footerTitle}</strong>
                        </Card.Footer>
                    )}
                </Card>
            );
        };
        
        export default ProfileCard;
        
