import { Fragment } from "react";
import CardContent from "../Card/CardContent";
import user1 from "../../assets/image/avatar/user-1.jpg";
import user2 from "../../assets/image/avatar/user-2.jpg";
import user3 from "../../assets/image/avatar/user-3.jpg";
import user4 from "../../assets/image/avatar/user-4.jpg";
import timelineStyle from "../../assets/scss/Timeline.module.scss";

const Timeline = () => {
    return (
        <Fragment>
            <CardContent
                title="Timeline"
                icons={["fa fa-ellipsis-v"]}
                CardBody={
                    <div
                        className={`${timelineStyle.timeline_container} w-100`}
                    >
                        <ul>
                            <li className="d-flex gap-2 mt-xl-3 mb-2">
                                <div className={timelineStyle.icon_wrapper}>
                                    <i
                                        className="fa-regular fa-file text-white rounded-circle text-center "
                                        style={{
                                            backgroundColor: "#5c6bc0",
                                        }}
                                    ></i>
                                </div>
                                <div
                                    className={`${timelineStyle.user_content} w-100`}
                                >
                                    <h2>
                                        <a
                                            href="#"
                                            className="text-decoration-none mx-1"
                                        >
                                            Anthony Marshal
                                        </a>
                                        added a new file in the project folder
                                    </h2>
                                    <span className="d-block">
                                        5 Minutes ago
                                    </span>
                                </div>
                            </li>
                            <li className="d-flex gap-2 mb-2">
                                <div className={timelineStyle.icon_wrapper}>
                                    <i
                                        className="fa-solid fa-check text-white rounded-circle text-center "
                                        style={{
                                            backgroundColor: "#4dbd74",
                                        }}
                                    ></i>
                                </div>
                                <div
                                    className={`${timelineStyle.user_content} w-100`}
                                >
                                    <h2>
                                        <a
                                            href="#"
                                            className="text-decoration-none mx-1"
                                        >
                                            Maria Monica
                                        </a>
                                        added a new file in the project folder
                                    </h2>
                                    <span className="d-block">
                                        5 Minutes ago
                                    </span>
                                </div>
                            </li>
                            <li className="d-flex gap-2 mb-2">
                                <div className={timelineStyle.icon_wrapper}>
                                    <i
                                        className="fa-solid fa-image text-white rounded-circle text-center "
                                        style={{
                                            backgroundColor: "#ffa726",
                                        }}
                                    ></i>
                                </div>
                                <div
                                    className={`${timelineStyle.user_content} w-100`}
                                >
                                    <h2>
                                        <a
                                            href="#"
                                            className="text-decoration-none mx-1"
                                        >
                                            Patricia Watkins
                                        </a>
                                        added 4 more photos to the album
                                        <a
                                            href="#"
                                            className="text-decoration-none mx-1"
                                        >
                                            WordPress Meetup
                                        </a>
                                    </h2>
                                    <div className="d-flex gap-2 my-3">
                                        <img
                                            src={user1}
                                            alt="img"
                                            style={{ height: "40px" }}
                                        />
                                        <img
                                            src={user2}
                                            alt="img"
                                            style={{ height: "40px" }}
                                        />
                                        <img
                                            src={user3}
                                            alt="img"
                                            style={{ height: "40px" }}
                                        />
                                        <img
                                            src={user4}
                                            alt="img"
                                            style={{ height: "40px" }}
                                        />
                                    </div>
                                    <span className="d-block">
                                        5 Minutes ago
                                    </span>
                                </div>
                            </li>
                            <li className="d-flex gap-2">
                                <div className={timelineStyle.icon_wrapper}>
                                    <i
                                        className="fa-solid fa-user text-white rounded-circle text-center "
                                        style={{
                                            backgroundColor: "#ef5350",
                                        }}
                                    ></i>
                                </div>
                                <div
                                    className={`${timelineStyle.user_content} w-100 border-bottom-0`}
                                >
                                    <h2>
                                        <a
                                            href="#"
                                            className="text-decoration-none mx-1"
                                        >
                                            Tiffany Scott
                                        </a>
                                        added 3 friends
                                    </h2>
                                    <div className="d-flex gap-2 my-3">
                                        <img
                                            src={user1}
                                            alt="img"
                                            style={{ height: "40px" }}
                                        />
                                        <img
                                            src={user2}
                                            alt="img"
                                            style={{ height: "40px" }}
                                        />
                                        <img
                                            src={user3}
                                            alt="img"
                                            style={{ height: "40px" }}
                                        />
                                    </div>
                                    <span className="d-block mb-1">
                                        5 Minutes ago
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                }
            />
        </Fragment>
    );
};

export default Timeline;

