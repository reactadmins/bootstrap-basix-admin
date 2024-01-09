import { Card } from "react-bootstrap";
import admin from "../../assets/img/admin.jpg";
import OverlayCardStyle from "../../assets/scss/OverlayCard.module.scss";

const OverlayCard = () => {
    return (
        <Card className="rounded-0 rounded-top">
            <Card.Body className="p-0">
                <div className={OverlayCardStyle.media_container}>
                    <div
                        className={`${OverlayCardStyle.twt_mark} rounded-top`}
                        style={{
                            background: "#58C9F3",
                            padding: "10px 10px 20px 10px",
                        }}
                    >
                        <i className="fa-brands fa-twitter d-flex justify-content-end p-2 text-light fs-5"></i>
                        <div className={OverlayCardStyle.twt_overlay}></div>
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
                    <div className="py-3 d-flex justify-content-center gap-5">
                        <div
                            className="text-center "
                            style={{ color: " #bdbdbd", fontSize: "13px" }}
                        >
                            <span>750</span>
                            <span className="d-block">Tweets</span>
                        </div>
                        <div
                            className={`${OverlayCardStyle.weather_category} text-center`}
                            style={{ color: " #bdbdbd", fontSize: "13px" }}
                        >
                            <span>865</span>
                            <span className="d-block">Following</span>
                        </div>
                        <div
                            className={`${OverlayCardStyle.weather_category} text-center`}
                            style={{ color: " #bdbdbd", fontSize: "13px" }}
                        >
                            <span>3645</span>
                            <span className="d-block">Followers</span>
                        </div>
                    </div>
                    <div className="px-3 py-3">
                        <textarea
                            placeholder="Write your Tweet and Enter"
                            rows="1"
                            className="w-100 form-control"
                            style={{
                                border: "1px solid #ced4da",
                                color: "#495057",
                                padding: " 0.375rem 0.75rem",
                            }}
                        ></textarea>
                        <div className="mt-2 d-flex justify-content-between">
                            <div>
                                <a href="#" className="text-secondary">
                                    <i
                                        className="fa-solid fa-camera"
                                        style={{ color: "#d2d2d2" }}
                                    ></i>
                                </a>
                                <a href="#" className="text-secondary mx-1">
                                    <i
                                        className="fa-solid fa-location-dot"
                                        style={{ color: "#d2d2d2" }}
                                    ></i>
                                </a>
                                <span
                                    className="text-secondary"
                                    style={{ color: "#d2d2d2" }}
                                >
                                    New Castle, UK
                                </span>
                            </div>
                            <span className="text-secondary">32</span>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default OverlayCard;

