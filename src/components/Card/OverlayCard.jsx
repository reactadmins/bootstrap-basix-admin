import { Card } from "react-bootstrap";
import admin from "../../assets/image/admin.jpg";
import overlayCardStyle from "../../assets/scss/OverlayCard.module.scss";

const OverlayCard = () => {
    return (
        <Card
            className={`${overlayCardStyle.card} rounded-0 rounded-top border-0`}
        >
            <Card.Body className={`${overlayCardStyle.card_body} p-0`}>
                <div className={overlayCardStyle.media_container}>
                    <div className={`${overlayCardStyle.twt_mark} rounded-top`}>
                        <i className="fa-brands fa-twitter d-flex justify-content-end p-2 text-light fs-5"></i>
                        <div className={overlayCardStyle.twt_overlay}></div>
                        <div className="d-flex gap-4 align-items-center rounded-top px-3 position-relative">
                            <img
                                src={admin}
                                alt="user"
                                className="w-25 rounded-circle"
                            />
                            <div>
                                <h1 className="text-light display-6 m-0">
                                    Jim Doe
                                </h1>
                                <p className="text-light m-0">
                                    Project Manager
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${overlayCardStyle.counter_content} py-3 d-flex justify-content-center gap-5`}
                    >
                        <div className="text-center">
                            <span className={overlayCardStyle.counter}>
                                750
                            </span>
                            <span className={overlayCardStyle.title}>
                                Tweets
                            </span>
                        </div>
                        <div
                            className={`${overlayCardStyle.weather_category} text-center`}
                        >
                            <span className={overlayCardStyle.counter}>
                                865
                            </span>
                            <span className={overlayCardStyle.title}>
                                Following
                            </span>
                        </div>
                        <div
                            className={`${overlayCardStyle.weather_category} text-center`}
                        >
                            <span className={overlayCardStyle.counter}>
                                3645
                            </span>
                            <span className={overlayCardStyle.title}>
                                Followers
                            </span>
                        </div>
                    </div>
                    <div className={`${overlayCardStyle.media_body} px-3 py-3`}>
                        <textarea
                            placeholder="Write your Tweet and Enter"
                            rows="1"
                            className="w-100 form-control"
                        ></textarea>
                        <div className="mt-2 d-flex justify-content-between">
                            <div>
                                <a href="#">
                                    <i className="fa-solid fa-camera"></i>
                                </a>
                                <a href="#" className="mx-1">
                                    <i className="fa-solid fa-location-dot"></i>
                                </a>
                                <span>New Castle, UK</span>
                            </div>
                            <span>32</span>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default OverlayCard;

