import CardContent from "../Card/CardContent";

const MaskedInput = () => {
    return (
        <CardContent
            title="Masked InputReact Text Mask"
            CardBody={
                <>
                    <div className="form-group mb-3">
                        <label className="form-control-label mb-2">
                            Date input
                        </label>
                        <div className="input-group">
                            <span
                                className="input-group-text"
                                style={{
                                    backgroundColor: "var(--bg-content)",
                                    borderColor: "var(--border-color)",
                                    color: "var(  --hedging-text-color)",
                                }}
                            >
                                <i className="fa fa-calendar"></i>
                            </span>
                            <input className="form-control" />
                        </div>
                        <small>ex. 99/99/9999</small>
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-control-label mb-2">
                            Phone input
                        </label>
                        <div className="input-group">
                            <span
                                className="input-group-text"
                                style={{
                                    backgroundColor: "var(--bg-content)",
                                    borderColor: "var(--border-color)",
                                    color: "var(  --hedging-text-color)",
                                }}
                            >
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
                                }}
                            >
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
                                }}
                            >
                                <i className="fa fa-male"></i>
                            </span>
                            <input className="form-control" />
                        </div>
                        <small>ex. 999-99-9999</small>
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-control-label mb-2">
                            Eye Script
                        </label>
                        <div className="input-group">
                            <span
                                className="input-group-text"
                                style={{
                                    backgroundColor: "var(--bg-content)",
                                    borderColor: "var(--border-color)",
                                    color: "var(  --hedging-text-color)",
                                }}
                            >
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
                                }}
                            >
                                <i className="fa fa-credit-card"></i>
                            </span>
                            <input className="form-control" />
                        </div>
                        <small>ex. 9999 9999 9999 9999</small>
                    </div>
                </>
            }
        />
    );
};

export default MaskedInput;

