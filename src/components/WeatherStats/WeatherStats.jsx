import { CardBody, CardFooter } from "react-bootstrap";
import styles from "@/assets/scss/WeatherStats.module.scss";
import Card from "@/components/Card/Card";

export const Stats = ({ title, counter, Symbol }) => {
    return (
        <div className={`${styles.stats} text-center`}>
            <span className={`${styles.stats_title} text-uppercase fw-normal`}>
                {title}
            </span>
            <span className={`${styles.stats_counter} d-block fw-semibold`}>
                {counter}
                {Symbol}
            </span>
        </div>
    );
};

const WeatherStats = () => {
    return (
        <div className={styles.weather_wrapper}>
            <Card
                title="Weather"
                titleBg="#ffa726"
                cardHeaderBorderColor="#ffa726"
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
                <CardBody className={`${styles.card_body} p-0 border-0`}>
                    <div
                        className={`${styles.weather_stats} p-4 pt-0 pb-2 d-flex justify-content-between align-items-center`}
                    >
                        <span className={styles.weather_icon}>
                            <i className="fa fa-cloud text-white"></i>
                        </span>
                        <div className={styles.media_body}>
                            <h3 className="text-white mb-0">Partly Cloudy</h3>
                            <span className="text-white text-end d-block">
                                Sunday, April 2023
                            </span>
                        </div>
                    </div>
                    <div
                        className={`${styles.media_content} p-4 d-flex justify-content-between align-items-center`}
                    >
                        <div>
                            <h5 className="text-uppercase fs-6 fw-normal mb-0">
                                New York
                            </h5>
                            <span className="text-uppercase fw-normal">
                                Usa
                            </span>
                        </div>
                        <div
                            className={`${styles.weather_counte} d-flex align-items-baseline`}
                        >
                            <h2 className="mb-0 fw-normal">21</h2>
                            <span className="d-block">°C</span>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className={styles.card_footer}>
                    <div className="d-flex justify-content-between align-items-center">
                        <Stats title="Feels" counter={23} Symbol="°" />
                        <hr className="mx-3" />
                        <Stats title="Humidity" counter={37} Symbol="%" />
                        <hr className="mx-3" />
                        <Stats title="Wind" counter={4} Symbol=" km/h" />
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default WeatherStats;

