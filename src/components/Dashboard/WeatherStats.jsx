import { useState } from "react";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

export const Stats = ({ title, counter, Symbol }) => {
    return (
        <div className="text-center" style={{ width: "33%" }}>
            <span
                className="text-uppercase fw-normal"
                style={{ fontSize: " 14px", color: "#868e96" }}
            >
                {title}
            </span>
            <span
                className="d-block fw-semibold"
                style={{
                    color: "#333648",
                    fontSize: " 13px",
                }}
            >
                {counter}
                {Symbol}
            </span>
        </div>
    );
};

const WeatherStats = () => {
    const [isOpen, setIsOpen] = useState();
    return (
        <Card className="border-0 rounded-0">
            <CardHeader
                className="border-0 rounded-0 d-flex justify-content-between align-items-center"
                style={{ padding: "12px 18px", backgroundColor: "#ffa726" }}
            >
                <h2
                    className="text-white mb-0 fw-semibold"
                    style={{
                        fontSize: "0.875em",
                    }}
                >
                    Weather
                </h2>
                <button
                    type="button"
                    className="border-0 bg-transparent text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <i className="fa fa-ellipsis-v"></i>
                </button>
                {isOpen ? (
                    <div
                        className="card-setting"
                        style={{ top: "40px", right: "10px" }}
                    >
                        <button type="button">
                            <i className="fa-solid fa-gear"></i>
                            Edit
                        </button>
                        <button type="button">
                            <i className="fa-solid fa-trash"></i>
                            Delete
                        </button>
                        <button type="button">
                            <i className="fa-solid fa-recycle"></i>
                            Update
                        </button>
                    </div>
                ) : (
                    ""
                )}
            </CardHeader>
            <Card.Body className="p-0 bg-white">
                <div
                    className="p-4 pt-0 pb-2 d-flex justify-content-between align-items-center"
                    style={{ backgroundColor: "#ffa726" }}
                >
                    <span style={{ fontSize: "3.75em" }}>
                        <i className="fa fa-cloud text-white"></i>
                    </span>
                    <div>
                        <h3
                            className="text-white mb-0"
                            style={{ fontSize: "1.125em", fontWeight: "400" }}
                        >
                            Partly Cloudy
                        </h3>
                        <span
                            className="text-white text-end d-block"
                            style={{ fontSize: "12px", marginTop: "5px" }}
                        >
                            Sunday, April 2023
                        </span>
                    </div>
                </div>
                <div className="p-4 d-flex justify-content-between align-items-center">
                    <div>
                        <h5 className="text-uppercase fs-6 fw-normal mb-0">
                            New York
                        </h5>
                        <span
                            className="text-uppercase fw-normal"
                            style={{
                                fontSize: "14px",
                                color: "#868e96",
                                marginTop: "4px",
                            }}
                        >
                            Usa
                        </span>
                    </div>
                    <div
                        className="d-flex align-items-baseline"
                        style={{ paddingRight: "15px" }}
                    >
                        <h2
                            className="mb-0 fw-normal"
                            style={{ fontSize: "2rem" }}
                        >
                            21
                        </h2>
                        <span
                            className="d-block"
                            style={{ fontSize: "14px", color: "#868e96" }}
                        >
                            °C
                        </span>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className="bg-white">
                <div className="d-flex justify-content-between align-items-center">
                    <Stats title="Feels" counter={23} Symbol="°" />
                    <hr
                        className="mx-3"
                        style={{
                            width: "1px",
                            height: "32px",
                            backgroundColor: "rgb(18 18 18)",
                        }}
                    />
                    <Stats title="Humidity" counter={37} Symbol="%" />
                    <hr
                        className="mx-3"
                        style={{
                            width: "1px",
                            height: "32px",
                            backgroundColor: "rgb(18 18 18)",
                        }}
                    />
                    <Stats title="Wind" counter={4} Symbol=" km/h" />
                </div>
            </Card.Footer>
        </Card>
    );
};

export default WeatherStats;

