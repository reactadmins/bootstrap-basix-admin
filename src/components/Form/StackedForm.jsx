import CardContent from "../Card/CardContent";

const StackedForm = () => {
    return (
        <>
            <CardContent
                title="Normal Form"
                CardBody={
                    <>
                        <form>
                            <div className="form-group">
                                <label
                                    htmlFor="n-email"
                                    className="d-block mb-1 form-control-label"
                                >
                                    Email
                                </label>
                                <input
                                    id="n-email"
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Email...."
                                    required
                                />
                                <small className="help-block form-text">
                                    Please enter your email
                                </small>
                            </div>
                            <div className="form-group mt-2">
                                <label
                                    htmlFor="n-password"
                                    className="d-block mb-1 form-control-label"
                                >
                                    Password
                                </label>
                                <input
                                    id="n-password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password...."
                                    required
                                />
                                <small className="help-block form-text">
                                    Please enter your password
                                </small>
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
                                <i className="fa-regular fa-circle-check"></i>{" "}
                                Submit
                            </button>
                            <button
                                type="submit"
                                className="btn btn-danger btn-sm"
                            >
                                <i className="fa-solid fa-ban"></i> Submit
                            </button>
                        </div>
                    </>
                }
            />
        </>
    );
};

export default StackedForm;

