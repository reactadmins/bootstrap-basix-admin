import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Select from "react-select";
import Card from "@/components/Card/Card";
import { CardBody } from "react-bootstrap";

const options = [
    { value: "Afghanistan", label: "Afghanistan" },
    { value: "Albania", label: "Albania" },
    { value: "Algeria", label: "Algeria" },
    { value: "Andorra", label: "Andorra" },
    { value: "Angola", label: "Angola" },
    { value: "Antigua", label: "Antigua" },
    { value: "Argentina", label: "Argentina" },
    { value: "Armenia", label: "Armenia" },
    { value: "Aruba", label: "Aruba" },
    { value: "Australia", label: "Australia" },
    { value: "Austria", label: "Austria" },
    { value: "Azerbaijan", label: "Azerbaijan" },
    { value: "Bahamas", label: "Bahamas" },
    { value: "Bahrain", label: "Bahrain" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Barbados", label: "Barbados" },
    { value: "Belarus", label: "Belarus" },
    { value: "Belgium", label: "Belgium" },
    { value: "Belize", label: "Belize" },
    { value: "Benin", label: "Benin" },
    { value: "Bhutan", label: "Bhutan" },
    { value: "Bolivia", label: "Bolivia" },
    { value: "Bosnia", label: "Bosnia" },
    { value: "Botswana", label: "Botswana" },
    { value: "Brazil", label: "Brazil" },
    { value: "Brunei", label: "Brunei" },
    { value: "Bulgariav", label: "Bulgariav" },
    { value: "Burkina Faso", label: "Burkina Faso" },
    { value: "Burma", label: "Burma" },
    { value: "Burundi", label: "Burundi" },
];

const AdvancedForm = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                <Col md={12} lg={6}>
                    <Card title="Masked InputReact Text Mask">
                        <CardBody>
                            <div className="form-group mb-3">
                                <label className="form-control-label mb-2">Date input</label>
                                <div className="input-group">
                                    <span
                                        className="input-group-text"
                                        style={{
                                            backgroundColor: "var(--bg-content)",
                                            borderColor: "var(--border-color)",
                                            color: "var(  --hedging-text-color)",
                                        }}>
                                        <i className="fa fa-calendar"></i>
                                    </span>
                                    <input className="form-control" />
                                </div>
                                <small>ex. 99/99/9999</small>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-control-label mb-2">Phone input</label>
                                <div className="input-group">
                                    <span
                                        className="input-group-text"
                                        style={{
                                            backgroundColor: "var(--bg-content)",
                                            borderColor: "var(--border-color)",
                                            color: "var(  --hedging-text-color)",
                                        }}>
                                        <i className="fa fa-phone"></i>
                                    </span>
                                    <input className="form-control" />
                                </div>
                                <small>ex. (999) 999-9999</small>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-control-label mb-2">
                                    Taxpayer Identification Numbers
                                </label>
                                <div className="input-group">
                                    <span
                                        className="input-group-text"
                                        style={{
                                            backgroundColor: "var(--bg-content)",
                                            borderColor: "var(--border-color)",
                                            color: "var(  --hedging-text-color)",
                                        }}>
                                        <i className="fa fa-usd"></i>
                                    </span>
                                    <input className="form-control" />
                                </div>
                                <small>ex. 99-9999999</small>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-control-label mb-2">
                                    Social Security Number
                                </label>
                                <div className="input-group">
                                    <span
                                        className="input-group-text"
                                        style={{
                                            backgroundColor: "var(--bg-content)",
                                            borderColor: "var(--border-color)",
                                            color: "var(  --hedging-text-color)",
                                        }}>
                                        <i className="fa fa-male"></i>
                                    </span>
                                    <input className="form-control" />
                                </div>
                                <small>ex. 999-99-9999</small>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-control-label mb-2">Eye Script</label>
                                <div className="input-group">
                                    <span
                                        className="input-group-text"
                                        style={{
                                            backgroundColor: "var(--bg-content)",
                                            borderColor: "var(--border-color)",
                                            color: "var(  --hedging-text-color)",
                                        }}>
                                        <i className="fa fa-asterisk"></i>
                                    </span>
                                    <input className="form-control" />
                                </div>
                                <small>ex. ~9.99 ~9.99 999</small>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-control-label mb-2">
                                    Credit Card Number
                                </label>
                                <div className="input-group">
                                    <span
                                        className="input-group-text"
                                        style={{
                                            backgroundColor: "var(--bg-content)",
                                            borderColor: "var(--border-color)",
                                            color: "var(  --hedging-text-color)",
                                        }}>
                                        <i className="fa fa-credit-card"></i>
                                    </span>
                                    <input className="form-control" />
                                </div>
                                <small>ex. 9999 9999 9999 9999</small>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={12} lg={6}>
                    <Card title="React-Select">
                        <CardBody>
                            <div className="tag_select">
                                <h5 className="pb-2">Select Countries</h5>
                                <Select
                                    className="select"
                                    isMulti
                                    options={options}
                                    isClearable={true}
                                    isSearchable={true}
                                    isDisabled={false}
                                    isLoading={false}
                                    isRtl={false}
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default AdvancedForm;

