import CardContent from "../Card/CardContent";

const WidgetsForm = ({
    isPrepend = false,
    cardTitle = "",
    rowDirection = "flex-row",
    buttonBg = "",
}) => {
    return (
        <>
            <CardContent
                title={cardTitle}
                CardBody={
                    <>
                        <div
                            className={`input-group mb-3 ${
                                rowDirection == "left" ? "flex-row-reverse" : ""
                            }`}
                        >
                            {isPrepend && (
                                <span className="input-group-text">
                                    Username
                                </span>
                            )}
                            <input
                                type="text"
                                className={`form-control ${
                                    rowDirection == "left"
                                        ? "rounded-0 rounded-end"
                                        : ""
                                }`}
                                id="validationDefaultUsername"
                                aria-describedby="inputGroupPrepend2"
                                placeholder={isPrepend ? "" : "Username"}
                                required
                            />
                            <span
                                className={`input-group-text ${
                                    rowDirection == "left"
                                        ? "rounded-0 rounded-start border-end-0"
                                        : "rounded-end"
                                }`}
                                id="inputGroupPrepend2"
                            >
                                <i className="fa fa-user"></i>
                            </span>
                        </div>
                        <div
                            className={`input-group mb-3 ${
                                rowDirection == "left" ? "flex-row-reverse" : ""
                            }`}
                        >
                            {isPrepend && (
                                <span className="input-group-text">Email</span>
                            )}
                            <input
                                type="email"
                                className={`form-control ${
                                    rowDirection == "left"
                                        ? "rounded-0 rounded-end"
                                        : ""
                                }`}
                                id="validationDefaultEmail"
                                aria-describedby="inputGroupPrepend2"
                                placeholder={isPrepend ? "" : "Email"}
                                required
                            />
                            <span
                                className={`input-group-text ${
                                    rowDirection == "left"
                                        ? "rounded-0 rounded-start border-end-0"
                                        : "rounded-end"
                                }`}
                                id="inputGroupPrepend2"
                            >
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                        </div>
                        <div
                            className={`input-group mb-3 ${
                                rowDirection == "left" ? "flex-row-reverse" : ""
                            }`}
                        >
                            {isPrepend && (
                                <span className="input-group-text">
                                    Password
                                </span>
                            )}
                            <input
                                type="password"
                                className={`form-control ${
                                    rowDirection == "left"
                                        ? "rounded-0 rounded-end"
                                        : ""
                                }`}
                                id="validationDefaultEuro"
                                aria-describedby="inputGroupPrepend2"
                                placeholder={isPrepend ? "" : "Password"}
                                required
                            />
                            <span
                                className={`input-group-text ${
                                    rowDirection == "left"
                                        ? "rounded-0 rounded-start border-end-0"
                                        : "rounded-end"
                                }`}
                                id="inputGroupPrepend2"
                            >
                                <i className="fa fa-asterisk"></i>
                            </span>
                        </div>
                        <div className="form-actions form-group mb-3">
                            <button
                                type="submit"
                                className={`btn btn-${buttonBg} btn-sm`}
                            >
                                Submit
                            </button>
                        </div>
                    </>
                }
            />
        </>
    );
};

export default WidgetsForm;

