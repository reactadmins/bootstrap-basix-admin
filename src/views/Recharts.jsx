import { Col, Row } from "react-bootstrap";
import AreaRechart from "@/components/Recharts/AreaRechart";
import LineRechart from "@/components/Recharts/LineRechart";
import PieRechart from "@/components/Recharts/PieRechart";
import BarRechart from "@/components/Recharts/BarRechart";
import RechartRadialBar from "@/components/Recharts/RechartRadialBar";
import RechartScatter from "@/components/Recharts/RechartScatter";

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

