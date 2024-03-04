import { Fragment, useState } from "react";
import Card from "@/components/Card/Card";
import { Row, Col, CardBody, CardFooter } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import styles from "@/assets/scss/AnalyticsStats.module.scss";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line as PeityLine } from "peity-react";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const AnalyticsInfo = ({ count = "", title = "" }) => {
    return (
        <div className={styles.analytics_wrapper}>
            <div className="d-flex gap-3 align-items-center">
                <PeityLine
                    values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2]}
                    width={60}
                    height={20}
                />
                <div className={styles.counter_up}>
                    <div className="d-flex align-items-center gap-1">
                        <i className="fa fa-caret-up" />
                        <span className={`${styles.count} mx-1`}>{count}%</span>
                    </div>
                </div>
            </div>
            <h4
                className="text-uppercase d-block"
                style={{
                    color: "var(--content-text-color)",
                    fontSize: "14px",
                    marginBottom: "6px",
                }}
            >
                {title}
            </h4>
        </div>
    );
};

const AnalyticsStats = () => {
    const [close, setClose] = useState(false);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        },
    };

    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

    const data = {
        labels,
        datasets: [
            {
                label: "Bounce Rate",
                data: [2700, 7000, 3500, 6900, 2600, 6500, 2200],
                borderColor: "#2B45D4",
                backgroundColor: "#2B45D4",
            },
            {
                label: "Pageviews",
                data: [5000, 2700, 8500, 5500, 4500, 4900, 3000],
                borderColor: "#299FFF",
                backgroundColor: "#299FFF",
            },
            {
                label: "New Users",
                data: [5500, 2900, 7000, 3500, 5000, 3300, 4800],
                borderColor: "#43CB4C",
                backgroundColor: "#43CB4C",
            },
        ],
    };
    return (
        <Fragment>
            {!close ? (
                <Card
                    title="Analytics Stats"
                    icons={[
                        {
                            icon: "fa fa-cog",
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
                        { icon: "fa fa-angle-down" },
                    ]}
                    dismissible={true}
                    onClose={() => setClose(!close)}
                >
                    <CardBody>
                        <Line options={options} data={data} />
                    </CardBody>
                    <CardFooter className={styles.card_footer}>
                        <Row className="gy-4 m-0">
                            <Col sm={12} md={4} className="m-0">
                                <AnalyticsInfo
                                    count={65.79}
                                    title="Bounce Rate"
                                />
                            </Col>
                            <Col sm={12} md={4} className="m-0">
                                <AnalyticsInfo
                                    count={65.79}
                                    title="Pageviews"
                                />
                            </Col>
                            <Col sm={12} md={4} className="m-0">
                                <AnalyticsInfo
                                    count={65.79}
                                    title="New Users"
                                />
                            </Col>
                        </Row>
                    </CardFooter>
                </Card>
            ) : null}
        </Fragment>
    );
};

export default AnalyticsStats;

