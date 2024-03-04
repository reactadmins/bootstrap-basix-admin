import Card from "../Card/Card";
import { CardBody, CardFooter } from "react-bootstrap";
import admin from "@/assets/image/admin.jpg";
import styles from "@/assets/scss/SocialStats.module.scss";

export const Stats = ({ icon, counter }) => {
    return (
        <div className={`${styles.stats} text-center`}>
            <i className={icon}></i>
            <span className={`${styles.stats_counter} d-block fw-semibold`}>
                {counter}
            </span>
        </div>
    );
};

const SocialStats = () => {
    return (
        <div className={styles.social_Stats}>
            <Card
                titleBg="#5c6bc0"
                cardHeaderBorderColor="#5c6bc0"
                titleColor="#fff"
                iconColor="#fff"
                icons={[
                    {
                        icon: "fa fa-ellipsis-v",
                        dropdown: [
                            {
                                label: "Edit",
                                icon: "fa fa-cog",
                                method: () => alert("Cog"),
                            },
                            {
                                label: "Delete",
                                icon: "fa-solid fa-trash",
                                method: () => alert("Delete"),
                            },
                            {
                                label: "Update",
                                icon: "fa-solid fa-recycle",
                                method: () => alert("Update"),
                            },
                        ],
                    },
                ]}
            >
                <CardBody className="p-0">
                    <div className={styles.user_info}>
                        <h5 className="fs-6 fw-medium text-white text-center m-0">
                            Martin Luther
                        </h5>
                    </div>
                    <div
                        className={`${styles.image_continer} d-flex justify-content-center align-items-center`}
                    >
                        <img
                            className="rounded-circle"
                            src={admin}
                            alt="user"
                        />
                    </div>
                </CardBody>
                <CardFooter className={`${styles.card_footer} p-3 py-2`}>
                    <div className="d-flex justify-content-between align-items-center">
                        <Stats icon="fa-solid fa-thumbs-up" counter={3548} />
                        <hr className="mx-3" />
                        <Stats icon="fa-solid fa-user-group" counter={23548} />
                        <hr className="mx-3" />
                        <Stats icon="fa-solid fa-message" counter={3548} />
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SocialStats;

