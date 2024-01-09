const AdditionalInfo = () => {
    return (
        <div className="col-12 col-lg-8">
            <form className="form-horizontal">
                <div className="form-group d-flex mb-3">
                    <label htmlFor="Phone" className="col-sm-2 col-form-label">
                        Phone
                    </label>
                    <input
                        type="number"
                        id="Phone"
                        name="Phone"
                        placeholder="Phone"
                        className="form-control"
                    />
                </div>
                <div className="form-group d-flex  mb-3">
                    <label
                        htmlFor="mobileNumber"
                        className="col-sm-2 col-form-label"
                    >
                        Mobile
                    </label>
                    <input
                        type="number"
                        id="mobileNumber"
                        name="mobileNumber"
                        placeholder="Mobile Number"
                        className="form-control"
                    />
                </div>
                <div className="form-group d-flex  mb-3">
                    <label
                        htmlFor="address"
                        className="col-sm-2 col-form-label"
                    >
                        Address
                    </label>
                    <textarea
                        type="text"
                        id="address"
                        name="address"
                        rows="9"
                        placeholder="Content..."
                        className="form-control"
                    ></textarea>
                </div>
            </form>
        </div>
    );
};

export default AdditionalInfo;

