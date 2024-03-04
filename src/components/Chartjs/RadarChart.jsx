import { Radar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import Card from "@/components/Card/Card";
import { CardBody } from "react-bootstrap";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const RadarChart = () => {
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
                label: "My First dataset",
                data: [65, 59, 90, 81, 56, 55, 40],
                backgroundColor: "rgba(179, 181, 198, 0.3)",
                borderColor: "#B3B5C6",
                borderWidth: 3,
            },
            {
                label: "My Second dataset",
                data: [28, 48, 40, 19, 96, 27, 100],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "#FF6283",
                borderWidth: 3,
            },
        ],
    };
    return (
        <Card title="Radar Chart">
            <CardBody>
                <div className="d-flex justify-content-center align-items-center overflow-hidden">
                    <div style={{ width: "80%" }}>
                        <Radar data={data} />
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default RadarChart;

