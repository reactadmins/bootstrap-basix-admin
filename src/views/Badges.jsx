import { Fragment } from "react";
import { Badge, Button, Col, Row } from "react-bootstrap";
import CardContent from "../components/Card/CardContent";

const Badges = () => {
    return (
        <Fragment>
            {/* start badges & badges buttons section*/}
            <Row className="gy-4 gx-4 mb-4">
                <Col md={6}>
                    <CardContent
                        title="Badges"
                        titleCode={
                            <>
                                <small
                                    className="mx-2"
                                    style={{
                                        fontSize: "80%",
                                        fontWeight: "400",
                                    }}
                                >
                                    Use <code>.badge</code> class within
                                    <code>{`<span>`} </code>
                                    elements to create badges:
                                </small>
                            </>
                        }
                        CardBody={
                            <>
                                <a
                                    href="#"
                                    className="d-block fs-6 text-decoration-none text-black-50"
                                >
                                    News
                                    <Badge className="badge bg-primary mx-1">
                                        5
                                    </Badge>
                                </a>
                                <a
                                    href="#"
                                    className="d-block fs-6 text-decoration-none text-black-50"
                                >
                                    Comments
                                    <Badge className="badge bg-warning mx-1">
                                        10
                                    </Badge>
                                </a>
                                <a
                                    href="#"
                                    className="d-block fs-6 text-decoration-none text-black-50"
                                >
                                    Updates
                                    <Badge className="badge bg-success mx-1">
                                        2
                                    </Badge>
                                </a>
                            </>
                        }
                    />
                </Col>
                <Col md={6}>
                    <CardContent
                        title="Badges in Buttons"
                        CardBody={
                            <>
                                <p className="text-black-50 text-muted mb-1">
                                    Use <code>{`.badge`}</code> class within
                                    <code>{`<span>`}</code> elements to create
                                    badges:
                                </p>
                                <div className="d-flex flex-wrap gap-2">
                                    <Button variant="primary">
                                        Primary
                                        <Badge className="badge bg-light text-dark mx-1">
                                            7
                                        </Badge>
                                    </Button>
                                    <Button variant="success">
                                        Success
                                        <Badge className="badge bg-light text-dark mx-1">
                                            7
                                        </Badge>
                                    </Button>
                                    <Button variant="info">
                                        Info
                                        <Badge className="badge bg-light text-dark mx-1">
                                            7
                                        </Badge>
                                    </Button>
                                    <Button variant="warning">
                                        Warning
                                        <Badge className="badge bg-light text-dark mx-1">
                                            7
                                        </Badge>
                                    </Button>
                                    <Button variant="danger">
                                        Danger
                                        <Badge className="badge bg-light text-dark mx-1">
                                            7
                                        </Badge>
                                    </Button>
                                </div>
                            </>
                        }
                    />
                </Col>
            </Row>
            {/* end badges & badges buttons section*/}

            {/* start labels section*/}
            <Row className="gy-4 gx-4 mb-4">
                <Col md={6}>
                    <CardContent
                        title="Labels"
                        CardBody={
                            <>
                                <p className="text-black-50 text-muted mb-3">
                                    Use the <code>{`.label`}</code> class,
                                    followed by one of the six contextual
                                    classes <code>{`.label-default`}</code>,
                                    <code>{` .label-primary`}</code>,
                                    <code>{` .label-success`}</code>
                                    <code>{`.label-info`}</code>,
                                    <code>{`.label-warning`}</code>
                                    {" or "}
                                    <code>{` .label-danger`}</code>, within a
                                    <code>{`<span>`}</code>, elements to create
                                    badges:
                                </p>
                                <h1>
                                    Example heading
                                    <Badge bg="secondary" className="mx-1">
                                        New
                                    </Badge>
                                </h1>
                                <h2>
                                    Example heading
                                    <Badge bg="secondary" className="mx-1">
                                        New
                                    </Badge>
                                </h2>
                                <h3>
                                    Example heading
                                    <Badge bg="secondary" className="mx-1">
                                        New
                                    </Badge>
                                </h3>
                                <h4>
                                    Example heading
                                    <Badge bg="secondary" className="mx-1">
                                        New
                                    </Badge>
                                </h4>
                                <h5>
                                    Example heading
                                    <Badge bg="secondary" className="mx-1">
                                        New
                                    </Badge>
                                </h5>
                                <h6>
                                    Example heading
                                    <Badge bg="secondary" className="mx-1">
                                        New
                                    </Badge>
                                </h6>
                            </>
                        }
                    />
                </Col>
                <Col md={6}>
                    <CardContent
                        title="Labels"
                        CardBody={
                            <>
                                <p className="text-black-50 text-muted mb-1">
                                    Use <code>{`.badge`}</code> class within
                                    <code>{`<span>`}</code> elements to create
                                    badges:
                                </p>
                                <div className="d-flex flex-wrap gap-2">
                                    <Badge bg="primary">Primary</Badge>
                                    <Badge bg="secondary">Secondary</Badge>
                                    <Badge bg="success">Success</Badge>
                                    <Badge bg="danger">Danger</Badge>
                                    <Badge bg="warning" text="dark">
                                        Warning
                                    </Badge>
                                    <Badge bg="info">Info</Badge>
                                    <Badge bg="light" text="dark">
                                        Light
                                    </Badge>
                                    <Badge bg="dark">Dark</Badge>
                                </div>
                            </>
                        }
                    />
                </Col>
            </Row>
            {/* end badges & badges buttons section*/}
        </Fragment>
    );
};

export default Badges;

