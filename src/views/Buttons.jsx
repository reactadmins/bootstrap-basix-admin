import { Fragment } from "react";
import { Button, CardBody, Col, Row } from "react-bootstrap";
import Card from "@/components/Card/Card";

const Buttons = () => {
    return (
        <Fragment>
            {/* start badges & outline buttons section*/}
            <Row className="gy-4 gx-4 mb-4">
                <Col md={6}>
                    <Card
                        title="Badges"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use this class <code>{`<a>`}</code>,{" "}
                                <code>{`<button>`} </code>
                                or
                                <code> {`<input>`}</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="primary">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="success">Success</Button>
                                <Button variant="danger">Danger</Button>
                                <Button variant="warning">Warning</Button>
                                <Button variant="dark">Dark</Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card
                        title="Outline Buttons"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use this class <code>{`<a>`}</code>,{" "}
                                <code>{`<button>`} </code>
                                or
                                <code> {`<input>`}</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="outline-primary">
                                    Primary
                                </Button>
                                <Button variant="outline-secondary">
                                    Secondary
                                </Button>
                                <Button variant="outline-success">
                                    Success
                                </Button>
                                <Button variant="outline-danger">Danger</Button>
                                <Button variant="outline-warning">
                                    Warning
                                </Button>
                                <Button variant="outline-dark">Dark</Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* end badges & outline buttons section*/}

            {/* start button tags section*/}
            <Row className="gy-4 gx-4 mb-4">
                <Col md={6}>
                    <Card
                        title="Button tags"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use this class <code>.btn </code> or
                                <code> {`<button>`}</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-flex flex-wrap gap-2">
                                <Button href="#" variant="primary">
                                    Link
                                </Button>
                                <Button type="submit" variant="danger">
                                    Button
                                </Button>
                                <Button
                                    as="input"
                                    type="button"
                                    value="Input"
                                />
                                <Button
                                    as="input"
                                    type="submit"
                                    value="Submit"
                                />
                                <Button as="input" type="reset" value="Reset" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card
                        title="Button tags"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use this class <code>{`<a>`}</code>,{" "}
                                <code>{`<button>`} </code>
                                or
                                <code> {`<input>`}</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-flex flex-wrap gap-2">
                                <Button href="#" variant="outline-primary">
                                    Link
                                </Button>
                                <Button type="submit" variant="outline-danger">
                                    Button
                                </Button>
                                <Button
                                    as="input"
                                    type="button"
                                    value="Input"
                                />
                                <Button
                                    as="input"
                                    type="submit"
                                    value="Submit"
                                />
                                <Button as="input" type="reset" value="Reset" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* end button tagss section*/}

            {/* start disabled state button section*/}
            <Row className="gy-4 gx-4 mb-4">
                <Col md={6}>
                    <Card
                        title="Disabled state"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use this class{" "}
                                <code>disabled={"disabled"}</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="primary" disabled>
                                    Primary
                                </Button>
                                <Button variant="secondary" disabled>
                                    Secondary
                                </Button>
                                <Button variant="success" disabled>
                                    Success
                                </Button>
                                <Button variant="danger" disabled>
                                    Danger
                                </Button>
                                <Button variant="warning" disabled>
                                    Warning
                                </Button>
                                <Button variant="dark" disabled>
                                    Dark
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card
                        title="Disabled state"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use this class <code>{`<a>`}</code>,{" "}
                                <code>{`<button>`} </code>
                                or
                                <code> {`<input>`}</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="outline-primary" disabled>
                                    Primary
                                </Button>
                                <Button variant="outline-secondary" disabled>
                                    Secondary
                                </Button>
                                <Button variant="outline-success" disabled>
                                    Success
                                </Button>
                                <Button variant="outline-danger" disabled>
                                    Danger
                                </Button>
                                <Button variant="outline-warning" disabled>
                                    Warning
                                </Button>
                                <Button variant="outline-dark" disabled>
                                    Dark
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* end disabled state button  section*/}

            {/* start button with icons section*/}
            <Row className="gy-4 gx-4 mb-4">
                <Col md={6}>
                    <Card
                        title="Button with Icons"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use <code>{`<i>`}</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="primary">
                                    <i className="fa fa-star"></i> Primary
                                </Button>
                                <Button variant="secondary">
                                    <i className="fa fa-lightbulb"></i>{" "}
                                    Secondary
                                </Button>
                                <Button variant="success">
                                    <i className="fa fa-magic"></i> Success
                                </Button>
                                <Button variant="warning">
                                    <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                                    Warning
                                </Button>
                                <Button variant="danger">
                                    <i className="fa fa-rss"></i> Danger
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card
                        title="Button with Icons"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use <code>{`<i>`}</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="outline-primary">
                                    <i className="fa fa-star"></i> Primary
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="fa fa-lightbulb"></i>{" "}
                                    Secondary
                                </Button>
                                <Button variant="outline-success">
                                    <i className="fa fa-magic"></i> Success
                                </Button>
                                <Button variant="outline-warning">
                                    <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                                    Warning
                                </Button>
                                <Button variant="outline-danger">
                                    <i className="fa fa-rss"></i> Danger
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* end button with icons section*/}

            {/* start small button section*/}
            <Row className="gy-4 gx-4 mb-4">
                <Col md={6}>
                    <Card
                        title="Small Button"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use this class <code>.btn-sm</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="primary" size="sm">
                                    Primary
                                </Button>
                                <Button variant="secondary" size="sm">
                                    Secondary
                                </Button>
                                <Button variant="success" size="sm">
                                    Success
                                </Button>
                                <Button variant="warning" size="sm">
                                    Warning
                                </Button>
                                <Button variant="danger" size="sm">
                                    Danger
                                </Button>
                                <Button variant="link" size="sm">
                                    Link
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card
                        title="Small Button"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use this class <code>.btn-sm</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="outline-primary" size="sm">
                                    Primary
                                </Button>
                                <Button variant="outline-secondary" size="sm">
                                    Secondary
                                </Button>
                                <Button variant="outline-success" size="sm">
                                    Success
                                </Button>
                                <Button variant="outline-warning" size="sm">
                                    Warning
                                </Button>
                                <Button variant="outline-danger" size="sm">
                                    Danger
                                </Button>
                                <Button variant="outline-link" size="sm">
                                    Link
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* end small button section*/}

            {/* start small button with icons section*/}
            <Row className="gy-4 gx-4 mb-4">
                <Col md={6}>
                    <Card
                        title="Small Button with Icons"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use this class <code>.btn-sm</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="primary" size="sm">
                                    <i className="fa fa-star"></i> Primary
                                </Button>
                                <Button variant="secondary" size="sm">
                                    <i className="fa fa-lightbulb"></i>{" "}
                                    Secondary
                                </Button>
                                <Button variant="success" size="sm">
                                    <i className="fa fa-magic"></i> Success
                                </Button>
                                <Button variant="warning" size="sm">
                                    <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                                    Warning
                                </Button>
                                <Button variant="danger" size="sm">
                                    <i className="fa fa-rss"></i> Danger
                                </Button>
                                <Button variant="link" size="sm">
                                    <i className="fa fa-link"></i> Link
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card
                        title="Small Button with Icons"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use this class <code>.btn-sm</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="outline-primary" size="sm">
                                    <i className="fa fa-star"></i> Primary
                                </Button>
                                <Button variant="outline-secondary" size="sm">
                                    <i className="fa fa-lightbulb"></i>{" "}
                                    Secondary
                                </Button>
                                <Button variant="outline-success" size="sm">
                                    <i className="fa fa-magic"></i> Success
                                </Button>
                                <Button variant="outline-warning" size="sm">
                                    <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                                    Warning
                                </Button>
                                <Button variant="outline-danger" size="sm">
                                    <i className="fa fa-rss"></i> Danger
                                </Button>

                                <Button variant="link" size="sm">
                                    <i className="fa fa-link"></i> Link
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* end small button with icons section*/}

            {/* start large button section*/}
            <Row className="gy-4 gx-4 mb-4">
                <Col md={6}>
                    <Card
                        title="Large Button"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use this class <code>.btn-lg</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="primary" size="lg">
                                    Primary
                                </Button>
                                <Button variant="secondary" size="lg">
                                    Secondary
                                </Button>
                                <Button variant="success" size="lg">
                                    Success
                                </Button>
                                <Button variant="warning" size="lg">
                                    Warning
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card
                        title="Large Button"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use this class <code>.btn-lg</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="outline-primary" size="lg">
                                    Primary
                                </Button>
                                <Button variant="outline-secondary" size="lg">
                                    Secondary
                                </Button>
                                <Button variant="outline-success" size="lg">
                                    Success
                                </Button>
                                <Button variant="outline-warning" size="lg">
                                    Warning
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* end large button section*/}

            {/* start large active & disabled button section*/}
            <Row className="gy-4 gx-4 mb-4">
                <Col md={6}>
                    <Card
                        title="Large Active Button"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use this class <code>.btn-lg .active</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="primary" size="lg" active>
                                    Primary
                                </Button>
                                <Button variant="secondary" size="lg" active>
                                    Secondary
                                </Button>
                                <Button variant="success" size="lg" active>
                                    Success
                                </Button>
                                <Button variant="warning" size="lg" active>
                                    Warning
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card
                        title="Large Disabled Button"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use this class <code>.btn-lg .active</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-flex flex-wrap gap-2">
                                <Button
                                    variant="outline-primary"
                                    size="lg"
                                    active
                                >
                                    Primary
                                </Button>
                                <Button
                                    variant="outline-secondary"
                                    size="lg"
                                    active
                                >
                                    Secondary
                                </Button>
                                <Button
                                    variant="outline-success"
                                    size="lg"
                                    active
                                >
                                    Success
                                </Button>
                                <Button
                                    variant="outline-warning"
                                    size="lg"
                                    active
                                >
                                    Warning
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* end large active & disabled button section*/}

            {/* start block level buttons section*/}
            <Row className="gy-4 gx-4">
                <Col md={6}>
                    <Card
                        title="Block Level Buttons"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use this class <code>.btn-block</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg">
                                    Primary
                                </Button>
                                <Button variant="secondary" size="lg">
                                    Secondary
                                </Button>
                                <Button variant="success" size="lg">
                                    Success
                                </Button>
                                <Button variant="warning" size="lg">
                                    Warning
                                </Button>
                                <Button variant="danger" size="lg">
                                    Danger
                                </Button>
                                <Button variant="link" size="lg">
                                    Link
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card
                        title="Block Level Buttons"
                        subscript={
                            <small
                                className="mx-2"
                                style={{
                                    fontSize: "80%",
                                    fontWeight: "400",
                                }}
                            >
                                Use this class <code>.btn-block</code>
                            </small>
                        }
                    >
                        <CardBody>
                            <div className="d-grid gap-2">
                                <Button variant="outline-primary" size="lg">
                                    Primary
                                </Button>
                                <Button variant="outline-secondary" size="lg">
                                    Secondary
                                </Button>
                                <Button variant="outline-success" size="lg">
                                    Success
                                </Button>
                                <Button variant="outline-warning" size="lg">
                                    Warning
                                </Button>
                                <Button variant="outline-danger" size="lg">
                                    Danger
                                </Button>
                                <Button variant="link" size="lg">
                                    Link
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* end block level buttons section*/}
        </Fragment>
    );
};

export default Buttons;

