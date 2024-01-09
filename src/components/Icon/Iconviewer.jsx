import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Iconviewer = ({ iconList, pathName, prefix }) => {
    return (
        <div
            className="position-relative"
            style={{ backgroundColor: "#EEEEEE", padding: "30px" }}
        >
            <div className="row gy-5">
                {iconList?.slice(0, 18).map((icon, index) => (
                    <div className="col-2 p-0" key={index}>
                        <div className="d-flex justify-content-center align-items-center">
                            <Icon
                                style={{
                                    fontSize: ".85rem",
                                    cursor: "pointer",
                                }}
                                icon={`${prefix}-${icon}`}
                            />
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

