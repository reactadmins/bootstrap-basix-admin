import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Authentication from "../assets/scss/Authentication.module.scss";

const Login = () => {
    return (
        <div className={`${Authentication.container_fluid} p-0`}>
            <div className={Authentication.auth_wrapper}>
                <div
                    className={`${Authentication.from_container} d-flex justify-content-center align-items-center bg-white h-100`}
                >
                    <div className="col-md-10 col-lg-8 col-xl-5">
                        <div className="card rounded-0">
                            <div
                                className="card-header"
                                style={{
                                    backgroundColor: "#f7f7f7",
                                    padding: "12px 20px",
                                }}
                            >
                                <strong> Welcome !</strong>
                            </div>
                            <div
                                className="card-body"
                                style={{ padding: "40px" }}
                            >
                                <form>
                                    <div className="input-group mb-3">
                                        <span
                                            className="input-group-text rounded-star"
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
                                    <div className="input-group mb-3">
                                        <span
                                            className="input-group-text rounded-star"
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
                                            style={{
                                                padding: "6px 12px",
                                                fontWeight: "400",
                                                backgroundColor: "#28a745",
                                            }}
                                        >
                                            Log In
                                        </button>
                                        <Link
                                            to=""
                                            className="border-0 text-white text-decoration-none"
                                            style={{
                                                padding: "6px 12px",
                                                fontWeight: "400",
                                                backgroundColor: "#007bff",
                                            }}
                                        >
                                            Create Account
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${Authentication.logo_container} h-100`}>
                    <div className={Authentication.oblique}></div>
                    <div className={Authentication.logo}>
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

