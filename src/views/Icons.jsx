import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import CardContent from "../components/Card/CardContent";
import Iconviewer from "../components/Icon/Iconviewer";
import brandico from "../components/data/brandico.json";
import entypo from "../components/data/entypo.json";
import fontAwesome from "../components/data/font-awesome.json";
import fontelico from "../components/data/fontelico.json";

const Icons = () => {
    return (
        <Fragment>
            <CardContent
                title="Icons"
                CardBody={
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
                }
            />
        </Fragment>
    );
};

export default Icons;

