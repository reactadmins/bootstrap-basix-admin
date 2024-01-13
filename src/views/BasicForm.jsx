import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import CardContent from "../components/Card/CardContent";
import CreditCardForm from "../components/Form/CreditCardForm";
import CompanyForm from "../components/Form/CompanyForm";
import HorizontalForm from "../components/Form/HorizontalForm";
import StackedForm from "../components/Form/StackedForm";
import WidgetsForm from "../components/Form/WidgetsForm";
import BasicElementForm from "../components/Form/BasicElementForm";

const BasicForm = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                {/* start credit card  form section */}
                <Col md={12} lg={6}>
                    <CreditCardForm />
                </Col>
                {/* end credit card form section */}

                {/* start company form section */}
                <Col md={12} lg={6}>
                    <CompanyForm />
                </Col>
                {/* end company form section */}

                {/* start basic form elements section */}
                <Col md={12} lg={6}>
                    <BasicElementForm />
                </Col>
                {/* end basic form elements section */}

                <Col md={12} lg={6}>
                    <Row className="gy-4">
                        {/* start horizontal form section */}
                        <Col sm={12}>
                            <HorizontalForm />
                        </Col>
                        {/* end horizontal form section */}

                        {/* start normal form section */}
                        <Col sm={12}>
                            <StackedForm />
                        </Col>
                        {/* end normal form section */}

                        {/* start input grid section */}
                        <Col sm={12}>
                            <CardContent
                                title="Input Grid"
                                CardBody={
                                    <>
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
                                    </>
                                }
                                CardFooter={
                                    <>
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
                                    </>
                                }
                            />
                        </Col>
                        {/* end input grid section */}
                    </Row>
                </Col>

                {/* start inline from section */}
                <Col md={12} lg={6}>
                    <CardContent
                        title="Inline Form"
                        CardBody={
                            <>
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
                            </>
                        }
                        CardFooter={
                            <>
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
                                        <i className="fa-solid fa-ban"></i>{" "}
                                        Submit
                                    </button>
                                </div>
                            </>
                        }
                    />
                </Col>
                {/* end inline from section */}

                {/* start inline sizes section */}
                <Col md={12} lg={6}>
                    <CardContent
                        title="Input Sizes"
                        CardBody={
                            <>
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
                            </>
                        }
                        CardFooter={
                            <>
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
                                        <i className="fa-solid fa-ban"></i>{" "}
                                        Submit
                                    </button>
                                </div>
                            </>
                        }
                    />
                </Col>
                {/* end inline sizes section */}

                {/* start validation states form section */}
                <Col md={12} lg={6}>
                    <CardContent
                        title="Validation States Form"
                        CardBody={
                            <>
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
                                    <div className="form-group  mb-3">
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
                                </form>
                            </>
                        }
                    />
                </Col>
                {/* end validation states form section */}

                {/* start validation states section */}
                <Col md={12} lg={6}>
                    <CardContent
                        title="Validation States"
                        CardBody={
                            <>
                                <form>
                                    <div className="form-group mb-3">
                                        <label
                                            htmlFor="inputIsSuccess"
                                            className="form-control-label mb-1"
                                        >
                                            Input with success
                                        </label>
                                        <input
                                            type="text"
                                            id="inputIsSuccess"
                                            className="form-control-success form-control"
                                        />
                                    </div>
                                    <div className="form-group  mb-3">
                                        <label
                                            htmlFor="inputIsInWarning"
                                            className="form-control-label mb-1"
                                        >
                                            Input with warning
                                        </label>
                                        <input
                                            type="text"
                                            id="inputIsInWarning"
                                            className="form-control-warning form-control"
                                        />
                                    </div>
                                    <div className="form-group  mb-3">
                                        <label
                                            htmlFor="inputIsInError"
                                            className="form-control-label mb-1"
                                        >
                                            Input with error
                                        </label>
                                        <input
                                            type="text"
                                            id="inputIsInError"
                                            className="form-control-danger  form-control"
                                        />
                                    </div>
                                </form>
                            </>
                        }
                        CardFooter={
                            <>
                                {" "}
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
                                        <i className="fa-solid fa-ban"></i>{" "}
                                        Submit
                                    </button>
                                </div>
                            </>
                        }
                    />
                </Col>
                {/* end validation states section */}

                {/* start icon text groups section */}
                <Col md={12} lg={6}>
                    <CardContent
                        title="Icon/Text Groups"
                        CardBody={
                            <>
                                <div className="input-group mb-3">
                                    <span
                                        className="input-group-text"
                                        id="inputGroupPrepend2"
                                        style={{
                                            backgroundColor:
                                                "var(--bg-content)",
                                            borderColor: "var(--border-color)",
                                            color: "var(  --hedging-text-color)",
                                        }}
                                    >
                                        <i className="fa fa-user"></i>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationDefaultUsername"
                                        aria-describedby="inputGroupPrepend2"
                                        placeholder="Username"
                                        required
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationDefaultEmail"
                                        aria-describedby="inputGroupPrepend2"
                                        placeholder="Email"
                                        required
                                    />
                                    <span
                                        className="input-group-text"
                                        id="inputGroupPrepend2"
                                        style={{
                                            backgroundColor:
                                                "var(--bg-content)",
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
                                        id="inputGroupPrepend2"
                                        style={{
                                            backgroundColor:
                                                "var(--bg-content)",
                                            borderColor: "var(--border-color)",
                                            color: "var(  --hedging-text-color)",
                                        }}
                                    >
                                        <i className="fa fa-euro"></i>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationDefaultEuro"
                                        aria-describedby="inputGroupPrepend2"
                                        placeholder=".."
                                        required
                                    />
                                    <span
                                        className="input-group-text"
                                        id="inputGroupPrepend2"
                                        style={{
                                            backgroundColor:
                                                "var(--bg-content)",
                                            borderColor: "var(--border-color)",
                                            color: "var(  --hedging-text-color)",
                                        }}
                                    >
                                        .00
                                    </span>
                                </div>
                            </>
                        }
                        CardFooter={
                            <>
                                {" "}
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
                                        <i className="fa-solid fa-ban"></i>{" "}
                                        Submit
                                    </button>
                                </div>
                            </>
                        }
                    />
                </Col>
                {/* end icon text groups section */}

                {/* start buttons groups section */}
                <Col md={12} lg={6}>
                    <CardContent
                        title="Buttons Groups"
                        CardBody={
                            <>
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
                            </>
                        }
                        CardFooter={
                            <>
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
                                        <i className="fa-solid fa-ban"></i>{" "}
                                        Submit
                                    </button>
                                </div>
                            </>
                        }
                    />
                </Col>
                {/* end buttons groups section */}

                {/* start dropdowns groups section */}
                <Col md={12} lg={6}>
                    <CardContent
                        title="Dropdowns Groups"
                        CardBody={
                            <>
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
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Something else here
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
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
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Something else here
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
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
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Something else here
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
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
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Something else here
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Separated link
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        }
                        CardFooter={
                            <>
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
                                        <i className="fa-solid fa-ban"></i>{" "}
                                        Submit
                                    </button>
                                </div>
                            </>
                        }
                    />
                </Col>
                {/* end dropdowns groups section */}

                {/* start grid for big devices section */}
                <Col md={12} lg={6}>
                    <CardContent
                        title="Use the grid for big devices!
                        "
                        titleCode={
                            <>
                                <code>.col-lg-*.col-md-*.col-sm-*</code>
                            </>
                        }
                        CardBody={
                            <>
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
                            </>
                        }
                        CardFooter={
                            <>
                                <div className="d-flex gap-3">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-sm"
                                    >
                                        Action
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-sm"
                                    >
                                        Action
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-sm"
                                    >
                                        Action
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-sm"
                                    >
                                        Action
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-sm"
                                    >
                                        Action
                                    </button>
                                </div>
                            </>
                        }
                    />
                </Col>
                {/* end grid for big devices section */}

                {/* start grid for small devices section */}
                <Col md={12} lg={6}>
                    <CardContent
                        title="Input Grid for small devices!"
                        titleCode={
                            <>
                                <code>.col-*</code>
                            </>
                        }
                        CardBody={
                            <>
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
                            </>
                        }
                        CardFooter={
                            <>
                                <div className="d-flex gap-3">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-sm"
                                    >
                                        Action
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-sm"
                                    >
                                        Action
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-sm"
                                    >
                                        Action
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-sm"
                                    >
                                        Action
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-sm"
                                    >
                                        Action
                                    </button>
                                </div>
                            </>
                        }
                    />
                </Col>
                {/* end grid for small devices section */}

                {/* start example form section */}
                <Col md={12} lg={6}>
                    <WidgetsForm
                        cardTitle="Example Form"
                        isPrepend={true}
                        buttonBg="primary"
                    />
                </Col>
                <Col md={12} lg={6}>
                    <WidgetsForm
                        cardTitle="Example Form"
                        buttonBg="secondary"
                    />
                </Col>
                <Col md={12} lg={6}>
                    <WidgetsForm
                        cardTitle="Example Form"
                        rowDirection="left"
                        buttonBg="success"
                    />
                </Col>
                {/* end example form section */}
            </Row>
        </Fragment>
    );
};

export default BasicForm;

