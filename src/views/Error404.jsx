import logo from "@/assets/image/logo.png";
import { Link } from "react-router-dom";
import styles from "@/assets/scss/Authentication.module.scss";

const Page404 = () => {
    return (
        <div className={styles.auth_wrapper}>
            <div className={`${styles.error_container} h-100`}>
                <div>
                    <div style={{ marginLeft: "20px" }}>
                        <h1 className={styles.error_code}>404</h1>
                        <h5 className={styles.error_title}>
                            Oops!{" You'"}re lost.
                        </h5>
                        <p className={styles.error_description}>
                            The page you are looking <br /> for was not found.
                        </p>
                    </div>
                    <div className={`${styles.input_group} input-group`}>
                        <button
                            type="button"
                            className={styles.error_search_btn}
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
                            className={styles.error_submit_btn}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${styles.logo_container} h-100`}>
                <div className={styles.oblique}></div>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page404;

