import React, { useState } from "react";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import admin from "../../assets/img/admin.jpg";

export const Stats = ({ icon, counter }) => {
    return (
        <div className="text-center" style={{ width: "33%" }}>
            <i
                className={icon}
                style={{ color: "#868e96", fontSize: "20px" }}
            ></i>
            <span
                className="d-block fw-semibold"
                style={{
                    color: "#333648",
                    fontSize: " 13px",
                }}
            >
                {counter}
            </span>
        </div>
    );
};

const UserStats = () => {
    const [isOpen, setIsOpen] = useState();
    return (
        <Card className="border-0 rounded-0">
            <CardHeader
                className="border-0 rounded-0 d-flex justify-content-end align-items-center"
                style={{ padding: "12px 18px", backgroundColor: "#5c6bc0" }}
            >
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
            <Card.Body className="p-0">
                <div style={{ backgroundColor: "#5c6bc0", height: "100px" }}>
                    <h5 className="fs-6 fw-medium text-white text-center">
                        Martin Luther
                    </h5>
                </div>
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                        position: "relative",
                        marginTop: "-64px",
                        marginBottom: "30px",
                    }}
                >
                    <img
                        className="rounded-circle"
                        src={admin}
                        alt="user"
                        style={{ width: "130px" }}
                    />
                </div>
            </Card.Body>
            <Card.Footer className="p-3 py-2 bg-white">
                <div className="d-flex justify-content-between align-items-center">
                    <Stats icon="fa-solid fa-thumbs-up" counter={3548} />
                    <hr
                        className="mx-3"
                        style={{
                            width: "1px",
                            height: "32px",
                            backgroundColor: "rgb(18 18 18)",
                        }}
                    />
                    <Stats icon="fa-solid fa-user-group" counter={23548} />
                    <hr
                        className="mx-3"
                        style={{
                            width: "1px",
                            height: "32px",
                            backgroundColor: "rgb(18 18 18)",
                        }}
                    />
                    <Stats icon="fa-solid fa-message" counter={3548} />
                </div>
            </Card.Footer>
        </Card>
    );
};

export default UserStats;

