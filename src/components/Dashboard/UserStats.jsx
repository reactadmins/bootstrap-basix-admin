import { useState } from "react";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import admin from "../../assets/image/admin.jpg";
import userStatsStryle from "../../assets/scss/UserStats.module.scss";
import { useDashboardDataContext } from "../../context/dashboardDataContext";

export const Stats = ({ icon, counter }) => {
    return (
        <div className={`${userStatsStryle.stats} text-center`}>
            <i className={icon}></i>
            <span
                className={`${userStatsStryle.stats_counter} d-block fw-semibold`}
            >
                {counter}
            </span>
        </div>
    );
};

const UserStats = () => {
    const [isOpen, setIsOpen] = useState();
    const { isDark } = useDashboardDataContext();
    return (
        <Card
            className={`${userStatsStryle.card} border-0 rounded-0`}
            style={{
                boxShadow: `${isDark ? "0 0 0 1px var(--border-color)" : ""}`,
            }}
        >
            <CardHeader
                className={`${userStatsStryle.card_header} border-0 rounded-0 d-flex justify-content-end align-items-center`}
            >
                <button
                    type="button"
                    className="border-0 bg-transparent text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <i className="fa fa-ellipsis-v"></i>
                </button>
                {isOpen ? (
                    <div className={userStatsStryle.card_setting}>
                        <button type="button">
                            <i className="fa-solid fa-gear"></i>
                            Edit
                        </button>
                        <button type="button">
                            <i className="fa-solid fa-trash"></i>
                            Delete
                        </button>
                        <button type="button">
                            <i className="fa-solid fa-recycle"></i>
                            Update
                        </button>
                    </div>
                ) : (
                    ""
                )}
            </CardHeader>
            <Card.Body className={`${userStatsStryle.card_body} p-0`}>
                <div className={userStatsStryle.user_info}>
                    <h5 className="fs-6 fw-medium text-white text-center">
                        Martin Luther
                    </h5>
                </div>
                <div
                    className={`${userStatsStryle.image_continer} d-flex justify-content-center align-items-center`}
                >
                    <img className="rounded-circle" src={admin} alt="user" />
                </div>
            </Card.Body>
            <Card.Footer className={`${userStatsStryle.card_footer} p-3 py-2`}>
                <div className="d-flex justify-content-between align-items-center">
                    <Stats icon="fa-solid fa-thumbs-up" counter={3548} />
                    <hr className="mx-3" />
                    <Stats icon="fa-solid fa-user-group" counter={23548} />
                    <hr className="mx-3" />
                    <Stats icon="fa-solid fa-message" counter={3548} />
                </div>
            </Card.Footer>
        </Card>
    );
};

export default UserStats;

