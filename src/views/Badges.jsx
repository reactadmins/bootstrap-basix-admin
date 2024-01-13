import { Fragment } from "react";
import { Badge, Button, Col, Row } from "react-bootstrap";
import CardContent from "../components/Card/CardContent";
import { useDashboardDataContext } from "../context/dashboardDataContext";

const Badges = () => {
    const { isDark } = useDashboardDataContext();
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
                                    className="d-block fs-6 text-decoration-none"
                                    style={{
                                        color: `${
                                            isDark
                                                ? "var(--content-text-color)"
                                                : "var(--content-text-color)"
                                        }`,
                                    }}
                                >
                                    News
                                    <Badge className="badge bg-primary mx-1">
                                        5
                                    </Badge>
                                </a>
                                <a
                                    href="#"
                                    className="d-block fs-6 text-decoration-none"
                                    style={{
                                        color: `${
                                            isDark
                                                ? "var(--content-text-color)"
                                                : "var(--content-text-color)"
                                        }`,
                                    }}
                                >
                                    Comments
                                    <Badge className="badge bg-warning mx-1">
                                        10
                                    </Badge>
                                </a>
                                <a
                                    href="#"
                                    className="d-block fs-6 text-decoration-none"
                                    style={{
                                        color: `${
                                            isDark
                                                ? "var(--content-text-color)"
                                                : "var(--content-text-color)"
                                        }`,
                                    }}
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
                                <p
                                    className="mb-1"
                                    style={{
                                        color: `${
                                            isDark
                                                ? "var(--content-text-color)"
                                                : "var(--content-text-color)"
                                        }`,
                                    }}
                                >
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
                                <p
                                    className="mb-3"
                                    style={{
                                        color: `${
                                            isDark
                                                ? "var(--content-text-color)"
                                                : "var(--content-text-color)"
                                        }`,
                                    }}
                                >
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
                                <h1
                                    style={{
                                        color: `${
                                            isDark
                                                ? "var( --hedging-text-color)"
                                                : "var( --hedging-text-color)"
                                        }`,
                                    }}
                                >
                                    Example heading
                                    <Badge bg="secondary" className="mx-1">
                                        New
                                    </Badge>
                                </h1>
                                <h2
                                    style={{
                                        color: `${
                                            isDark
                                                ? "var( --hedging-text-color)"
                                                : "var( --hedging-text-color)"
                                        }`,
                                    }}
                                >
                                    Example heading
                                    <Badge bg="secondary" className="mx-1">
                                        New
                                    </Badge>
                                </h2>
                                <h3
                                    style={{
                                        color: `${
                                            isDark
                                                ? "var( --hedging-text-color)"
                                                : "var( --hedging-text-color)"
                                        }`,
                                    }}
                                >
                                    Example heading
                                    <Badge bg="secondary" className="mx-1">
                                        New
                                    </Badge>
                                </h3>
                                <h4
                                    style={{
                                        color: `${
                                            isDark
                                                ? "var( --hedging-text-color)"
                                                : "var( --hedging-text-color)"
                                        }`,
                                    }}
                                >
                                    Example heading
                                    <Badge bg="secondary" className="mx-1">
                                        New
                                    </Badge>
                                </h4>
                                <h5
                                    style={{
                                        color: `${
                                            isDark
                                                ? "var( --hedging-text-color)"
                                                : "var( --hedging-text-color)"
                                        }`,
                                    }}
                                >
                                    Example heading
                                    <Badge bg="secondary" className="mx-1">
                                        New
                                    </Badge>
                                </h5>
                                <h6
                                    style={{
                                        color: `${
                                            isDark
                                                ? "var( --hedging-text-color)"
                                                : "var( --hedging-text-color)"
                                        }`,
                                    }}
                                >
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
                                <p
                                    className="mb-1"
                                    style={{
                                        color: `${
                                            isDark
                                                ? "var(--content-text-color)"
                                                : "var(--content-text-color)"
                                        }`,
                                    }}
                                >
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

