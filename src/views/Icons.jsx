import { Fragment } from "react";
import { CardBody, Col, Row } from "react-bootstrap";
import Card from "@/components/Card/Card";
import Iconviewer from "@/components/Icon/Iconviewer";
import brandico from "@/data/brandico.json";
import entypo from "@/data/entypo.json";
import fontAwesome from "@/data/font-awesome.json";
import fontelico from "@/data/fontelico.json";

const Icons = () => {
    return (
        <Card title="Icons">
            <CardBody>
                <Row className="gy-4 gx-4">
                    <Col sm={12} md={12} lg={6}>
                        <Iconviewer
                            iconList={brandico?.lists?.icons}
                            pathName={brandico?.href}
                            prefix={brandico?.prefix}
                        />
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <Iconviewer
                            iconList={entypo?.lists?.mainicons?.icons}
                            pathName={entypo?.href}
                            prefix={entypo?.prefix}
                        />
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <Iconviewer
                            iconList={fontAwesome?.lists[0]?.icons}
                            pathName={fontAwesome?.href}
                            prefix={fontAwesome?.prefix}
                        />
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <Iconviewer
                            iconList={fontelico?.lists?.icons}
                            pathName={fontelico?.href}
                            prefix={fontelico?.prefix}
                        />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default Icons;

