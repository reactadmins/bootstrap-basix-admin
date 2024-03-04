import { Card } from "react-bootstrap";
import admin from "@/assets/image/admin.jpg";
import styles from "@/assets/scss/OverlayCard.module.scss";

const OverlayCard = ({
    useName = "",
    image = "",
    description = "",
    socialStatus = [],
    comment = "",
    locationIcon = "fa-solid fa-location-dot",
    locationLink = "#",
    locationName = "",
}) => {
    return (
        <div
            className={`${styles.overlay_wrapper} rounded-0 rounded-top border-0 w-100 h-100`}
        >
            <div className={`${styles.overlay_content} p-0`}>
                <div className={`${styles.media_container} rounded-top`}>
                    <i className="fa-brands fa-twitter d-flex justify-content-end p-2 text-light fs-5"></i>
                    <div className={styles.overlay}></div>
                    <div className="d-flex gap-4 align-items-center rounded-top px-3 position-relative">
                        <img
                            src={image}
                            alt="user"
                            className="w-25 rounded-circle"
                        />
                        <div>
                            <h1 className="text-light display-6 m-0">
                                {useName}
                            </h1>
                            <p className="text-light m-0">{description}</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${styles.counter_content} py-3 d-flex justify-content-center gap-5`}
                >
                    {socialStatus.length > 0
                        ? socialStatus.map((item, index) => {
                              return (
                                  <div key={index} className="text-center">
                                      <span className={styles.counter}>
                                          {item.count}
                                      </span>
                                      <span className={styles.title}>
                                          {item.label}
                                      </span>
                                  </div>
                              );
                          })
                        : null}
                </div>
                <div className={`${styles.media_body} px-3 py-3`}>
                    {comment}
                    <div className="mt-4">
                        <a
                            href={locationLink}
                            className="d-flex align-items-center gap-2"
                        >
                            <i className={locationIcon} />
                            <span>{locationName}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverlayCard;

