import CardContent from "../Card/CardContent";

const CompanyForm = () => {
    return (
        <>
            <CardContent
                title="Credit Card form"
                CardBody={
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
                    </form>
                }
            />
        </>
    );
};

export default CompanyForm;

