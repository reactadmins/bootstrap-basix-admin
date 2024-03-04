import { Fragment } from "react";
import {
    CardBody,
    CardFooter,
    CardText,
    CardTitle,
    Col,
    Row,
} from "react-bootstrap";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import OverlayCard from "@/components/OverlayCard/OverlayCard";
import placeholder from "@/assets/image/placeholder.png";
import NotificationStatsCart from "@/components/NotificationStatsCart/NotificationStatsCart";
import userImg from "@/assets/image/admin.jpg";
import Card from "@/components/Card/Card";

const Cards = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                {/* start profile card section */}
                <Col md={6} lg={4}>
                    <Card title="Profile Card">
                        <CardBody className="p-0">
                            <ProfileCard userName=" Steven Lee" image={userImg}>
                                <span>
                                    <i className="fa-solid fa-location-dot mx-1"></i>
                                    California, United States
                                </span>
                                <hr className="w-100 border-0" />
                                <div className="d-flex gap-2 align-items-center justify-content-center mt-4">
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-pinterest"></i>
                                    </a>
                                </div>
                            </ProfileCard>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card title="Profile Card" headerPosition="bottom">
                        <CardBody className="p-0">
                            <ProfileCard userName=" Steven Lee" image={userImg}>
                                <span>
                                    <i className="fa-solid fa-location-dot mx-1"></i>
                                    California, United States
                                </span>
                                <hr className="w-100 border-0" />
                                <div className="d-flex gap-2 align-items-center justify-content-center mt-4">
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-pinterest"></i>
                                    </a>
                                </div>
                            </ProfileCard>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card title="Profile Card" titleIcon="fa-solid fa-user">
                        <CardBody className="p-0">
                            <ProfileCard userName=" Steven Lee" image={userImg}>
                                <span>
                                    <i className="fa-solid fa-location-dot mx-1"></i>
                                    California, United States
                                </span>
                                <hr className="w-100 border-0" />
                                <div className="d-flex gap-2 align-items-center justify-content-center mt-4">
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-decoration-none text-secondary"
                                    >
                                        <i className="fa-brands fa-pinterest"></i>
                                    </a>
                                </div>
                            </ProfileCard>
                        </CardBody>
                    </Card>
                </Col>
                {/* end profile card section */}

                {/* start notification stats card section */}
                <Col md={6} lg={4}>
                    <NotificationStatsCart
                        useName="Jim Doe"
                        image={userImg}
                        description="Project Manager"
                        notifications={[
                            {
                                link: "#",
                                label: "Mail Inbox",
                                icon: "fa-regular fa-envelope",
                                count: 10,
                                badgeBg: "primary",
                            },
                            {
                                link: "#",
                                label: "Recent Activity",
                                icon: "fa-solid fa-server",
                                count: 15,
                                badgeBg: "danger",
                            },
                            {
                                link: "#",
                                label: "Notification",
                                icon: "fa-regular fa-bell",
                                count: 11,
                                badgeBg: "success",
                            },
                            {
                                link: "#",
                                label: "Message",
                                icon: "fa-solid fa-message",
                                count: 3,
                                badgeBg: "warning",
                            },
                        ]}
                    />
                </Col>
                {/* end notification stats card section */}

                {/* start profile card section */}
                <Col md={6} lg={4}>
                    <Card isHeader={false}>
                        <CardBody className="p-0">
                            <ProfileCard userName="Steven Lee" image={userImg}>
                                <p className="text-center fs-6 px-3">
                                    Just got a pretty neat project via @ooomf -
                                    Give it a
                                    <a href="#" className="mx-1">
                                        tryhttp://t.co/e02DwGEeOJ
                                    </a>
                                </p>
                            </ProfileCard>
                        </CardBody>
                    </Card>
                </Col>
                {/* end profile card section */}

                {/* start overlay card section */}
                <Col md={6} lg={4}>
                    <OverlayCard
                        useName="Jim Doe"
                        image={userImg}
                        description="Project Manager"
                        socialStatus={[
                            { label: "Tweets", count: 750 },
                            { label: "Following", count: 865 },
                            { label: "Followers", count: 3645 },
                        ]}
                        comment={
                            <textarea
                                placeholder="Write your Tweet and Enter"
                                rows="1"
                                className="w-100 form-control"
                            />
                        }
                        locationName="New Castle, UK"
                    />
                </Col>
                {/* end overlay card section */}

                {/* start widgets card section */}
                <Col md={6} lg={4}>
                    <Card title="Card with switch">
                        <CardBody>
                            <p style={{ color: "var(--hedging-text-color)" }}>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card
                        title="Card with switch"
                        badgeLabel="Success"
                        badgeBg="success"
                    >
                        <CardBody>
                            <p style={{ color: "var(--hedging-text-color)" }}>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card
                        title="Card with switch"
                        badgeLabel="49"
                        badgeBg="danger"
                    >
                        <CardBody>
                            <p style={{ color: "var(--hedging-text-color)" }}>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card title="Card with switch" cardBorderColor="#0D6EFD">
                        <CardBody>
                            <p style={{ color: "var(--hedging-text-color)" }}>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card title="Card with switch" cardBorderColor="#6C757D">
                        <CardBody>
                            <p style={{ color: "var(--hedging-text-color)" }}>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card title="Card with switch" cardBorderColor="#198754">
                        <CardBody>
                            <p style={{ color: "var(--hedging-text-color)" }}>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card isHeader={false}>
                        <CardBody
                            style={{
                                backgroundColor: "#DC3545",
                            }}
                        >
                            <p className="text-light">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                        <CardFooter
                            className="rounded-0"
                            style={{
                                backgroundColor: "#DC3545",
                            }}
                        >
                            <p className="text-light">
                                - Someone famous in Source Title
                            </p>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card isHeader={false}>
                        <CardBody
                            style={{
                                backgroundColor: "#FFC107",
                            }}
                        >
                            <p className="text-light">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                        <CardFooter
                            className="rounded-0"
                            style={{
                                backgroundColor: "#FFC107",
                            }}
                        >
                            <p className="text-light">
                                - Someone famous in Source Title
                            </p>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card isHeader={false}>
                        <CardBody
                            style={{
                                backgroundColor: "#0D6EFD",
                            }}
                        >
                            <p className="text-light">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                        <CardFooter
                            className="rounded-0"
                            style={{
                                backgroundColor: "#0D6EFD",
                            }}
                        >
                            <p className="text-light">
                                - Someone famous in Source Title
                            </p>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card
                        title="Card White Header Bg"
                        titleBg="#6C757D"
                        cardHeaderBorderColor="#6C757D"
                        titleColor="#fff"
                    >
                        <CardBody style={{ backgroundColor: "#0D6EFD" }}>
                            <p className="text-light">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card
                        title="Card White Header Bg"
                        titleBg="#212529"
                        cardHeaderBorderColor="#212529"
                        titleColor="#fff"
                    >
                        <CardBody style={{ backgroundColor: "#DC3545" }}>
                            <p className="text-light">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card
                        title="Card White Header Bg"
                        titleBg="#198754"
                        cardHeaderBorderColor="#198754"
                        titleColor="#fff"
                    >
                        <CardBody style={{ backgroundColor: "#FFC107" }}>
                            <p className="text-light">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card isHeader={false}>
                        <img src={placeholder} alt="" />
                        <CardBody>
                            <CardTitle
                                style={{ color: "var(--hedging-text-color)" }}
                            >
                                Card Image Title
                            </CardTitle>
                            <CardText
                                style={{ color: "var(--hedging-text-color)" }}
                            >
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card isHeader={false}>
                        <img src={placeholder} alt="" />
                        <CardBody>
                            <CardTitle
                                style={{ color: "var(--hedging-text-color)" }}
                            >
                                Card Image Title
                            </CardTitle>
                            <CardText
                                style={{ color: "var(--hedging-text-color)" }}
                            >
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card isHeader={false}>
                        <img src={placeholder} alt="" />
                        <CardBody>
                            <CardTitle
                                style={{ color: "var(--hedging-text-color)" }}
                            >
                                Card Image Title
                            </CardTitle>
                            <CardText
                                style={{ color: "var(--hedging-text-color)" }}
                            >
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                {/* end widgets card section */}
            </Row>
        </Fragment>
    );
};

export default Cards;

