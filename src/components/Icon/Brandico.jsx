import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import brandico from "../data/brandico.json";
import CardContent from "../Card/CardContent";
import IconStyle from "../../assets/scss/IconStyle.module.scss";

const Brandico = () => {
    const [search, setSearch] = useState("");

    return (
        <div
            className={`${IconStyle.container} container-fluid overflow-hidden p-0`}
        >
            <div className="row bg-white px-3 py-4 align-items-center border">
                <div className="col-4">
                    <h2 className="fs-3 m-0">{brandico?.name}</h2>
                </div>
                <div className="col-8">
                    <div className="d-flex gap-3 justify-content-cente align-items-center">
                        <Link to="/components/icons">
                            <i className="fa-regular fa-hand-point-left fs-4 text-secondary"></i>
                        </Link>
                        <div className="col-md-4">
                            <div className="form-group ">
                                <form action="" className="d-flex gap-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="SearchIcon"
                                        placeholder="Search Icon"
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                    >
                                        <i className="fa fa fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <CardContent
                    title={brandico?.lists?.name}
                    CardBody={
                        <div className="row  m-0">
                            {brandico?.lists?.icons
                                ?.filter((item) => {
                                    return search.toLowerCase() === ""
                                        ? item
                                        : item.toLowerCase().includes(search);
                                })
                                .map((icons, index) => (
                                    <div
                                        className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                                        key={index}
                                    >
                                        <div className={IconStyle.icon_wrapper}>
                                            <Icon
                                                style={{
                                                    fontSize: "30px",
                                                    cursor: "pointer",
                                                }}
                                                icon={`${brandico?.href}-${icons}`}
                                            />
                                            <span className="mt-2 d-block">
                                                {icons}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    }
                />
            </div>
        </div>
    );
};

export default Brandico;

