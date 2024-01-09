import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import CardContent from "../components/Card/CardContent";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const progressBars = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                <Col md={6}>
                    <CardContent
                        title="Background"
                        CardBody={
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar
                                    strokeColor="#28a745"
                                    percent="25"
                                />
                                <ProgressBar
                                    strokeColor="#17a2b8"
                                    percent="50"
                                />
                                <ProgressBar
                                    strokeColor="#ffc107"
                                    percent="75"
                                />
                                <ProgressBar
                                    strokeColor="#dc3545"
                                    percent="100"
                                />
                            </div>
                        }
                    />
                </Col>
                <Col md={6}>
                    <CardContent
                        title="Animated Background"
                        CardBody={
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar
                                    isProgress={true}
                                    strokeColor="#28a745"
                                    percent="25"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    strokeColor="#17a2b8"
                                    percent="50"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    strokeColor="#ffc107"
                                    percent="75"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    strokeColor="#dc3545"
                                    percent="100"
                                />
                            </div>
                        }
                    />
                </Col>
                <Col md={6}>
                    <CardContent
                        title="Labels"
                        CardBody={
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar
                                    strokeColor="#28a745"
                                    percent="25"
                                    labels="25"
                                />
                                <ProgressBar
                                    strokeColor="#17a2b8"
                                    percent="50"
                                    labels="50"
                                />
                                <ProgressBar
                                    strokeColor="#ffc107"
                                    percent="75"
                                    labels="75"
                                />
                                <ProgressBar
                                    strokeColor="#dc3545"
                                    percent="100"
                                    labels="100"
                                />
                            </div>
                        }
                    />
                </Col>
                <Col md={6}>
                    <CardContent
                        title="Animated Labels"
                        CardBody={
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar
                                    isProgress={true}
                                    strokeColor="#28a745"
                                    percent="25"
                                    labels="25"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    strokeColor="#17a2b8"
                                    percent="50"
                                    labels="50"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    strokeColor="#ffc107"
                                    percent="75"
                                    labels="75"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    strokeColor="#dc3545"
                                    percent="100"
                                    labels="100"
                                />
                            </div>
                        }
                    />
                </Col>
                <Col md={6}>
                    <CardContent
                        title="Progress Striped"
                        CardBody={
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar
                                    isStriped={true}
                                    strokeColor="#28a745"
                                    percent="25"
                                />
                                <ProgressBar
                                    isStriped={true}
                                    strokeColor="#17a2b8"
                                    percent="50"
                                />
                                <ProgressBar
                                    isStriped={true}
                                    strokeColor="#ffc107"
                                    percent="75"
                                />
                                <ProgressBar
                                    isStriped={true}
                                    strokeColor="#dc3545"
                                    percent="100"
                                />
                            </div>
                        }
                    />
                </Col>
                <Col md={6}>
                    <CardContent
                        title="Animated Progress Striped"
                        CardBody={
                            <div className="d-flex flex-column gap-2">
                                <ProgressBar
                                    isProgress={true}
                                    isStriped={true}
                                    strokeColor="#28a745"
                                    percent="25"
                                    labels="25"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    isStriped={true}
                                    strokeColor="#17a2b8"
                                    percent="50"
                                    labels="50"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    isStriped={true}
                                    strokeColor="#ffc107"
                                    percent="75"
                                    labels="75"
                                />
                                <ProgressBar
                                    isProgress={true}
                                    isStriped={true}
                                    strokeColor="#dc3545"
                                    percent="100"
                                    labels="100"
                                />
                            </div>
                        }
                    />
                </Col>
            </Row>
        </Fragment>
    );
};

export default progressBars;

