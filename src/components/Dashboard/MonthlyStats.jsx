import { Card } from "react-bootstrap";
import MonthlyStatsChart from "../Chart/MonthlyStatsChart";
import CardHeader from "react-bootstrap/esm/CardHeader";

const MonthlyStats = () => {
    return (
        <Card
            className="p-0 rounded-0 border-0"
            style={{ padding: "20px", backgroundColor: "#42a5f5" }}
        >
            <CardHeader className="rounded-0 bg-transparent border-0 d-flex align-items-center pb-3">
                <h5
                    className="text-white m-0 fw-semibold"
                    style={{ fontSize: ".875em" }}
                >
                    February
                </h5>
            </CardHeader>
            <Card.Body className="pt-0">
                <MonthlyStatsChart />
            </Card.Body>
        </Card>
    );
};

export default MonthlyStats;

