import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Card from "@/components/Card/Card";
import { CardBody } from "react-bootstrap";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ["Vue Js", "Ember Js", "React Js", "Angular Js"],
        datasets: [
            {
                label: "# of Votes",
                data: [40, 20, 80, 10],
                backgroundColor: [
                    "rgba(31,193,120, 1)",
                    "rgba(228, 102, 80,1)",
                    "rgba(0,195,230,1)",
                    "rgba(219,7,0,1)",
                ],
                borderColor: [
                    "rgba(31,193,120, 1)",
                    "rgba(228, 102, 80,1)",
                    "rgba(0,195,230,1)",
                    "rgba(7219,7,0,1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <Card title="Pie Chart">
            <CardBody>
                <div className="d-flex justify-content-center align-items-center overflow-hidden">
                    <div style={{ width: "80%" }}>
                        <Pie data={data} />
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default PieChart;

