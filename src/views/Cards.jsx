import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import ProfileCard from "../components/Card/ProfileCard";
import NotificationStatsCart from "../components/Card/NotificationStatsCart";
import OverlayCard from "../components/Card/OverlayCard";
import WidgetsCard from "../components/Card/WidgetsCard";
import placeholder from "../assets/img/placeholder.png";

const Cards = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                {/* start profile card section */}
                <Col md={6} lg={4}>
                    <ProfileCard
                        headerTitle="Profile Card"
                        title="Steven Lee"
                    />
                </Col>
                <Col md={6} lg={4}>
                    <ProfileCard
                        footerTitle="Profile Card"
                        title="Steven Lee"
                    />
                </Col>
                <Col md={6} lg={4}>
                    <ProfileCard
                        headerTitle="Profile Card"
                        headerIcon="fa-solid fa-user"
                        title="Steven Lee"
                    />
                </Col>
                {/* end profile card section */}

                {/* start notification stats card section */}
                <Col md={6} lg={4}>
                    <NotificationStatsCart />
                </Col>
                {/* end notification stats card section */}

                {/* start profile card section */}
                <Col md={6} lg={4}>
                    <ProfileCard
                        type="info"
                        title="Kanye West"
                        userInfo={
                            <p className="text-secondary text-center fs-6 px-3">
                                Just got a pretty neat project via
                                <a
                                    href="#"
                                    className="text-decoration-none text-secondary mx-1"
                                >
                                    @ooomf
                                </a>
                                - Give it a try
                                <a
                                    href="#"
                                    className="text-decoration-none text-secondary mx-1"
                                >
                                    http://t.co/e02DwGEeOJ
                                </a>
                            </p>
                        }
                    />
                </Col>
                {/* end profile card section */}

                {/* start overlay card section */}
                <Col md={6} lg={4}>
                    <OverlayCard />
                </Col>
                {/* end overlay card section */}

                {/* start widgets card section */}
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card with switch"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card with Label"
                        badge="Success"
                        badgeBg="success"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card with Label"
                        badge="49"
                        badgeBg="danger"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card Outline"
                        cardBorderColor="primary"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card Outline"
                        cardBorderColor="secondary"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card Outline"
                        cardBorderColor="success"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        cardBg="danger"
                        bodyContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                        footerContent="Someone famous in Source Title"
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        cardBg="warning"
                        bodyContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                        footerContent="Someone famous in Source Title"
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        cardBg="primary"
                        bodyContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                        footerContent="Someone famous in Source Title"
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card Outline"
                        headerBg="secondary"
                        bodyBg="primary"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card Outline"
                        headerBg="dark"
                        bodyBg="danger"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        headerTitle="Card Outline"
                        headerBg="success"
                        bodyBg="warning"
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        title="Card Image Title"
                        cardImage={placeholder}
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        title="Card Image Title"
                        cardImage={placeholder}
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                <Col md={6} lg={4}>
                    <WidgetsCard
                        title="Card Image Title"
                        cardImage={placeholder}
                        bodyContent="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </Col>
                {/* end widgets card section */}
            </Row>
        </Fragment>
    );
};

export default Cards;

