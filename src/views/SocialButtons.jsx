import { Fragment } from "react";
import CardContent from "../components/Card/CardContent";
import { Col, Row } from "react-bootstrap";
import socialButtonsStyle from "../assets/scss/SocialButtons.module.scss";

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
                                className={`d-flex justify-content-center gap-3 ${socialButtonsStyle.rounded_button}`}
                            >
                                <a
                                    href="#"
                                    className={`${socialButtonsStyle.social_rounded_button} ${socialButtonsStyle.mail}`}
                                >
                                    <i className="fa fa-envelope"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`${socialButtonsStyle.social_rounded_button} ${socialButtonsStyle.facebook}`}
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`${socialButtonsStyle.social_rounded_button} ${socialButtonsStyle.linkedin}`}
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`${socialButtonsStyle.social_rounded_button} ${socialButtonsStyle.github}`}
                                >
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`${socialButtonsStyle.social_rounded_button} ${socialButtonsStyle.codepen}`}
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
                                    className={`d-flex justify-content-center gap-3 ${socialButtonsStyle.social_square_button}`}
                                >
                                    <li
                                        className={
                                            socialButtonsStyle.social_button
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
                                            socialButtonsStyle.social_button
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
                                            socialButtonsStyle.social_button
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
                                            socialButtonsStyle.social_button
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
                                            socialButtonsStyle.social_button
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
                                            socialButtonsStyle.social_button
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
                                            socialButtonsStyle.social_button
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
                                            socialButtonsStyle.social_button
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
                                className={`d-flex justify-content-center gap-3 py-2 ${socialButtonsStyle.aeneas_effect_button}`}
                            >
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.aeneas} ${socialButtonsStyle.facebook}`}
                                >
                                    <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.aeneas} ${socialButtonsStyle.twitter}`}
                                >
                                    <i className="fa-brands fa-twitter fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.aeneas} ${socialButtonsStyle.google}`}
                                >
                                    <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.aeneas} ${socialButtonsStyle.dribbble}`}
                                >
                                    <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.aeneas} ${socialButtonsStyle.vimeo}`}
                                >
                                    <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.aeneas} ${socialButtonsStyle.pinterest}`}
                                >
                                    <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.aeneas} ${socialButtonsStyle.instagram}`}
                                >
                                    <i className="fa-brands fa-instagram fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.aeneas} ${socialButtonsStyle.linkedin}`}
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
                                className={`d-flex justify-content-center gap-3 w-100 py-2 ${socialButtonsStyle.jaques_effect_buttons}`}
                            >
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.jaques} ${socialButtonsStyle.facebook}`}
                                >
                                    <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.jaques} ${socialButtonsStyle.twitter}`}
                                >
                                    <i className="fa-brands fa-twitter fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.jaques} ${socialButtonsStyle.google}`}
                                >
                                    <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.jaques} ${socialButtonsStyle.dribbble}`}
                                >
                                    <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.jaques} ${socialButtonsStyle.vimeo}`}
                                >
                                    <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.jaques} ${socialButtonsStyle.pinterest}`}
                                >
                                    <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.jaques} ${socialButtonsStyle.instagram}`}
                                >
                                    <i className="fa-brands fa-instagram fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.jaques} ${socialButtonsStyle.linkedin}`}
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
                                className={`d-flex justify-content-center gap-3 w-100 py-2  ${socialButtonsStyle.egeon_effect_buttons}`}
                            >
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.egeon} ${socialButtonsStyle.facebook}`}
                                >
                                    <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.egeon} ${socialButtonsStyle.twitter}`}
                                >
                                    <i className="fa-brands fa-twitter fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.egeon} ${socialButtonsStyle.google}`}
                                >
                                    <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.egeon} ${socialButtonsStyle.dribbble}`}
                                >
                                    <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.egeon} ${socialButtonsStyle.vimeo}`}
                                >
                                    <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.egeon} ${socialButtonsStyle.pinterest}`}
                                >
                                    <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.egeon} ${socialButtonsStyle.instagram}`}
                                >
                                    <i className="fa-brands fa-instagram fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.egeon} ${socialButtonsStyle.linkedin}`}
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
                                className={`d-flex justify-content-center gap-3 py-2  ${socialButtonsStyle.claudio_effect_buttons}`}
                            >
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.claudio} ${socialButtonsStyle.facebook}`}
                                >
                                    <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.claudio} ${socialButtonsStyle.twitter}`}
                                >
                                    <i className="fa-brands fa-twitter fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.claudio} ${socialButtonsStyle.google}`}
                                >
                                    <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.claudio} ${socialButtonsStyle.dribbble}`}
                                >
                                    <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.claudio} ${socialButtonsStyle.vimeo}`}
                                >
                                    <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.claudio} ${socialButtonsStyle.pinterest}`}
                                >
                                    <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.claudio} ${socialButtonsStyle.instagram}`}
                                >
                                    <i className="fa-brands fa-instagram fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.claudio} ${socialButtonsStyle.linkedin}`}
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
                                className={`d-flex justify-content-center gap-3 py-2  ${socialButtonsStyle.laertes_effect_buttons}`}
                            >
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.laertes} ${socialButtonsStyle.facebook}`}
                                >
                                    <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.laertes} ${socialButtonsStyle.twitter}`}
                                >
                                    <i className="fa-brands fa-twitter fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.laertes} ${socialButtonsStyle.google}`}
                                >
                                    <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.laertes} ${socialButtonsStyle.dribbble}`}
                                >
                                    <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.laertes} ${socialButtonsStyle.vimeo}`}
                                >
                                    <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.laertes} ${socialButtonsStyle.pinterest}`}
                                >
                                    <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.laertes} ${socialButtonsStyle.instagram}`}
                                >
                                    <i className="fa-brands fa-instagram fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.laertes} ${socialButtonsStyle.linkedin}`}
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
                                className={`d-flex justify-content-center gap-3 py-2 ${socialButtonsStyle.jinae_effect_buttons}`}
                            >
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.jinae} ${socialButtonsStyle.facebook}`}
                                >
                                    <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.jinae} ${socialButtonsStyle.twitter}`}
                                >
                                    <i className="fa-brands fa-twitter fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.jinae} ${socialButtonsStyle.google}`}
                                >
                                    <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.jinae} ${socialButtonsStyle.dribbble}`}
                                >
                                    <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.jinae} ${socialButtonsStyle.vimeo}`}
                                >
                                    <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.jinae} ${socialButtonsStyle.pinterest}`}
                                >
                                    <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.jinae} ${socialButtonsStyle.instagram}`}
                                >
                                    <i className="fa-brands fa-instagram fs-4 text-light"></i>
                                </a>
                                <a
                                    href="#"
                                    className={`text-decoration-none ${socialButtonsStyle.jinae} ${socialButtonsStyle.linkedin}`}
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

