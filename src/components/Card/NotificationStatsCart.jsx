import { Card } from "react-bootstrap";
import admin from "../../assets/image/admin.jpg";
import notificationStyle from "../../assets/scss/NotificationStatsCart.module.scss";

const NotificationStatsCart = () => {
    return (
        <Card
            className={`${notificationStyle.card} rounded-top rounded-0 border-0`}
        >
            <Card.Header
                className={`${notificationStyle.card_header} bg-dark border-0`}
            >
                <div className="d-flex align-items-center gap-3">
                    <a href="#">
                        <img
                            src={admin}
                            alt="user"
                            className="rounded-circle border border-5 border-secondary"
                        />
                    </a>
                    <div className={notificationStyle.media_body}>
                        <h3 className="mb-0">Jim Doe</h3>
                        <p>Project Manager</p>
                    </div>
                </div>
            </Card.Header>
            <Card.Body className={`${notificationStyle.card_body} p-0`}>
                <ul>
                    <li>
                        <a
                            href="#"
                            className="d-flex justify-content-between align-items-center p-3"
                        >
                            <span className="d-flex align-items-center gap-2">
                                <i className="fa-regular fa-envelope"></i>
                                Mail Inbox
                            </span>
                            <span className="badge bg-primary">10</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="d-flex justify-content-between align-items-center p-3"
                        >
                            <span className="d-flex align-items-center gap-2">
                                <i className="fa-solid fa-server"></i>
                                Recent Activity
                            </span>
                            <span className="badge bg-danger">15</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="d-flex justify-content-between align-items-center p-3"
                        >
                            <span className="d-flex align-items-center gap-2">
                                <i className="fa-regular fa-bell"></i>
                                Notification
                            </span>
                            <span className="badge bg-success">11</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="d-flex justify-content-between align-items-center p-3"
                        >
                            <span className=" d-flex align-items-center gap-2">
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

