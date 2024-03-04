import styles from "@/assets/scss/NotificationStatsCart.module.scss";
import { Badge } from "react-bootstrap";

const NotificationStatsCart = ({
    useName = "",
    image = "",
    description = "",
    notifications = [],
}) => {
    return (
        <div
            className={`${styles.notification_wrapper} rounded-top rounded-0 border-0 w-100 h-100`}
        >
            <div className={`${styles.header} bg-dark border-0`}>
                <div className="d-flex align-items-center gap-3">
                    <a href="#">
                        <img
                            src={image}
                            alt="user"
                            className="rounded-circle border border-5 border-secondary"
                        />
                    </a>
                    <div className={styles.media_body}>
                        <h3 className="mb-0">{useName}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.notifications} p-0`}>
                <ul>
                    {notifications.length > 0
                        ? notifications?.map((item, index) => {
                              return (
                                  <li key={index}>
                                      <a
                                          href="#"
                                          className="d-flex justify-content-between align-items-center p-3"
                                      >
                                          <span className="d-flex align-items-center gap-2">
                                              <i className={item.icon}></i>
                                              {item.label}
                                          </span>
                                          <Badge bg={item.badgeBg}>
                                              {item.count}
                                          </Badge>
                                      </a>
                                  </li>
                              );
                          })
                        : null}
                </ul>
            </div>
        </div>
    );
};

export default NotificationStatsCart;

