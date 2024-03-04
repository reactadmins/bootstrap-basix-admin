import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import styles from "@/assets/scss/IconStyle.module.scss";

const Iconviewer = ({ iconList, pathName, prefix }) => {
    return (
        <div className={`${styles.icon_viewer_wrapper} position-relative`}>
            <div className="row gy-5">
                {iconList?.slice(0, 18).map((icon, index) => (
                    <div className="col-2 p-0" key={index}>
                        <div className="d-flex justify-content-center align-items-center">
                            <Icon icon={`${prefix}-${icon}`} />
                        </div>
                    </div>
                ))}
            </div>
            <div
                className="w-100 position-absolute d-flex justify-content-center align-items-center"
                style={{ top: "0", left: "0", bottom: "0" }}
            >
                <Link
                    to={`/components/icons/${pathName}`}
                    className="btn btn-primary px-5"
                >
                    {pathName}
                </Link>
            </div>
        </div>
    );
};

export default Iconviewer;

