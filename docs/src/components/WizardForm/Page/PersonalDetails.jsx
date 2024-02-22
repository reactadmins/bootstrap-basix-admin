const PersonalDetails = () => {
    return (
        <div className="col-12 col-lg-8 ">
            <form className="form-horizontal">
                <div className="form-group d-flex mb-3">
                    <label
                        htmlFor="fullname"
                        className="col-sm-2 col-form-label"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        placeholder="Entar Full Name"
                        className="form-control"
                    />
                </div>
                <div className="form-group d-flex  mb-3">
                    <label
                        htmlFor="personalstaticEmail"
                        className="col-sm-2 col-form-label"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        id="personalstaticEmail"
                        name="personalstaticEmail"
                        placeholder="email@example.com"
                        className="form-control"
                    />
                </div>
                <div className="form-group d-flex  mb-3">
                    <label
                        htmlFor="inputPassword"
                        className="col-sm-2 col-form-label"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="inputPassword"
                        name="inputPassword"
                        placeholder="Password"
                        className="form-control"
                    />
                </div>
            </form>
        </div>
    );
};

export default PersonalDetails;

