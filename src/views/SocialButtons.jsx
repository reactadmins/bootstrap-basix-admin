import { Fragment } from "react";
import CardContent from "../components/Card/CardContent";
import { Col, Row } from "react-bootstrap";
import SocialButtonsStyle from "../assets/scss/SocialButtons.module.scss";

const SocialButtons = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                {/* start social button rounded section */}
                <Col md={6}>
                    <CardContent
                        title="Social Buttons"
                        icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                        bodyBg="#ddd"
                        CardBody={
                            <div
                                className={`d-flex justify-content-center gap-3 ${SocialButtonsStyle.rounded_button}`}
                            >
                                <a
                                    href="#"
                                    className={`${SocialButtonsStyle.social_rounded_button} ${SocialButtonsStyle.mail}`}
                                >
                                    <i className="fa fa-envelope"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`${SocialButtonsStyle.social_rounded_button} ${SocialButtonsStyle.facebook}`}
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`${SocialButtonsStyle.social_rounded_button} ${SocialButtonsStyle.linkedin}`}
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`${SocialButtonsStyle.social_rounded_button} ${SocialButtonsStyle.github}`}
                                >
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`${SocialButtonsStyle.social_rounded_button} ${SocialButtonsStyle.codepen}`}
                                >
                                    <i className="fa-brands fa-codepen"></i>
                                </a>
                            </div>
                        }
                    />
                </Col>
                {/* end social button rounded section */}

                {/* start social button social section */}
                <Col md={6}>
                    <CardContent
                        title="Social Buttons"
                        icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                        bodyBg="#ddd"
                        CardBody={
                            <div className="py-2">
                                <ul
                                    className={`d-flex justify-content-center gap-3 ${SocialButtonsStyle.social_square_button}`}
                                >
                                    <li
                                        className={
                                            SocialButtonsStyle.social_button
                                        }
                                    >
                                        <a
                                            href="#"
                                            className="text-decoration-none"
                                        >
                                            <i className="fa-brands fa-facebook-f fs-4"></i>
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            SocialButtonsStyle.social_button
                                        }
                                    >
                                        <a
                                            href="#"
                                            className="text-decoration-none"
                                        >
                                            <i className="fa-brands fa-twitter fs-4 "></i>
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            SocialButtonsStyle.social_button
                                        }
                                    >
                                        <a
                                            href="#"
                                            className="text-decoration-none"
                                        >
                                            <i className="fa-brands fa-instagram fs-4 "></i>
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            SocialButtonsStyle.social_button
                                        }
                                    >
                                        <a
                                            href="#"
                                            className="text-decoration-none"
                                        >
                                            <i className="fa-brands fa-vimeo-v fs-4 "></i>
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            SocialButtonsStyle.social_button
                                        }
                                    >
                                        <a
                                            href="#"
                                            className="text-decoration-none"
                                        >
                                            <i className="fa-brands fa-behance fs-4 "></i>
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            SocialButtonsStyle.social_button
                                        }
                                    >
                                        <a
                                            href="#"
                                            className="text-decoration-none"
                                        >
                                            <i className="fa-brands fa-dribbble fs-4"></i>
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            SocialButtonsStyle.social_button
                                        }
                                    >
                                        <a
                                            href="#"
                                            className="text-decoration-none"
                                        >
                                            <i className="fa-brands fa-github fs-4 "></i>
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            SocialButtonsStyle.social_button
                                        }
                                    >
                                        <a
                                            href="#"
                                            className="text-decoration-none"
                                        >
                                            <i className="fa-brands fa-pied-piper fs-4"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        }
                    />
                </Col>
                {/* end social button social section */}

                {/* start aeneas effect button section */}
                <Col md={6}>
                    <CardContent
                        title="Aeneas Effect"
                        icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                        bodyBg="#ddd"
                        CardBody={
                            <div
                                className={`d-flex justify-content-center gap-3 py-2 ${SocialButtonsStyle.aeneas_effect_button}`}
                            >
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.aeneas} ${SocialButtonsStyle.facebook}`}
                                >
                                    <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.aeneas} ${SocialButtonsStyle.twitter}`}
                                >
                                    <i className="fa-brands fa-twitter fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.aeneas} ${SocialButtonsStyle.google}`}
                                >
                                    <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.aeneas} ${SocialButtonsStyle.dribbble}`}
                                >
                                    <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.aeneas} ${SocialButtonsStyle.vimeo}`}
                                >
                                    <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.aeneas} ${SocialButtonsStyle.pinterest}`}
                                >
                                    <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.aeneas} ${SocialButtonsStyle.instagram}`}
                                >
                                    <i className="fa-brands fa-instagram fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.aeneas} ${SocialButtonsStyle.linkedin}`}
                                >
                                    <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                                </a>
                            </div>
                        }
                    />
                </Col>
                {/* end aeneas effect button section */}

                {/* start jaques effect button section */}
                <Col md={6}>
                    <CardContent
                        title="Jaques Effect"
                        icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                        bodyBg="#ddd"
                        CardBody={
                            <div
                                className={`d-flex justify-content-center gap-3 w-100 py-2 ${SocialButtonsStyle.jaques_effect_buttons}`}
                            >
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.jaques} ${SocialButtonsStyle.facebook}`}
                                >
                                    <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.jaques} ${SocialButtonsStyle.twitter}`}
                                >
                                    <i className="fa-brands fa-twitter fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.jaques} ${SocialButtonsStyle.google}`}
                                >
                                    <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.jaques} ${SocialButtonsStyle.dribbble}`}
                                >
                                    <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.jaques} ${SocialButtonsStyle.vimeo}`}
                                >
                                    <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.jaques} ${SocialButtonsStyle.pinterest}`}
                                >
                                    <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.jaques} ${SocialButtonsStyle.instagram}`}
                                >
                                    <i className="fa-brands fa-instagram fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.jaques} ${SocialButtonsStyle.linkedin}`}
                                >
                                    <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                                </a>
                            </div>
                        }
                    />
                </Col>
                {/* end jaques effect button section */}

                {/* start egeon effect button section */}
                <Col md={6}>
                    <CardContent
                        title="Egeon Effect"
                        icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                        bodyBg="#ddd"
                        CardBody={
                            <div
                                className={`d-flex justify-content-center gap-3 w-100 py-2  ${SocialButtonsStyle.egeon_effect_buttons}`}
                            >
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.egeon} ${SocialButtonsStyle.facebook}`}
                                >
                                    <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.egeon} ${SocialButtonsStyle.twitter}`}
                                >
                                    <i className="fa-brands fa-twitter fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.egeon} ${SocialButtonsStyle.google}`}
                                >
                                    <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.egeon} ${SocialButtonsStyle.dribbble}`}
                                >
                                    <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.egeon} ${SocialButtonsStyle.vimeo}`}
                                >
                                    <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.egeon} ${SocialButtonsStyle.pinterest}`}
                                >
                                    <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.egeon} ${SocialButtonsStyle.instagram}`}
                                >
                                    <i className="fa-brands fa-instagram fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.egeon} ${SocialButtonsStyle.linkedin}`}
                                >
                                    <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                                </a>
                            </div>
                        }
                    />
                </Col>
                {/* end egeon effect button section */}

                {/* start claudio effect button section */}
                <Col md={6}>
                    <CardContent
                        title="Claudio Effect"
                        icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                        bodyBg="#ddd"
                        CardBody={
                            <div
                                className={`d-flex justify-content-center gap-3 py-2  ${SocialButtonsStyle.claudio_effect_buttons}`}
                            >
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.claudio} ${SocialButtonsStyle.facebook}`}
                                >
                                    <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.claudio} ${SocialButtonsStyle.twitter}`}
                                >
                                    <i className="fa-brands fa-twitter fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.claudio} ${SocialButtonsStyle.google}`}
                                >
                                    <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.claudio} ${SocialButtonsStyle.dribbble}`}
                                >
                                    <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.claudio} ${SocialButtonsStyle.vimeo}`}
                                >
                                    <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.claudio} ${SocialButtonsStyle.pinterest}`}
                                >
                                    <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.claudio} ${SocialButtonsStyle.instagram}`}
                                >
                                    <i className="fa-brands fa-instagram fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.claudio} ${SocialButtonsStyle.linkedin}`}
                                >
                                    <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                                </a>
                            </div>
                        }
                    />
                </Col>
                {/* end claudio effect button section */}

                {/* start laertes effect button section */}
                <Col md={6}>
                    <CardContent
                        title="Laertes Effect"
                        icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                        bodyBg="#ddd"
                        CardBody={
                            <div
                                className={`d-flex justify-content-center gap-3 py-2  ${SocialButtonsStyle.laertes_effect_buttons}`}
                            >
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.laertes} ${SocialButtonsStyle.facebook}`}
                                >
                                    <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.laertes} ${SocialButtonsStyle.twitter}`}
                                >
                                    <i className="fa-brands fa-twitter fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.laertes} ${SocialButtonsStyle.google}`}
                                >
                                    <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.laertes} ${SocialButtonsStyle.dribbble}`}
                                >
                                    <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.laertes} ${SocialButtonsStyle.vimeo}`}
                                >
                                    <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.laertes} ${SocialButtonsStyle.pinterest}`}
                                >
                                    <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.laertes} ${SocialButtonsStyle.instagram}`}
                                >
                                    <i className="fa-brands fa-instagram fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.laertes} ${SocialButtonsStyle.linkedin}`}
                                >
                                    <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                                </a>
                            </div>
                        }
                    />
                </Col>
                {/* end laertes effect button section */}

                {/* start jinae  effect button section */}
                <Col md={6}>
                    <CardContent
                        title="Jinae Effect"
                        icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                        bodyBg="#ddd"
                        CardBody={
                            <div
                                className={`d-flex justify-content-center gap-3 py-2 ${SocialButtonsStyle.jinae_effect_buttons}`}
                            >
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.jinae} ${SocialButtonsStyle.facebook}`}
                                >
                                    <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.jinae} ${SocialButtonsStyle.twitter}`}
                                >
                                    <i className="fa-brands fa-twitter fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.jinae} ${SocialButtonsStyle.google}`}
                                >
                                    <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.jinae} ${SocialButtonsStyle.dribbble}`}
                                >
                                    <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.jinae} ${SocialButtonsStyle.vimeo}`}
                                >
                                    <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.jinae} ${SocialButtonsStyle.pinterest}`}
                                >
                                    <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.jinae} ${SocialButtonsStyle.instagram}`}
                                >
                                    <i className="fa-brands fa-instagram fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${SocialButtonsStyle.jinae} ${SocialButtonsStyle.linkedin}`}
                                >
                                    <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                                </a>
                            </div>
                        }
                    />
                </Col>
                {/* end jinae  effect button section */}
            </Row>
        </Fragment>
    );
};

export default SocialButtons;

