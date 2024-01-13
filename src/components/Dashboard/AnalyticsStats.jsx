import { Fragment } from "react";
import CardContent from "../Card/CardContent";
import { Row, Col } from "react-bootstrap";
import AnalyticsInfo from "../Chart/AnalyticsInfo";
import { Line } from "react-chartjs-2";
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
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const AnalyticsStats = () => {
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
                label: "Dataset 1",
                data: [2700, 7000, 3500, 6900, 2600, 6500, 2200],
                borderColor: "#2B45D4",
                backgroundColor: "#2B45D4",
            },
            {
                label: "Dataset 2",
                data: [5000, 2700, 8500, 5500, 4500, 4900, 3000],
                borderColor: "#299FFF",
                backgroundColor: "#299FFF",
            },
            {
                label: "Dataset 3",
                data: [5500, 2900, 7000, 3500, 5000, 3300, 4800],
                borderColor: "#43CB4C",
                backgroundColor: "#43CB4C",
            },
        ],
    };
    return (
        <Fragment>
            <CardContent
                title="Analytics Stats"
                icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                CardBody={
                    <div
                        className="d-flex justify-content-center"
                        style={{ width: "100%", height: "310px" }}
                    >
                        <Line options={options} data={data} />
                    </div>
                }
                CardFooter={
                    <Row className="gy-4 m-0" style={{ padding: "16px 20px" }}>
                        <Col sm={12} md={4} className="m-0">
                            <AnalyticsInfo count={65.79} title="Bounce Rate" />
                        </Col>
                        <Col sm={12} md={4} className="m-0">
                            <AnalyticsInfo count={65.79} title="Pageviews" />
                        </Col>
                        <Col sm={12} md={4} className="m-0">
                            <AnalyticsInfo count={65.79} title="New Users" />
                        </Col>
                    </Row>
                }
            />
        </Fragment>
    );
};

export default AnalyticsStats;

