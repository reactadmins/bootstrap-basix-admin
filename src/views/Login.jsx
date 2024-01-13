import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import loginStyle from "../assets/scss/Authentication.module.scss";
import { useDashboardDataContext } from "../context/dashboardDataContext";

const Login = () => {
    const { isThemeDirection } = useDashboardDataContext();

    return (
        <div
            data={isThemeDirection ? "true" : "false"}
            className={`${loginStyle.container_fluid}`}
        >
            <div className={loginStyle.auth_wrapper}>
                <div
                    className={`${loginStyle.from_container} d-flex justify-content-center align-items-center h-100`}
                >
                    <div className="col-md-10 col-lg-8 col-xl-5">
                        <div className={`${loginStyle.card} card rounded-0`}>
                            <div
                                className={`${loginStyle.card_header} card-header`}
                            >
                                <strong> Welcome !</strong>
                            </div>
                            <div
                                className={`${loginStyle.card_body} card-body`}
                            >
                                <form>
                                    <div
                                        className={`${loginStyle.input_group} input-group mb-3`}
                                    >
                                        <span
                                            className={`${loginStyle.input_group_icon} input-group-text rounded-star`}
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
                                        className={`${loginStyle.input_group} input-group mb-3`}
                                    >
                                        <span
                                            className={`${loginStyle.input_group_icon} input-group-text rounded-star`}
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
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <button
                                            type="submit"
                                            className="border-0 text-white"
                                        >
                                            Log In
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
                <div className={`${loginStyle.logo_container} h-100`}>
                    <div className={loginStyle.oblique}></div>
                    <div className={loginStyle.logo}>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

