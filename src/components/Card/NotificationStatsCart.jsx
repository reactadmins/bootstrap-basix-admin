import { Card } from "react-bootstrap";
import admin from "../../assets/img/admin.jpg";

const NotificationStatsCart = () => {
    return (
        <Card className="rounded-top rounded-0">
            <Card.Header
                className="bg-dark border-0"
                style={{ padding: "20px" }}
            >
                <div className="d-flex align-items-center gap-3">
                    <a href="#">
                        <img
                            src={admin}
                            alt="user"
                            className="rounded-circle border border-5 border-secondary"
                            style={{ width: "85px", height: "85px" }}
                        />
                    </a>
                    <div className="media-body">
                        <h3
                            className="mb-0"
                            style={{
                                fontSize: "2rem",
                                color: "#fff",
                                fontWeight: "500",
                            }}
                        >
                            Jim Doe
                        </h3>
                        <p
                            style={{
                                fontSize: "1rem",
                                color: "#878787",
                                fontWeight: "400",
                            }}
                        >
                            Project Manager
                        </p>
                    </div>
                </div>
            </Card.Header>
            <Card.Body className="p-0">
                <ul>
                    <li>
                        <a
                            href="#"
                            className="d-flex justify-content-between align-items-center p-3 border-top"
                        >
                            <span className="text-secondary d-flex align-items-center gap-2">
                                <i className="fa-regular fa-envelope"></i>
                                Mail Inbox
                            </span>
                            <span className="badge bg-primary">10</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="d-flex justify-content-between align-items-center p-3 border-top"
                        >
                            <span className="text-secondary d-flex align-items-center gap-2">
                                <i className="fa-solid fa-server"></i>
                                Recent Activity
                            </span>
                            <span className="badge bg-danger">15</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="d-flex justify-content-between align-items-center p-3 border-top"
                        >
                            <span className="text-secondary d-flex align-items-center gap-2">
                                <i className="fa-regular fa-bell"></i>
                                Notification
                            </span>
                            <span className="badge bg-success">11</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="d-flex justify-content-between align-items-center p-3 border-top"
                        >
                            <span className="text-secondary d-flex align-items-center gap-2">
                                <i className="fa-solid fa-message"></i>
                                Message
                            </span>
                            <span className="badge bg-warning">3</span>
                        </a>
                    </li>
                </ul>
            </Card.Body>
        </Card>
    );
};

export default NotificationStatsCart;

