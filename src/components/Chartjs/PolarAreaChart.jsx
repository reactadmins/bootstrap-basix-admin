import { PolarArea } from "react-chartjs-2";
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import Card from "@/components/Card/Card";
import { CardBody } from "react-bootstrap";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaChart = () => {
    const data = {
        labels: [
            "Eating",
            "Drinking",
            "SleePing",
            "Designing",
            "Coding",
            "Cycling",
            "Running",
        ],
        datasets: [
            {
                data: [65, 59, 90, 81, 56, 55, 40],
                backgroundColor: "rgba(179, 181, 198, 0.3)",
            },
            {
                data: [28, 48, 40, 19, 96, 27, 100],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
            },
        ],
    };
    return (
        <Card title="Polar Area Chart">
            <CardBody>
                <div className="d-flex justify-content-center align-items-center overflow-hidden">
                    <div style={{ width: "80%" }}>
                        <PolarArea data={data} />
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default PolarAreaChart;

