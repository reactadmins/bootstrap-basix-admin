import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import Card from "@/components/Card/Card";
import { CardBody } from "react-bootstrap";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
    Legend
);

const LineChart = () => {
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
                fill: true,
                label: "vue js",
                data: [40, 39, 10, 40, 39, 80, 40],
                borderColor: "rgb(129, 224, 169)",
                backgroundColor: "rgba(129,224,169,0.5)",
            },
            {
                fill: true,
                label: "React js",
                data: [50, 20, 70, 30, 10, 5, 70],
                borderColor: "rgb(133,193,233)",
                backgroundColor: "rgba(133,193,233, 0.5)",
            },
        ],
    };
    return (
        <Card title="Line Chart">
            <CardBody>
                <div className="d-flex justify-content-center align-items-center overflow-hidden">
                    <Line options={options} data={data} />
                </div>
            </CardBody>
        </Card>
    );
};

export default LineChart;

