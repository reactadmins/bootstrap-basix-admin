import { Fragment } from "react";
import { CardBody, CardFooter, Col, Row } from "react-bootstrap";
import Card from "../components/Card/Card";

const BasicForm = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                {/* start credit card  form section */}
                <Col md={12} lg={6}>
                    <Card title="Credit Card form">
                        <CardBody>
                            <div className="card-title mt-4">
                                <h3
                                    className="text-center"
                                    style={{
                                        color: "var(--hedging-text-color)",
                                    }}
                                >
                                    Pay Invoice
                                </h3>
                            </div>
                            <hr
                                style={{
                                    backgroundColor: "var(--border-color)",
                                    opacity: "1",
                                }}
                            />
                            <form action="#">
                                <div className="form-group d-flex justify-content-center gap-2 p-3">
                                    <a
                                        href="#"
                                        type="button"
                                        className="text-decoration-none"
                                    >
                                        <i
                                            className="fa-brands fa-cc-visa fs-3"
                                            style={{
                                                color: "var(--content-text-color)",
                                            }}
                                        ></i>
                                    </a>
                                    <a
                                        href="#"
                                        type="button"
                                        className="text-decoration-none"
                                    >
                                        <i
                                            className="fa-brands fa-cc-mastercard fs-3"
                                            style={{
                                                color: "var(--content-text-color)",
                                            }}
                                        ></i>
                                    </a>
                                    <a
                                        href="#"
                                        type="button"
                                        className="text-decoration-none"
                                    >
                                        <i
                                            className="fa-brands fa-cc-amex fs-3"
                                            style={{
                                                color: "var(--content-text-color)",
                                            }}
                                        ></i>
                                    </a>
                                    <a
                                        href="#"
                                        type="button"
                                        className="text-decoration-none"
                                    >
                                        <i
                                            className="fa-brands fa-cc-discover fs-3"
                                            style={{
                                                color: "var(--content-text-color)",
                                            }}
                                        ></i>
                                    </a>
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="payment"
                                        className="form-control-label mb-1"
                                    >
                                        Payment amount
                                    </label>
                                    <input
                                        id="payment"
                                        type="number"
                                        defaultValue="1000.0"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label
                                        htmlFor="name"
                                        className="form-control-label mb-1"
                                    >
                                        Name on card
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Card name "
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label
                                        htmlFor="cardNumber"
                                        className="form-control-label mb-1"
                                    >
                                        Card number
                                    </label>
                                    <input
                                        id="cardNumber"
                                        type="text"
                                        placeholder="Card number"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group d-flex gap-2  justify-content-between mt-3">
                                    <div>
                                        <label
                                            htmlFor="day"
                                            className="form-control-label mb-1"
                                        >
                                            Expiration
                                        </label>
                                        <input
                                            id="day"
                                            type="text"
                                            placeholder="MM/YY"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group ">
                                        <label
                                            htmlFor="security"
                                            className="form-control-label mb-1"
                                        >
                                            Security code
                                        </label>
                                        <div className="d-flex">
                                            <input
                                                id="security"
                                                type="text"
                                                className="form-control rounded-start rounded-0"
                                                placeholder="Security code"
                                            />
                                            <span
                                                className="input-group-text fw-bold rounded-0 rounded-end"
                                                style={{
                                                    backgroundColor:
                                                        "var(--bg-content)",
                                                    borderColor:
                                                        "var(--border-color)",
                                                    color: "var(  --hedging-text-color)",
                                                }}
                                            >
                                                <i className="fa fa-question-circle"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 mb-3">
                                    <button
                                        type="submit"
                                        className="btn btn-lg btn-block btn-info w-100 text-white"
                                    >
                                        <i className="fa fa-lock fa-md"></i>
                                        <span className="fs-5 mx-1">
                                            Pay $100.00
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                </Col>
                {/* end credit card form section */}

                {/* start company form section */}
                <Col md={12} lg={6}>
                    <Card title="Billing Form">
                        <CardBody>
                            <form action="#">
                                <div className="form-group">
                                    <label
                                        htmlFor="company"
                                        className="form-control-label mb-1"
                                    >
                                        Company
                                    </label>
                                    <input
                                        id="company"
                                        type="text"
                                        placeholder="Enter your company name"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label
                                        htmlFor="vat"
                                        className="form-control-label mb-1"
                                    >
                                        VAT
                                    </label>
                                    <input
                                        id="vat"
                                        type="text"
                                        placeholder="DE1234567890"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label
                                        htmlFor="street"
                                        className="form-control-label mb-1"
                                    >
                                        Street
                                    </label>
                                    <input
                                        id="street"
                                        type="text"
                                        placeholder="Enter street name"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label
                                        htmlFor="city"
                                        className="form-control-label mb-1"
                                    >
                                        City
                                    </label>
                                    <input
                                        id="city"
                                        type="text"
                                        placeholder="Enter your city"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label
                                        htmlFor="postalCode"
                                        className="form-control-label mb-1"
                                    >
                                        Postal Code
                                    </label>
                                    <input
                                        id="postalCode"
                                        type="text"
                                        className="form-control"
                                        placeholder="Postal Code"
                                        aria-label="Username"
                                    />
                                </div>

                                <div className="form-group mt-3 mb-3">
                                    <label
                                        htmlFor="country"
                                        className="form-control-label mb-1"
                                    >
                                        Company
                                    </label>
                                    <input
                                        id="country"
                                        type="text"
                                        placeholder="Enter your company name"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mt-3 mb-3">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        submit
                                    </button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                </Col>
                {/* end company form section */}

                {/* start basic form elements section */}
                <Col md={12} lg={6}>
                    <Card title="Basic Element Form">
                        <CardBody>
                            <div className="overflow-hidden">
                                <form>
                                    <div className="form-group mt-3">
                                        <Row>
                                            <Col md={3}>
                                                <label className="form-control-label mb-1">
                                                    Static
                                                </label>
                                            </Col>
                                            <Col md={9}>
                                                <p className="form-control-static text-secondary">
                                                    Username
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-group mt-3">
                                        <Row>
                                            <Col md={3}>
                                                <label
                                                    htmlFor="text"
                                                    className="form-control-label mb-1"
                                                >
                                                    Text Input
                                                </label>
                                            </Col>
                                            <Col md={9}>
                                                <input
                                                    id="text"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Text"
                                                    required
                                                />
                                                <small>
                                                    This is a help text
                                                </small>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-group mt-3">
                                        <Row>
                                            <Col md={3}>
                                                <label
                                                    htmlFor="email"
                                                    className="form-control-label mb-1"
                                                >
                                                    Email Input
                                                </label>
                                            </Col>
                                            <Col md={9}>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter Email"
                                                    required
                                                />
                                                <small>
                                                    Please enter your email
                                                </small>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-group mt-3">
                                        <Row>
                                            <Col md={3}>
                                                <label
                                                    htmlFor="password"
                                                    className="form-control-label mb-1"
                                                >
                                                    Password
                                                </label>
                                            </Col>
                                            <Col md={9}>
                                                <input
                                                    id="password"
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    required
                                                />
                                                <small>
                                                    Please enter a complex
                                                    password
                                                </small>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-group mt-3">
                                        <Row>
                                            <Col md={3}>
                                                <label className="form-control-label mb-1">
                                                    Disabled Input
                                                </label>
                                            </Col>
                                            <Col md={9}>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Disabled"
                                                    disabled
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-group mt-3">
                                        <Row>
                                            <Col md={3}>
                                                <label
                                                    htmlFor="text-area"
                                                    className="form-control-label mb-1"
                                                >
                                                    Textarea
                                                </label>
                                            </Col>
                                            <Col md={9}>
                                                <textarea
                                                    name=""
                                                    id="text-area"
                                                    className="form-control"
                                                    cols="30"
                                                    rows="10"
                                                    placeholder="Content..."
                                                ></textarea>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-group mt-3">
                                        <Row>
                                            <Col md={3}>
                                                <label
                                                    htmlFor="select"
                                                    className="form-control-label mb-1"
                                                >
                                                    Select
                                                </label>
                                            </Col>
                                            <Col md={9}>
                                                <select
                                                    id="select"
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                >
                                                    <option>
                                                        Please select
                                                    </option>
                                                    <option defaultValue="1">
                                                        Option #1
                                                    </option>
                                                    <option defaultValue="2">
                                                        Option #2
                                                    </option>
                                                    <option defaultValue="3">
                                                        Option #3
                                                    </option>
                                                </select>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-group mt-3">
                                        <Row>
                                            <Col md={3}>
                                                <label
                                                    htmlFor="large"
                                                    className="form-control-label mb-1"
                                                >
                                                    Select Large
                                                </label>
                                            </Col>
                                            <Col md={9}>
                                                <select
                                                    id="large"
                                                    className="form-select form-select-lg"
                                                    aria-label=".form-select-lg example"
                                                >
                                                    <option>
                                                        Please select
                                                    </option>
                                                    <option defaultValue="1">
                                                        Option #1
                                                    </option>
                                                    <option defaultValue="2">
                                                        Option #2
                                                    </option>
                                                    <option defaultValue="3">
                                                        Option #3
                                                    </option>
                                                </select>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-group mt-3">
                                        <Row>
                                            <Col md={3}>
                                                <label
                                                    htmlFor="small"
                                                    className="form-control-label mb-1"
                                                >
                                                    Select Small
                                                </label>
                                            </Col>
                                            <Col md={9}>
                                                <select
                                                    id="small"
                                                    className="form-select form-select-sm"
                                                    aria-label=".form-select-sm example"
                                                >
                                                    <option>
                                                        Please select
                                                    </option>
                                                    <option defaultValue="1">
                                                        Option #1
                                                    </option>
                                                    <option defaultValue="2">
                                                        Option #2
                                                    </option>
                                                    <option defaultValue="3">
                                                        Option #3
                                                    </option>
                                                </select>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-group mt-3">
                                        <Row>
                                            <Col md={3}>
                                                <label className="form-control-label mb-1">
                                                    Disabled Select
                                                </label>
                                            </Col>
                                            <Col md={9}>
                                                <select
                                                    className="form-select"
                                                    aria-label="Disabled select example"
                                                    disabled
                                                >
                                                    <option>
                                                        Please select
                                                    </option>
                                                </select>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-group mt-3">
                                        <Row>
                                            <Col md={3}>
                                                <label
                                                    htmlFor="multiple"
                                                    className="form-control-label mb-1"
                                                >
                                                    Multiple select
                                                </label>
                                            </Col>
                                            <Col md={9}>
                                                <select
                                                    id="multiple"
                                                    className="form-select"
                                                    size="3"
                                                    aria-label="size 3 select example"
                                                >
                                                    <option defaultValue="1">
                                                        Option #1
                                                    </option>
                                                    <option defaultValue="2">
                                                        Option #2
                                                    </option>
                                                    <option defaultValue="3">
                                                        Option #3
                                                    </option>
                                                    <option defaultValue="4">
                                                        Option #4
                                                    </option>
                                                    <option defaultValue="5">
                                                        Option #5
                                                    </option>
                                                    <option defaultValue="6">
                                                        Option #6
                                                    </option>
                                                    <option defaultValue="7">
                                                        Option #7
                                                    </option>
                                                    <option defaultValue="8">
                                                        Option #8
                                                    </option>
                                                    <option defaultValue="9">
                                                        Option #9
                                                    </option>
                                                    <option defaultValue="10">
                                                        Option #10
                                                    </option>
                                                </select>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-group mt-3">
                                        <Row>
                                            <div className="col-md-3">
                                                <label className="form-control-label mb-1">
                                                    Radios
                                                </label>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault1"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault1"
                                                    >
                                                        Option 1
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault2"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        Option 2
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault3"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault3"
                                                    >
                                                        Option 3
                                                    </label>
                                                </div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="form-group mt-3">
                                        <Row>
                                            <Col md={3}>
                                                <label className="form-control-label mb-1">
                                                    Inline Radios
                                                </label>
                                            </Col>
                                            <Col md={9}>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="flexRadioInline1"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioInline1"
                                                    >
                                                        One
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="flexRadioInline2"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioInline2"
                                                    >
                                                        Tow
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="flexRadioInline3"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioInline3"
                                                    >
                                                        Three
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-group mt-3">
                                        <Row>
                                            <Col md={3}>
                                                <label className="form-control-label mb-1">
                                                    Checkboxes
                                                </label>
                                            </Col>
                                            <Col md={9}>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="flexCheckDefault1"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexCheckDefault1"
                                                    >
                                                        Option 1
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="flexCheckDefault2"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexCheckDefault2"
                                                    >
                                                        Option 2
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="flexCheckDefault3"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexCheckDefault3"
                                                    >
                                                        Option 3
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-group mt-3">
                                        <Row>
                                            <Col md={3}>
                                                <label className="form-control-label mb-1">
                                                    Inline Checkboxes
                                                </label>
                                            </Col>
                                            <Col md={9}>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="flexCheckDefaultInline1"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexCheckDefaultInline1"
                                                    >
                                                        One
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="flexCheckDefaultInline2"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexCheckDefaultInline2"
                                                    >
                                                        Tow
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="flexCheckDefaultInline3"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexCheckDefaultInline3"
                                                    >
                                                        Three
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-group mt-3">
                                        <Row>
                                            <Col md={3}>
                                                <label
                                                    className="d-block mb-1 form-control-label"
                                                    htmlFor="fileInput"
                                                >
                                                    File input
                                                </label>
                                            </Col>
                                            <Col md={9}>
                                                <div className="form-group">
                                                    <input
                                                        type="file"
                                                        className="form-control-file"
                                                        id="fileInput"
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-group mt-3 mb-3">
                                        <Row>
                                            <Col md={3}>
                                                <label
                                                    className="d-block mb-1 form-control-label"
                                                    htmlFor="multipleFleInput"
                                                >
                                                    Multiple File input
                                                </label>
                                            </Col>
                                            <Col md={9}>
                                                <div className="form-group">
                                                    <input
                                                        type="file"
                                                        className="form-control-file"
                                                        id="multipleFleInput"
                                                        multiple
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </form>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                {/* end basic form elements section */}

                <Col md={12} lg={6}>
                    <Row className="gy-4">
                        {/* start horizontal form section */}
                        <Col sm={12}>
                            <Card title="Horizontal Form">
                                <CardBody>
                                    <form>
                                        <div className="form-group mt-3 mb-3">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <label className="d-block mb-1 form-control-label">
                                                        Email
                                                    </label>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Enter Email...."
                                                            required
                                                        />
                                                        <small className="help-block form-text">
                                                            Please enter your
                                                            email
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mt-3 mb-3">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <label className="d-block mb-1 form-control-label">
                                                        Password
                                                    </label>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="form-group">
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            placeholder="Enter password...."
                                                            required
                                                        />
                                                        <small className="help-block">
                                                            Please enter your
                                                            password
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </CardBody>
                                <CardFooter>
                                    <div className="d-flex gap-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-sm"
                                        >
                                            <i className="fa-regular fa-circle-check"></i>{" "}
                                            Submit
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-danger btn-sm"
                                        >
                                            <i className="fa-solid fa-ban"></i>{" "}
                                            Submit
                                        </button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        {/* end horizontal form section */}

                        {/* start normal form section */}
                        <Col sm={12}>
                            <Card title="Normal Form">
                                <CardBody>
                                    <form>
                                        <div className="form-group">
                                            <input
                                                id="n-email"
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter Email...."
                                                required
                                            />
                                        </div>
                                        <div className="form-group mt-2">
                                            <input
                                                id="n-password"
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter password...."
                                                required
                                            />
                                        </div>
                                    </form>
                                </CardBody>
                                <CardFooter>
                                    {" "}
                                    <div className="d-flex gap-3 py-1">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-sm"
                                        >
                                            <i className="fa-regular fa-circle-check"></i>{" "}
                                            Submit
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-danger btn-sm"
                                        >
                                            <i className="fa-solid fa-ban"></i>{" "}
                                            Submit
                                        </button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        {/* end normal form section */}

                        {/* start input grid section */}
                        <Col sm={12}>
                            <Card title="Input Grid">
                                <CardBody>
                                    <form className="form-horizontal">
                                        <div className="form-group mb-3">
                                            <div className="row gy-5">
                                                <div className="col col-sm-3">
                                                    <input
                                                        type="text"
                                                        placeholder=".col-sm-3"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="row gy-5">
                                                <div className="col col-sm-4">
                                                    <input
                                                        type="text"
                                                        placeholder=".col-sm-4"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="row gy-5">
                                                <div className="col col-sm-5">
                                                    <input
                                                        type="text"
                                                        placeholder=".col-sm-5"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="row gy-5">
                                                <div className="col col-sm-6">
                                                    <input
                                                        type="text"
                                                        placeholder=".col-sm-6"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="row gy-5">
                                                <div className="col col-sm-7">
                                                    <input
                                                        type="text"
                                                        placeholder=".col-sm-7"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="row gy-5">
                                                <div className="col col-sm-8">
                                                    <input
                                                        type="text"
                                                        placeholder=".col-sm-8"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="row gy-5">
                                                <div className="col col-sm-9">
                                                    <input
                                                        type="text"
                                                        placeholder=".col-sm-9"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="row gy-5">
                                                <div className="col col-sm-10">
                                                    <input
                                                        type="text"
                                                        placeholder=".col-sm-10"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="row gy-5">
                                                <div className="col col-sm-11">
                                                    <input
                                                        type="text"
                                                        placeholder=".col-sm-11"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="row gy-5">
                                                <div className="col col-sm-12">
                                                    <input
                                                        type="text"
                                                        placeholder=".col-sm-12"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </CardBody>
                                <CardFooter>
                                    <div className="d-flex gap-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-sm"
                                        >
                                            <i className="fa fa-user"></i>{" "}
                                            Submit
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-danger btn-sm"
                                        >
                                            <i className="fa-solid fa-ban"></i>{" "}
                                            Submit
                                        </button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        {/* end input grid section */}

                        {/* start inline from section */}
                        <Col sm={12}>
                            <Card title="Inline Form">
                                <CardBody>
                                    <form className="d-flex gap-3">
                                        <div className="form-group d-flex gap-2 align-items-center">
                                            <label
                                                className="form-control-label"
                                                htmlFor="exampleInputName"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleInputName"
                                                placeholder="Jane Doe"
                                            />
                                        </div>
                                        <div className="form-group d-flex gap-2 align-items-center">
                                            <label
                                                className="pr-1 form-control-label"
                                                htmlFor="exampleInputEmail"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleInputEmail"
                                                placeholder="Jane Doe"
                                            />
                                        </div>
                                    </form>
                                </CardBody>
                                <CardFooter>
                                    <div className="d-flex gap-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-sm"
                                        >
                                            <i className="fa fa-user"></i>{" "}
                                            Submit
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-danger btn-sm"
                                        >
                                            <i className="fa-solid fa-ban"></i>{" "}
                                            Submit
                                        </button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        {/* end inline from section */}
                    </Row>
                </Col>

                {/* start inline sizes section */}
                <Col md={12} lg={6}>
                    <Card title="Input Sizes">
                        <CardBody>
                            <form className="form-horizontal">
                                <div className="row mb-3">
                                    <div className="col col-sm-3">
                                        <label
                                            className="d-block mb-1 form-control-label"
                                            htmlFor="input-small"
                                        >
                                            Small Input
                                        </label>
                                    </div>
                                    <div className="col col-sm-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="input-sm form-control-sm form-control"
                                                id="input-small"
                                                placeholder=".form-control-sm"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col col-sm-3">
                                        <label
                                            className="d-block mb-1 form-control-label"
                                            htmlFor="input-normal"
                                        >
                                            Normal Input
                                        </label>
                                    </div>
                                    <div className="col col-sm-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="input-normal"
                                                placeholder="Normal"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col col-sm-3">
                                        <label
                                            className="d-block mb-1 form-control-label"
                                            htmlFor="large-input"
                                        >
                                            Large Input
                                        </label>
                                    </div>
                                    <div className="col col-sm-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="input-lg form-control-lg form-control"
                                                id="large-input"
                                                placeholder=".form-control-lg"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </CardBody>
                        <CardFooter>
                            <div className="d-flex gap-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-sm"
                                >
                                    <i className="fa fa-user"></i> Submit
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-danger btn-sm"
                                >
                                    <i className="fa-solid fa-ban"></i> Submit
                                </button>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
                {/* end inline sizes section */}

                {/* start validation states form section */}
                <Col md={12} lg={6}>
                    <Card title="Validation States Form">
                        <CardBody>
                            <form>
                                <div className="form-group mb-3">
                                    <label
                                        htmlFor="inputIsValid"
                                        className="form-control-label mb-1"
                                    >
                                        Input is valid
                                    </label>
                                    <input
                                        type="text"
                                        id="inputIsValid"
                                        className="is-valid  form-control"
                                    />
                                </div>
                                <div className="form-group  mb-4">
                                    <label
                                        htmlFor="inputIsInvalid"
                                        className="form-control-label mb-1"
                                    >
                                        Input is invalid
                                    </label>
                                    <input
                                        type="text"
                                        id="inputIsInvalid"
                                        className="is-invalid  form-control"
                                    />
                                </div>
                                <div className="form-check py-2">
                                    <input
                                        className="form-check-input is-invalid"
                                        type="checkbox"
                                        value=""
                                        id="invalidCheck3"
                                        aria-describedby="invalidCheck3Feedback"
                                        required
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="invalidCheck3"
                                    >
                                        Agree to terms and conditions
                                    </label>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                </Col>
                {/* end validation states form section */}

                {/* start buttons groups section */}
                <Col md={12} lg={6}>
                    <Card title="Buttons Groups">
                        <CardBody>
                            <div className="input-group mb-3">
                                <button
                                    className="btn btn btn-primary"
                                    type="button"
                                    id="button-addon1"
                                >
                                    <i className="fa fa-search"></i> Search
                                </button>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    aria-label="Example text with button addon"
                                    aria-describedby="button-addon1"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    aria-label="Example text with button addon"
                                    aria-describedby="button-addon1"
                                />
                                <button
                                    className="btn btn btn-primary"
                                    type="button"
                                    id="button-addon1"
                                >
                                    Submit
                                </button>
                            </div>
                            <div className="input-group mb-3">
                                <button
                                    className="btn btn btn-primary"
                                    type="button"
                                    id="button-addon1"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </button>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    aria-label="Example text with button addon"
                                    aria-describedby="button-addon1"
                                />
                                <button
                                    className="btn btn btn-primary"
                                    type="button"
                                    id="button-addon1"
                                >
                                    <i className="fa-brands fa-twitter"></i>
                                </button>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <div className="d-flex gap-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-sm"
                                >
                                    <i className="fa fa-user"></i> Submit
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-danger btn-sm"
                                >
                                    <i className="fa-solid fa-ban"></i> Submit
                                </button>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
                {/* end buttons groups section */}

                {/* start dropdowns groups section */}
                <Col md={12} lg={6}>
                    <Card title="Dropdowns Groups">
                        <CardBody>
                            <div className="input-group mb-3">
                                <button
                                    className="btn btn-primary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </li>
                                </ul>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Text input with dropdown button"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Text input with dropdown button"
                                    placeholder="Email"
                                />
                                <button
                                    className="btn btn-primary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="input-group mb-3">
                                <button
                                    className="btn btn-primary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Action
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </li>
                                </ul>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Text input with dropdown button"
                                    placeholder="..."
                                />
                                <button
                                    className="btn btn-primary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <div className="d-flex gap-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-sm"
                                >
                                    <i className="fa fa-user"></i> Submit
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-danger btn-sm"
                                >
                                    <i className="fa-solid fa-ban"></i> Submit
                                </button>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
                {/* end dropdowns groups section */}

                {/* start grid for big devices section */}
                <Col md={12} lg={6}>
                    <Card
                        title="Use the grid for big devices!"
                        subscript={<code>.col-lg-*.col-md-*.col-sm-*</code>}
                    >
                        <CardBody>
                            <form className="form-horizontal">
                                <div className="form-group mb-3">
                                    <div className="row gy-5">
                                        <div className="col col-md-8">
                                            <input
                                                type="text"
                                                placeholder=".col-md-8"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col col-md-4">
                                            <input
                                                type="text"
                                                placeholder=".col-md-4"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="row gy-5">
                                        <div className="col col-md-7">
                                            <input
                                                type="text"
                                                placeholder=".col-md-7"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col col-md-5">
                                            <input
                                                type="text"
                                                placeholder=".col-md-5"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="row gy-5">
                                        <div className="col col-md-6">
                                            <input
                                                type="text"
                                                placeholder=".col-md-6"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col col-md-6">
                                            <input
                                                type="text"
                                                placeholder=".col-md-6"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="row gy-5">
                                        <div className="col col-md-5">
                                            <input
                                                type="text"
                                                placeholder=".col-md-5"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col col-md-7">
                                            <input
                                                type="text"
                                                placeholder=".col-md-7"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="row gy-5">
                                        <div className="col col-md-4">
                                            <input
                                                type="text"
                                                placeholder=".col-md-4"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col col-md-8">
                                            <input
                                                type="text"
                                                placeholder=".col-md-8"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </CardBody>
                        <CardFooter>
                            <div className="d-flex gap-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-sm"
                                >
                                    Action
                                </button>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
                {/* end grid for big devices section */}

                {/* start grid for small devices section */}
                <Col md={12} lg={6}>
                    <Card
                        title="Input Grid for small devices!"
                        subscript={<code>.col-*</code>}
                    >
                        <CardBody>
                            <form className="form-horizontal">
                                <div className="form-group mb-3">
                                    <div className="row gy-5">
                                        <div className="col-4">
                                            <input
                                                type="text"
                                                placeholder=".col-4"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-8">
                                            <input
                                                type="text"
                                                placeholder=".col-8"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="row gy-5">
                                        <div className="col-5">
                                            <input
                                                type="text"
                                                placeholder=".col-5"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-7">
                                            <input
                                                type="text"
                                                placeholder=".col-7"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="row gy-5">
                                        <div className="col-6">
                                            <input
                                                type="text"
                                                placeholder=".col-6"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <input
                                                type="text"
                                                placeholder=".col-6"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="row gy-5">
                                        <div className="col-7">
                                            <input
                                                type="text"
                                                placeholder=".col-7"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-5">
                                            <input
                                                type="text"
                                                placeholder=".col-5"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="row gy-5">
                                        <div className="col-8">
                                            <input
                                                type="text"
                                                placeholder=".col-8"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-4">
                                            <input
                                                type="text"
                                                placeholder=".col-4"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </CardBody>
                        <CardFooter>
                            <div className="d-flex gap-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-sm"
                                >
                                    Action
                                </button>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
                {/* end grid for small devices section */}

                {/* start example form section */}
                <Col md={12} lg={6}>
                    {/* <WidgetsForm cardTitle="Example Form" isPrepend={true} buttonBg="primary" /> */}
                    <Card title="Example Form">
                        <CardBody>
                            <div className="input-group mb-3">
                                <span
                                    className="input-group-text"
                                    style={{
                                        backgroundColor: "var(--bg-content)",
                                        borderColor: "var(--border-color)",
                                        color: "var(  --hedging-text-color)",
                                    }}
                                >
                                    Username
                                </span>

                                <input
                                    type="text"
                                    className="form-control rounded-0"
                                    id="validationDefaultUsername"
                                    aria-describedby="inputGroupPrepend2"
                                    required
                                />
                                <span
                                    className="input-group-text rounded-end"
                                    id="inputGroupPrepend2"
                                    style={{
                                        backgroundColor: "var(--bg-content)",
                                        borderColor: "var(--border-color)",
                                        color: "var(  --hedging-text-color)",
                                    }}
                                >
                                    <i className="fa fa-user"></i>
                                </span>
                            </div>
                            <div className="input-group mb-3">
                                <span
                                    className="input-group-text"
                                    style={{
                                        backgroundColor: "var(--bg-content)",
                                        borderColor: "var(--border-color)",
                                        color: "var(  --hedging-text-color)",
                                    }}
                                >
                                    Email
                                </span>

                                <input
                                    type="email"
                                    className="form-control"
                                    id="validationDefaultEmail"
                                    aria-describedby="inputGroupPrepend2"
                                    required
                                />
                                <span
                                    className="input-group-text rounded-end"
                                    id="inputGroupPrepend2"
                                    style={{
                                        backgroundColor: "var(--bg-content)",
                                        borderColor: "var(--border-color)",
                                        color: "var(  --hedging-text-color)",
                                    }}
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                </span>
                            </div>
                            <div className="input-group mb-3">
                                <span
                                    className="input-group-text"
                                    style={{
                                        backgroundColor: "var(--bg-content)",
                                        borderColor: "var(--border-color)",
                                        color: "var(  --hedging-text-color)",
                                    }}
                                >
                                    Password
                                </span>

                                <input
                                    type="password"
                                    className="form-control"
                                    id="validationDefaultEuro"
                                    aria-describedby="inputGroupPrepend2"
                                    required
                                />
                                <span
                                    className="input-group-text rounded-end"
                                    id="inputGroupPrepend2"
                                    style={{
                                        backgroundColor: "var(--bg-content)",
                                        borderColor: "var(--border-color)",
                                        color: "var(  --hedging-text-color)",
                                    }}
                                >
                                    <i className="fa fa-asterisk"></i>
                                </span>
                            </div>
                            <div className="form-actions form-group mb-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-sm"
                                >
                                    Submit
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={12} lg={6}>
                    {/* <WidgetsForm cardTitle="Example Form" rowDirection="left" buttonBg="success" /> */}
                    <Card title="Example Form">
                        <CardBody>
                            <div className="input-group mb-3 flex-row-reverse">
                                <input
                                    type="text"
                                    className="form-control rounded-0 rounded-end"
                                    id="validationDefaultUsername"
                                    aria-describedby="inputGroupPrepend2"
                                    placeholder={"Username"}
                                    required
                                />
                                <span
                                    className="input-group-text rounded-0 rounded-start border-end-0"
                                    id="inputGroupPrepend2"
                                    style={{
                                        backgroundColor: "var(--bg-content)",
                                        borderColor: "var(--border-color)",
                                        color: "var(  --hedging-text-color)",
                                    }}
                                >
                                    <i className="fa fa-user"></i>
                                </span>
                            </div>
                            <div className="input-group mb-3 flex-row-reverse">
                                <input
                                    type="email"
                                    className="form-control rounded-0 rounded-end"
                                    id="validationDefaultEmail"
                                    aria-describedby="inputGroupPrepend2"
                                    placeholder={"Email"}
                                    required
                                />
                                <span
                                    className="input-group-text rounded-0 rounded-start border-end-0"
                                    id="inputGroupPrepend2"
                                    style={{
                                        backgroundColor: "var(--bg-content)",
                                        borderColor: "var(--border-color)",
                                        color: "var(  --hedging-text-color)",
                                    }}
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                </span>
                            </div>
                            <div className="input-group mb-3 flex-row-reverse">
                                <input
                                    type="password"
                                    className="form-control rounded-0 rounded-end"
                                    id="validationDefaultEuro"
                                    aria-describedby="inputGroupPrepend2"
                                    placeholder={"Password"}
                                    required
                                />
                                <span
                                    className="input-group-text rounded-0 rounded-start border-end-0"
                                    id="inputGroupPrepend2"
                                    style={{
                                        backgroundColor: "var(--bg-content)",
                                        borderColor: "var(--border-color)",
                                        color: "var(  --hedging-text-color)",
                                    }}
                                >
                                    <i className="fa fa-asterisk"></i>
                                </span>
                            </div>
                            <div className="form-actions form-group mb-3">
                                <button
                                    type="submit"
                                    className="btn btn-success btn-sm"
                                >
                                    Submit
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                {/* end example form section */}
            </Row>
        </Fragment>
    );
};

export default BasicForm;

