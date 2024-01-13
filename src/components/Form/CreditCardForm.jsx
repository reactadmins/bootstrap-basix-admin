import CardContent from "../Card/CardContent";

const CreditCardForm = () => {
    return (
        <CardContent
            title="Credit Card form"
            CardBody={
                <>
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
                            <dir>
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
                            </dir>
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
                                            borderColor: "var(--border-color)",
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
                                <span className="fs-5 mx-1">Pay $100.00</span>
                            </button>
                        </div>
                    </form>
                </>
            }
        />
    );
};

export default CreditCardForm;

