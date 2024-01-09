import CardContent from "../Card/CardContent";

const HorizontalForm = () => {
    return (
        <>
            <CardContent
                title="Horizontal Form"
                CardBody={
                    <>
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
                                            <span className="help-block form-text">
                                                Please enter your email
                                            </span>
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
                                            <span className="help-block form-text">
                                                Please enter your password
                                            </span>
                                        </div>
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

export default HorizontalForm;

