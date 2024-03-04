import { Fragment } from "react";
import { CardBody, Col, Row } from "react-bootstrap";
import Card from "@/components/Card/Card";
import ProgressBar from "react-bootstrap/ProgressBar";

const progressBars = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                <Col md={6}>
                    <Card title="Background">
                        <CardBody>
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar variant="success" now={25} />
                                <ProgressBar variant="primary" now={50} />
                                <ProgressBar variant="warning" now={75} />
                                <ProgressBar variant="danger" now={100} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card title="With Labels">
                        <CardBody>
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar variant="success" now={25} label="25" />
                                <ProgressBar variant="primary" now={50} label="50" />
                                <ProgressBar variant="warning" now={75} label="75" />
                                <ProgressBar variant="danger" now={100} label="100" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card title="Striped">
                        <CardBody>
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar striped variant="success" now={25} />
                                <ProgressBar striped variant="primary" now={50} />
                                <ProgressBar striped variant="warning" now={75} />
                                <ProgressBar striped variant="danger" now={100} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card title="Animated">
                        <CardBody>
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar
                                    animated
                                    striped
                                    variant="success"
                                    now={25}
                                    label="25"
                                />
                                <ProgressBar
                                    animated
                                    striped
                                    variant="primary"
                                    now={50}
                                    label="50"
                                />
                                <ProgressBar
                                    animated
                                    striped
                                    variant="warning"
                                    now={75}
                                    label="75"
                                />
                                <ProgressBar
                                    animated
                                    striped
                                    variant="danger"
                                    now={100}
                                    label="100"
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card title="Stacked">
                        <CardBody>
                            <ProgressBar>
                                <ProgressBar striped variant="success" now={30} key={1} />
                                <ProgressBar variant="warning" now={16} key={2} />
                                <ProgressBar striped variant="danger" now={22} key={3} />
                            </ProgressBar>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default progressBars;

