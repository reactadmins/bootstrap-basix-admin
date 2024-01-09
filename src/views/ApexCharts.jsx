import { Col, Row } from "react-bootstrap";
import LineChart from "../components/Chart/ApexCharts/LineChart";
import AreaChart from "../components/Chart/ApexCharts/AreaChart";
import ColumnChart from "../components/Chart/ApexCharts/ColumnChart";
import CandlestickChart from "../components/Chart/ApexCharts/CandlestickChart";
import PieChart from "../components/Chart/ApexCharts/PieChart";
import BubbleChart from "../components/Chart/ApexCharts/BubbleChart";

const ApexCharts = () => {
    return (
        <Row className="gy-4 gx-4">
            <Col md={12} lg={6}>
                <LineChart />
            </Col>
            <Col md={12} lg={6}>
                <AreaChart />
            </Col>
            <Col md={12} lg={6}>
                <ColumnChart />
            </Col>
            <Col md={12} lg={6}>
                <CandlestickChart />
            </Col>
            <Col md={12} lg={6}>
                <PieChart />
            </Col>
            <Col md={12} lg={6}>
                <BubbleChart />
            </Col>
        </Row>
    );
};

export default ApexCharts;

