import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import brandico from "@/data/brandico.json";
import Card from "@/components/Card/Card";
import CopyButton from "@/components/Icon/CopyButton";
import { CardBody } from "react-bootstrap";
import styles from "@/assets/scss/IconStyle.module.scss";

const Brandico = () => {
    const [search, setSearch] = useState("");
    const [copy, setCopy] = useState();

    return (
        <div
            className={`${styles.icon_container} container-fluid overflow-hidden p-0`}
        >
            <div
                className={`${styles.icon_search} row px-3 py-4 align-items-center`}
            >
                <div className="col-4">
                    <h2 className="fs-3 m-0">{brandico?.name}</h2>
                </div>
                <div className="col-8">
                    <div className="d-flex gap-3 justify-content-cente align-items-center">
                        <Link to="/components/icons">
                            <i className="fa-regular fa-hand-point-left fs-4 text-secondary"></i>
                        </Link>
                        <div className="col-md-4">
                            <div className={`d-flex ${styles.search_wrapper}`}>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="SearchIcon"
                                    placeholder="Search Icon"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <button type="submit" className="btn">
                                    <i className="fa fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <Card title={brandico?.lists?.name}>
                    <CardBody>
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
                                        <div className={styles.icon_wrapper}>
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
                                            <CopyButton
                                                copy={copy}
                                                setCopy={setCopy}
                                                iconsName={icons}
                                                copyId={index}
                                            />
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default Brandico;

