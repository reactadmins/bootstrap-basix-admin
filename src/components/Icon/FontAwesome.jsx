import { useState } from "react";
import { Link } from "react-router-dom";
import fontAwesome from "../data/font-awesome.json";
import CardContent from "../Card/CardContent";
import { Col, Row } from "react-bootstrap";
import IconStyle from "../../assets/scss/IconStyle.module.scss";

const FontAwesome = () => {
    const [search, setSearch] = useState("");

    return (
        <div
            className={`${IconStyle.container} container-fluid overflow-hidden p-0`}
        >
            <div className="row bg-white px-3 py-4 align-items-center border">
                <div className="col-4">
                    <h2 className="fs-3 m-0">{fontAwesome?.name}</h2>
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
            {fontAwesome?.lists?.map((items, index) => (
                <div className="mt-4" key={index}>
                    <CardContent
                        title={items.name}
                        CardBody={
                            <Row>
                                {items.icons
                                    ?.filter((item) => {
                                        return search.toLowerCase() === ""
                                            ? item
                                            : item
                                                  .toLowerCase()
                                                  .includes(search);
                                    })
                                    .map((item, index) => {
                                        return (
                                            <Col
                                                key={index}
                                                className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                                            >
                                                <div
                                                    className={
                                                        IconStyle.icon_wrapper
                                                    }
                                                >
                                                    <i
                                                        style={{
                                                            fontSize: "30px",
                                                            cursor: "pointer",
                                                        }}
                                                        className={`fa fa-${item}`}
                                                    ></i>
                                                    <span className="mt-2 d-block">
                                                        {item}
                                                    </span>
                                                </div>
                                            </Col>
                                        );
                                    })}
                            </Row>
                        }
                    />
                </div>
            ))}
        </div>
    );
};

export default FontAwesome;

