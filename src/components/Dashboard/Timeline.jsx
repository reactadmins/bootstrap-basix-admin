import { Fragment } from "react";
import CardContent from "../Card/CardContent";
import user1 from "../../assets/img/avatar/user-1.jpg";
import user2 from "../../assets/img/avatar/user-2.jpg";
import user3 from "../../assets/img/avatar/user-3.jpg";
import user4 from "../../assets/img/avatar/user-4.jpg";
import TimelineStyle from "../../assets/scss/Timeline.module.scss";

const Timeline = () => {
    return (
        <Fragment>
            <CardContent
                title="Timeline"
                icons={["fa fa-ellipsis-v"]}
                CardBody={
                    <div
                        className={`${TimelineStyle.timeline_container} w-100`}
                    >
                        <div className="d-flex gap-2 mt-xl-3 mb-2">
                            <div className={TimelineStyle.icon_wrapper}>
                                <i
                                    className="fa-regular fa-file text-white rounded-circle text-center "
                                    style={{
                                        backgroundColor: "#5c6bc0",
                                    }}
                                ></i>
                            </div>
                            <div className="border-bottom w-100">
                                <span
                                    style={{
                                        fontSize: "14px",
                                        color: "#868e96",
                                    }}
                                >
                                    <a
                                        href="#"
                                        className="text-decoration-none mx-1 text-dark"
                                    >
                                        Anthony Marshal
                                    </a>
                                    added a new file in the project folder
                                </span>
                                <span
                                    className="d-block"
                                    style={{
                                        fontSize: "12px",
                                        margin: "5px 0 15px 0",
                                        color: "#868e96",
                                    }}
                                >
                                    5 Minutes ago
                                </span>
                            </div>
                        </div>
                        <div className="d-flex gap-2 mb-2">
                            <div className={TimelineStyle.icon_wrapper}>
                                <i
                                    className="fa-solid fa-check text-white rounded-circle text-center "
                                    style={{
                                        backgroundColor: "#4dbd74",
                                    }}
                                ></i>
                            </div>
                            <div className="border-bottom w-100">
                                <span
                                    style={{
                                        fontSize: "14px",
                                        color: "#868e96",
                                    }}
                                >
                                    <a
                                        href="#"
                                        className="text-decoration-none mx-1 text-dark"
                                    >
                                        Maria Monica
                                    </a>
                                    added a new file in the project folder
                                </span>
                                <span
                                    className="d-block"
                                    style={{
                                        fontSize: "12px",
                                        margin: "5px 0 15px 0",
                                        color: "#868e96",
                                    }}
                                >
                                    5 Minutes ago
                                </span>
                            </div>
                        </div>
                        <div className="d-flex gap-2 mb-2">
                            <div className={TimelineStyle.icon_wrapper}>
                                <i
                                    className="fa-solid fa-image text-white rounded-circle text-center "
                                    style={{
                                        backgroundColor: "#ffa726",
                                    }}
                                ></i>
                            </div>
                            <div className="border-bottom w-100">
                                <span
                                    style={{
                                        fontSize: "14px",
                                        color: "#868e96",
                                    }}
                                >
                                    <a
                                        href="#"
                                        className="text-decoration-none mx-1 text-dark"
                                    >
                                        Patricia Watkins
                                    </a>
                                    added 4 more photos to the album
                                    <a
                                        href="#"
                                        className="text-decoration-none mx-1 text-dark"
                                    >
                                        WordPress Meetup
                                    </a>
                                </span>
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
                                <span
                                    className="d-block"
                                    style={{
                                        fontSize: "12px",
                                        margin: "5px 0 15px 0",
                                        color: "#868e96",
                                    }}
                                >
                                    5 Minutes ago
                                </span>
                            </div>
                        </div>
                        <div className="d-flex gap-2">
                            <div className={TimelineStyle.icon_wrapper}>
                                <i
                                    className="fa-solid fa-user text-white rounded-circle text-center "
                                    style={{
                                        backgroundColor: "#ef5350",
                                    }}
                                ></i>
                            </div>
                            <div>
                                <span
                                    style={{
                                        fontSize: "14px",
                                        color: "#868e96",
                                    }}
                                >
                                    <a
                                        href="#"
                                        className="text-decoration-none mx-1 text-dark"
                                    >
                                        Tiffany Scott
                                    </a>
                                    added 3 friends
                                </span>
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
                                <span
                                    className="d-block mb-1"
                                    style={{
                                        fontSize: "12px",
                                        margin: "5px 0 15px 0",
                                        color: "#868e96",
                                    }}
                                >
                                    5 Minutes ago
                                </span>
                            </div>
                        </div>
                    </div>
                }
            />
        </Fragment>
    );
};

export default Timeline;

