import { Fragment } from "react";
import CardContent from "../components/Card/CardContent";
import { Col, Row } from "react-bootstrap";
import Alert from "../components/Alert/Alert";

const Alerts = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                {/* start alerts  section */}
                <Col md={6}>
                    <CardContent
                        title="Alerts"
                        CardBody={
                            <Fragment>
                                <Alert
                                    title="This is a primary alert—check it out!"
                                    alertBg="primary"
                                />
                                <Alert
                                    title="This is a primary alert—check it out!"
                                    alertBg="secondary"
                                />
                                <Alert
                                    title="This is a primary alert—check it out!"
                                    alertBg="success"
                                />
                                <Alert
                                    title="This is a primary alert—check it out!"
                                    alertBg="danger"
                                />
                                <Alert
                                    title="This is a primary alert—check it out!"
                                    alertBg="warning"
                                />
                                <Alert
                                    title="This is a primary alert—check it out!"
                                    alertBg="info"
                                />
                                <Alert
                                    title="This is a primary alert—check it out!"
                                    alertBg="light"
                                />
                                <Alert
                                    title="This is a primary alert—check it out!"
                                    alertBg="dark"
                                />
                            </Fragment>
                        }
                    />
                </Col>
                {/* end alerts  section */}

                {/* start dismissing alerts  section */}
                <Col md={6}>
                    <CardContent
                        title="Dismissing Alerts"
                        CardBody={
                            <Fragment>
                                <Alert
                                    type="dismissible"
                                    title="You successfully read this important alert."
                                    badgeTitle="Success"
                                    alertBg="success"
                                />
                                <Alert
                                    type="dismissible"
                                    title="You successfully read this important alert."
                                    badgeTitle="Primary"
                                    alertBg="primary"
                                />
                                <Alert
                                    type="dismissible"
                                    title="You successfully read this important alert."
                                    badgeTitle="Secondary"
                                    alertBg="secondary"
                                />
                                <Alert
                                    type="dismissible"
                                    title="You successfully read this important alert."
                                    badgeTitle="Warning"
                                    alertBg="warning"
                                />
                                <Alert
                                    type="dismissible"
                                    title="You successfully read this important alert."
                                    badgeTitle="Danger"
                                    alertBg="danger"
                                />
                                <Alert
                                    type="dismissible"
                                    title="You successfully read this important alert."
                                    badgeTitle="Info"
                                    alertBg="info"
                                />
                            </Fragment>
                        }
                    />
                </Col>
                {/* end dismissing alerts  section */}

                {/* start link color alerts  section */}
                <Col md={6}>
                    <CardContent
                        title="Link Color Alerts"
                        CardBody={
                            <Fragment>
                                <Alert
                                    alertBg="primary"
                                    title={
                                        <Fragment>
                                            This is a primary alert with
                                            <a
                                                href="#"
                                                className="alert-link mx-1"
                                            >
                                                an example link
                                            </a>
                                            . Give it a click if you like.
                                        </Fragment>
                                    }
                                />
                                <Alert
                                    alertBg="secondary"
                                    title={
                                        <Fragment>
                                            This is a primary alert with
                                            <a
                                                href="#"
                                                className="alert-link mx-1"
                                            >
                                                an example link
                                            </a>
                                            . Give it a click if you like.
                                        </Fragment>
                                    }
                                />
                                <Alert
                                    alertBg="success"
                                    title={
                                        <Fragment>
                                            This is a primary alert with
                                            <a
                                                href="#"
                                                className="alert-link mx-1"
                                            >
                                                an example link
                                            </a>
                                            . Give it a click if you like.
                                        </Fragment>
                                    }
                                />
                                <Alert
                                    alertBg="danger"
                                    title={
                                        <Fragment>
                                            This is a primary alert with
                                            <a
                                                href="#"
                                                className="alert-link mx-1"
                                            >
                                                an example link
                                            </a>
                                            . Give it a click if you like.
                                        </Fragment>
                                    }
                                />
                                <Alert
                                    alertBg="warning"
                                    title={
                                        <Fragment>
                                            This is a primary alert with
                                            <a
                                                href="#"
                                                className="alert-link mx-1"
                                            >
                                                an example link
                                            </a>
                                            . Give it a click if you like.
                                        </Fragment>
                                    }
                                />
                                <Alert
                                    alertBg="info"
                                    title={
                                        <Fragment>
                                            This is a primary alert with
                                            <a
                                                href="#"
                                                className="alert-link mx-1"
                                            >
                                                an example link
                                            </a>
                                            . Give it a click if you like.
                                        </Fragment>
                                    }
                                />
                                <Alert
                                    alertBg="light"
                                    title={
                                        <Fragment>
                                            This is a primary alert with
                                            <a
                                                href="#"
                                                className="alert-link mx-1"
                                            >
                                                an example link
                                            </a>
                                            . Give it a click if you like.
                                        </Fragment>
                                    }
                                />
                                <Alert
                                    alertBg="dark"
                                    title={
                                        <Fragment>
                                            This is a primary alert with
                                            <a
                                                href="#"
                                                className="alert-link mx-1"
                                            >
                                                an example link
                                            </a>
                                            . Give it a click if you like.
                                        </Fragment>
                                    }
                                />
                            </Fragment>
                        }
                    />
                </Col>
                {/* end link color alerts  section */}

                {/* start alerts contents section */}
                <Col md={6}>
                    <CardContent
                        title="Contents"
                        CardBody={
                            <Fragment>
                                <Alert
                                    type="content"
                                    title="Well done!"
                                    alertBg="success"
                                    alertContent={
                                        <Fragment>
                                            <p>
                                                Aww yeah, you successfully read
                                                this important alert message.
                                                This example text is going to
                                                run a bit longer so that you can
                                                see how spacing within an alert
                                                works with this kind of content.
                                            </p>
                                            <hr />
                                            <p>
                                                Whenever you need to, be sure to
                                                use margin utilities to keep
                                                things nice and tidy.
                                            </p>
                                        </Fragment>
                                    }
                                />
                                <Alert
                                    type="content"
                                    title="Well done!"
                                    alertBg="warning"
                                    alertContent={
                                        <Fragment>
                                            <p>
                                                Aww yeah, you successfully read
                                                this important alert message.
                                                This example text is going to
                                                run a bit longer so that you can
                                                see how spacing within an alert
                                                works with this kind of content.
                                            </p>
                                            <hr />
                                            <p>
                                                Whenever you need to, be sure to
                                                use margin utilities to keep
                                                things nice and tidy.
                                            </p>
                                        </Fragment>
                                    }
                                />
                                <Alert
                                    type="content"
                                    title="Well done!"
                                    alertBg="danger"
                                    alertContent={
                                        <Fragment>
                                            <p>
                                                Aww yeah, you successfully read
                                                this important alert message.
                                                This example text is going to
                                                run a bit longer so that you can
                                                see how spacing within an alert
                                                works with this kind of content.
                                            </p>
                                            <hr />
                                            <p>
                                                Whenever you need to, be sure to
                                                use margin utilities to keep
                                                things nice and tidy.
                                            </p>
                                        </Fragment>
                                    }
                                />
                            </Fragment>
                        }
                    />
                </Col>
                {/* end alerts contents section */}
            </Row>
        </Fragment>
    );
};

export default Alerts;

