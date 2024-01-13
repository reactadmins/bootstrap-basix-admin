import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import registerStyle from "../assets/scss/Authentication.module.scss";
import { useDashboardDataContext } from "../context/dashboardDataContext";

const Register = () => {
    const { isThemeDirection } = useDashboardDataContext();
    return (
        <div
            data={isThemeDirection ? "true" : "false"}
            className={`${registerStyle.container_fluid} p-0`}
        >
            <div className={registerStyle.auth_wrapper}>
                <div
                    className={`${registerStyle.from_container} d-flex justify-content-center align-items-center h-100`}
                >
                    <div className="col-md-10 col-lg-8 col-xl-5">
                        <div className={`${registerStyle.card} card rounded-0`}>
                            <div
                                className={`${registerStyle.card_header} card-header`}
                            >
                                <strong>reate New Account</strong>
                            </div>
                            <div
                                className={`${registerStyle.card_body} card-body`}
                            >
                                <form>
                                    <div
                                        className={`${registerStyle.input_group} input-group mb-3`}
                                    >
                                        <span
                                            className={`${registerStyle.input_group_icon} input-group-text rounded-star`}
                                            htmlFor="email"
                                        >
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                    <div
                                        className={`${registerStyle.input_group} input-group mb-3`}
                                    >
                                        <span
                                            className={`${registerStyle.input_group_icon} input-group-text rounded-star`}
                                            htmlFor="password"
                                        >
                                            <i className="fa fa-asterisk"></i>
                                        </span>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="password"
                                            required
                                        />
                                    </div>
                                    <div className="form-check mb-3">
                                        <input
                                            type="checkbox"
                                            id="check"
                                            className="form-check-input"
                                        />
                                        <label htmlFor="check">
                                            <span className="form-check-label">
                                                I agree to{" "}
                                                <a
                                                    href=" "
                                                    className="text-decoration-none"
                                                >
                                                    Terms of Use.
                                                </a>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <button
                                            type="submit"
                                            className="border-0 text-white"
                                        >
                                            signup
                                        </button>
                                        <Link
                                            to=""
                                            type="action"
                                            className="border-0 text-white text-decoration-none"
                                        >
                                            Create Account
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${registerStyle.logo_container} h-100`}>
                    <div className={registerStyle.oblique}></div>
                    <div className={registerStyle.logo}>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

