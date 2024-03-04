import Card from "@/components/Card/Card";
import { CardBody, Col, Row } from "react-bootstrap";
import SocialButton from "../components/SocialButton/SocialButton";

const SocialButtons = () => {
    return (
        <Row className="gy-4 gx-4">
            {/* start SocialButton button rounded section */}
            <Col md={6}>
                <Card
                    title="SocialButton Buttons"
                    icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                >
                    <CardBody>
                        <div className="d-flex justify-content-center gap-3 py-2">
                            <SocialButton
                                icon="fa fa-envelope"
                                effect="bolb"
                                color="#0072c6"
                                bgColor="#ddd"
                                hoverBgColor="#0072c6"
                                type="rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-facebook-f"
                                effect="bolb"
                                color="#3b5998"
                                bgColor="#ddd"
                                hoverBgColor="#3b5998"
                                type="rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-linkedin-in"
                                effect="bolb"
                                color="#0077b5"
                                bgColor="#ddd"
                                hoverBgColor="#0077b5"
                                type="rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-github"
                                effect="bolb"
                                color="#6e5494"
                                bgColor="#ddd"
                                hoverBgColor="#6e5494"
                                type="rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-codepen"
                                effect="bolb"
                                color="#212121"
                                bgColor="#ddd"
                                hoverBgColor="#212121"
                                type="rounded"
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            {/* end SocialButton button rounded section */}

            {/* start SocialButton button SocialButton section */}
            <Col md={6}>
                <Card
                    title="SocialButton Buttons"
                    icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                >
                    <CardBody>
                        <div className="d-flex justify-content-center gap-3 py-2">
                            <SocialButton
                                icon="fa-brands fa-facebook-f"
                                color="#837e78"
                                hoverColor="#212121"
                                bgColor="#fff"
                                transition="200"
                                type="square"
                                border="1px solid #837e78"
                                hoverBorder="1px solid #212121"
                            />
                            <SocialButton
                                icon="fa-brands fa-twitter"
                                color="#837e78"
                                hoverColor="#212121"
                                bgColor="#fff"
                                transition="200"
                                type="square"
                                border="1px solid #837e78"
                                hoverBorder="1px solid #212121"
                            />
                            <SocialButton
                                icon="fa-brands fa-instagram"
                                color="#837e78"
                                hoverColor="#212121"
                                bgColor="#fff"
                                transition="200"
                                type="square"
                                border="1px solid #837e78"
                                hoverBorder="1px solid #212121"
                            />
                            <SocialButton
                                icon="fa-brands fa-vimeo-v"
                                color="#837e78"
                                hoverColor="#212121"
                                bgColor="#fff"
                                transition="200"
                                type="square"
                                border="1px solid #837e78"
                                hoverBorder="1px solid #212121"
                            />
                            <SocialButton
                                icon="fa-brands fa-dribbble"
                                color="#837e78"
                                hoverColor="#212121"
                                bgColor="#fff"
                                transition="200"
                                type="square"
                                border="1px solid #837e78"
                                hoverBorder="1px solid #212121"
                            />
                            <SocialButton
                                icon="fa-brands fa-github"
                                color="#837e78"
                                hoverColor="#212121"
                                bgColor="#fff"
                                transition="200"
                                type="square"
                                border="1px solid #837e78"
                                hoverBorder="1px solid #212121"
                            />
                            <SocialButton
                                icon="fa-brands fa-pied-piper"
                                color="#837e78"
                                hoverColor="#212121"
                                bgColor="#fff"
                                transition="200"
                                type="square"
                                border="1px solid #837e78"
                                hoverBorder="1px solid #212121"
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            {/* end SocialButton button SocialButton section */}

            {/* start aeneas effect button section */}
            <Col md={6}>
                <Card
                    title="Aeneas Effect"
                    icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                >
                    <CardBody>
                        <div className="d-flex justify-content-center gap-3 py-2">
                            <SocialButton
                                icon="fa-brands fa-facebook-f"
                                color="#fff"
                                effect="aeneas"
                                bgColor="#3b5998"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-twitter"
                                color="#fff"
                                effect="aeneas"
                                bgColor="#00aced"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-google-plus-g"
                                color="#fff"
                                effect="aeneas"
                                bgColor="#dd4b39"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-dribbble"
                                color="#fff"
                                effect="aeneas"
                                bgColor="#ea4c89"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-vimeo-v"
                                color="#fff"
                                effect="aeneas"
                                bgColor="#1ab7ea"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-pinterest-p"
                                color="#fff"
                                effect="aeneas"
                                bgColor="#cb2027"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-instagram"
                                color="#fff"
                                effect="aeneas"
                                bgColor="#bc2a8d"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-linkedin-in"
                                color="#fff"
                                effect="aeneas"
                                bgColor="#0077b5"
                                type="square-rounded"
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            {/* end aeneas effect button section */}

            {/* start jaques effect button section */}
            <Col md={6}>
                <Card
                    title="Jaques Effect"
                    icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                >
                    <CardBody>
                        <div
                            className="d-flex justify-content-center gap-3 w-100 py-2"
                        >
                            <SocialButton
                                icon="fa-brands fa-facebook-f"
                                color="#fff"
                                effect="jaques"
                                bgColor="#3b5998"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-twitter"
                                color="#fff"
                                effect="jaques"
                                bgColor="#00aced"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-google-plus-g"
                                color="#fff"
                                effect="jaques"
                                bgColor="#dd4b39"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-dribbble"
                                color="#fff"
                                effect="jaques"
                                bgColor="#ea4c89"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-vimeo-v"
                                color="#fff"
                                effect="jaques"
                                bgColor="#1ab7ea"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-pinterest-p"
                                color="#fff"
                                effect="jaques"
                                bgColor="#cb2027"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-instagram"
                                color="#fff"
                                effect="jaques"
                                bgColor="#bc2a8d"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-linkedin-in"
                                color="#fff"
                                effect="jaques"
                                bgColor="#0077b5"
                                type="square-rounded"
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            {/* end jaques effect button section */}

            {/* start egeon effect button section */}
            <Col md={6}>
                <Card
                    title="Egeon Effect"
                    icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                >
                    <CardBody>
                        <div
                            className="d-flex justify-content-center gap-3 w-100 py-2"
                        >
                            <SocialButton
                                icon="fa-brands fa-facebook-f"
                                color="#fff"
                                effect="egeon"
                                bgColor="#3b5998"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-twitter"
                                color="#fff"
                                effect="egeon"
                                bgColor="#00aced"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-google-plus-g"
                                color="#fff"
                                effect="egeon"
                                bgColor="#dd4b39"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-dribbble"
                                color="#fff"
                                effect="egeon"
                                bgColor="#ea4c89"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-vimeo-v"
                                color="#fff"
                                effect="egeon"
                                bgColor="#1ab7ea"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-pinterest-p"
                                color="#fff"
                                effect="egeon"
                                bgColor="#cb2027"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-instagram"
                                color="#fff"
                                effect="egeon"
                                bgColor="#bc2a8d"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-linkedin-in"
                                color="#fff"
                                effect="egeon"
                                bgColor="#0077b5"
                                type="square-rounded"
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            {/* end egeon effect button section */}

            {/* start claudio effect button section */}
            <Col md={6}>
                <Card
                    title="Claudio Effect"
                    icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                >
                    <CardBody>
                        <div className="d-flex justify-content-center gap-3 py-2">
                            <SocialButton
                                icon="fa-brands fa-facebook-f"
                                color="#fff"
                                effect="claudio"
                                bgColor="#3b5998"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-twitter"
                                color="#fff"
                                effect="claudio"
                                bgColor="#00aced"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-google-plus-g"
                                color="#fff"
                                effect="claudio"
                                bgColor="#dd4b39"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-dribbble"
                                color="#fff"
                                effect="claudio"
                                bgColor="#ea4c89"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-vimeo-v"
                                color="#fff"
                                effect="claudio"
                                bgColor="#1ab7ea"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-pinterest-p"
                                color="#fff"
                                effect="claudio"
                                bgColor="#cb2027"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-instagram"
                                color="#fff"
                                effect="claudio"
                                bgColor="#bc2a8d"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-linkedin-in"
                                color="#fff"
                                effect="claudio"
                                bgColor="#0077b5"
                                type="square-rounded"
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            {/* end claudio effect button section */}

            {/* start laertes effect button section */}
            <Col md={6}>
                <Card
                    title="Laertes Effect"
                    icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                >
                    <CardBody>
                        <div className="d-flex justify-content-center gap-3 py-2">
                            <SocialButton
                                icon="fa-brands fa-facebook-f"
                                color="#fff"
                                effect="laertes"
                                bgColor="#3b5998"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-twitter"
                                color="#fff"
                                effect="laertes"
                                bgColor="#00aced"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-google-plus-g"
                                color="#fff"
                                effect="laertes"
                                bgColor="#dd4b39"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-dribbble"
                                color="#fff"
                                effect="laertes"
                                bgColor="#ea4c89"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-vimeo-v"
                                color="#fff"
                                effect="laertes"
                                bgColor="#1ab7ea"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-pinterest-p"
                                color="#fff"
                                effect="laertes"
                                bgColor="#cb2027"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-instagram"
                                color="#fff"
                                effect="laertes"
                                bgColor="#bc2a8d"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-linkedin-in"
                                color="#fff"
                                effect="laertes"
                                bgColor="#0077b5"
                                type="square-rounded"
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            {/* end laertes effect button section */}

            {/* start jinae  effect button section */}
            <Col md={6}>
                <Card
                    title="Jinae Effect"
                    icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                >
                    <CardBody>
                        <div className="d-flex justify-content-center gap-3 py-2">
                            <SocialButton
                                icon="fa-brands fa-facebook-f"
                                color="#fff"
                                effect="jinae"
                                bgColor="#3b5998"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-twitter"
                                color="#fff"
                                effect="jinae"
                                bgColor="#00aced"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-google-plus-g"
                                color="#fff"
                                effect="jinae"
                                bgColor="#dd4b39"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-dribbble"
                                color="#fff"
                                effect="jinae"
                                bgColor="#ea4c89"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-vimeo-v"
                                color="#fff"
                                effect="jinae"
                                bgColor="#1ab7ea"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-pinterest-p"
                                color="#fff"
                                effect="jinae"
                                bgColor="#cb2027"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-instagram"
                                color="#fff"
                                effect="jinae"
                                bgColor="#bc2a8d"
                                type="square-rounded"
                            />
                            <SocialButton
                                icon="fa-brands fa-linkedin-in"
                                color="#fff"
                                effect="jinae"
                                bgColor="#0077b5"
                                type="square-rounded"
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            {/* end jinae  effect button section */}
        </Row>
    );
};

export default SocialButtons;

