import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import errorPageStyle from "../assets/scss/Authentication.module.scss";
import { useDashboardDataContext } from "../context/dashboardDataContext";

const Page404 = () => {
    const { isThemeDirection } = useDashboardDataContext();
    return (
        <div
            data={isThemeDirection ? "true" : "false"}
            className={`${errorPageStyle.container_fluid} container-fluid p-0`}
        >
            <div className={errorPageStyle.auth_wrapper}>
                <div className={`${errorPageStyle.error_container} h-100`}>
                    <div>
                        <div style={{ marginLeft: "20px" }}>
                            <h1 className={errorPageStyle.error_code}>404</h1>
                            <h5 className={errorPageStyle.error_title}>
                                Oops!{" You'"}re lost.
                            </h5>
                            <p className={errorPageStyle.error_description}>
                                The page you are looking <br /> for was not
                                found.
                            </p>
                        </div>
                        <div
                            className={`${errorPageStyle.input_group} input-group`}
                        >
                            <button
                                type="button"
                                className={errorPageStyle.error_search_btn}
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
                                className={errorPageStyle.error_submit_btn}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${errorPageStyle.logo_container} h-100`}>
                    <div className={errorPageStyle.oblique}></div>
                    <div className={errorPageStyle.logo}>
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

