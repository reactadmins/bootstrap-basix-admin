import { Col, Row } from "react-bootstrap";
import AreaRechart from "../components/Chart/Recharts/AreaRechart";
import LineRechart from "../components/Chart/Recharts/LineRechart";
import PieRechart from "../components/Chart/Recharts/PieRechart";
import BarRechart from "../components/Chart/Recharts/BarRechart";
import RechartRadialBar from "../components/Chart/Recharts/RechartRadialBar";
import RechartScatter from "../components/Chart/Recharts/RechartScatter";

const Recharts = () => {
    return (
        <Row className="gy-4 gx-4">
            <Col md={12} lg={6}>
                <LineRechart />
            </Col>
            <Col md={12} lg={6}>
                <AreaRechart />
            </Col>
            <Col md={12} lg={6}>
                <BarRechart />
            </Col>
            <Col md={12} lg={6}>
                <PieRechart />
            </Col>
            <Col md={12} lg={6}>
                <RechartRadialBar />
            </Col>
            <Col md={12} lg={6}>
                <RechartScatter />
            </Col>
        </Row>
    );
};

export default Recharts;

