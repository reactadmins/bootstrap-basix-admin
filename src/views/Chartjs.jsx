import { Col, Row } from "react-bootstrap";
import LineChart from "../components/Chart/Chartjs/LineChart";
import BarChart from "../components/Chart/Chartjs/BarChart";
import DoughnutChart from "../components/Chart/Chartjs/DoughnutChart";
import RadarChart from "../components/Chart/Chartjs/RadarChart";
import PieChart from "../components/Chart/Chartjs/PieChart";
import PolarAreaChart from "../components/Chart/Chartjs/PolarAreaChart";

const Chartjs = () => {
    return (
        <Row className="gy-4 gx-4">
            <Col md={12} lg={6}>
                <LineChart />
            </Col>
            <Col md={12} lg={6}>
                <BarChart />
            </Col>
            <Col md={12} lg={6}>
                <DoughnutChart />
            </Col>
            <Col md={12} lg={6}>
                <RadarChart />
            </Col>
            <Col md={12} lg={6}>
                <PieChart />
            </Col>
            <Col md={12} lg={6}>
                <PolarAreaChart />
            </Col>
        </Row>
    );
};

export default Chartjs;

