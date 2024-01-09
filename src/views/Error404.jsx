import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Authentication from "../assets/scss/Authentication.module.scss";

const Page404 = () => {
    return (
        <div
            className={`${Authentication.container_fluid} container-fluid p-0"`}
        >
            <div className={Authentication.auth_wrapper}>
                <div
                    className={`${Authentication.error_container} bg-white h-100`}
                >
                    <div>
                        <div style={{ marginLeft: "20px" }}>
                            <h1 className={Authentication.error_code}>404</h1>
                            <h5 className={Authentication.error_title}>
                                Oops!{" You'"}re lost.
                            </h5>
                            <p className={Authentication.error_description}>
                                The page you are looking <br /> for was not
                                found.
                            </p>
                        </div>
                        <div
                            className={`${Authentication.input_group} input-group`}
                        >
                            <button
                                type="button"
                                className={Authentication.error_search_btn}
                            >
                                <i className="fa fa-search"></i>
                            </button>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="What are you looking for?"
                                required
                            />
                            <button
                                type="submit"
                                className={Authentication.error_submit_btn}
                            >
                                Search
                            </button>
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

export default Page404;

