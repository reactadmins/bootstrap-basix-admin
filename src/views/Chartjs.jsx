import { Col, Row } from "react-bootstrap";
import LineChart from "@/components/Chartjs/LineChart";
import BarChart from "@/components/Chartjs/BarChart";
import DoughnutChart from "@/components/Chartjs/DoughnutChart";
import RadarChart from "@/components/Chartjs/RadarChart";
import PieChart from "@/components/Chartjs/PieChart";
import PolarAreaChart from "@/components/Chartjs/PolarAreaChart";

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

