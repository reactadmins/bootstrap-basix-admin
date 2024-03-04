import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";
import Card from "@/components/Card/Card";
import { CardBody } from "react-bootstrap";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,

    Tooltip,
    Legend
);

const BarChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        },
    };

    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
    ];

    const data = {
        labels,
        datasets: [
            {
                label: "Vue Js",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: "rgba(33, 192, 120, 1)",
            },
            {
                label: "React Js",
                data: [28, 48, 40, 19, 86, 27, 90],
                backgroundColor: "rgba(56, 212, 255, 1)",
            },
        ],
    };
    return (
        <Card title="Bar Chart">
            <CardBody>
                <div className="d-flex justify-content-center align-items-center overflow-hidden">
                    <Bar options={options} data={data} />
                </div>
            </CardBody>
        </Card>
    );
};

export default BarChart;

