import CardContent from "../Card/CardContent";
import { Col, Row } from "react-bootstrap";

const BasicElementForm = () => {
    return (
        <>
            <CardContent
                title="Basic Element Form"
                CardBody={
                    <>
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
                                        <small>This is a help text</small>
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
                                        <small>Please enter your email</small>
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
                                            Please enter a complex password
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
                                            <option>Please select</option>
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
                                            <option>Please select</option>
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
                                            <option>Please select</option>
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
                                            <option>Please select</option>
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
                    </>
                }
                CardFooter={
                    <div className="d-flex gap-3">
                        <button
                            type="submit"
                            className="btn btn-primary btn-sm"
                        >
                            <i className="fa-regular fa-circle-check"></i>{" "}
                            Submit
                        </button>
                        <button type="submit" className="btn btn-danger btn-sm">
                            <i className="fa-solid fa-ban"></i> Submit
                        </button>
                    </div>
                }
            />
        </>
    );
};

export default BasicElementForm;

