import { useState } from "react";
import Card from "@/components/Card/Card";
import ReactApexChart from "react-apexcharts";
import { CardBody } from "react-bootstrap";

const Download = () => {
    const [state, setState] = useState({
        series: [60],
        options: {
            chart: {
                height: 350,
                type: "radialBar",
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "60%",
                        background: "transparent",
                    },
                },
            },
            labels: ["Cricket", "ract"],
        },
    });
    return (
        <Card
            title="Download"
            icons={[
                {
                    icon: "fa fa-ellipsis-v",
                    dropdown: [
                        {
                            label: "Edit",
                            icon: "fa fa-cog",
                            method: () => alert("Cog"),
                        },
                        {
                            label: "Delete",
                            icon: "fa-solid fa-trash",
                            method: () => alert("Delete"),
                        },
                        {
                            label: "Update",
                            icon: "fa-solid fa-recycle",
                            method: () => alert("Update"),
                        },
                    ],
                },
            ]}
        >
            <CardBody>
                <div
                    className="d-flex align-items-center"
                    style={{ height: "255px" }}
                >
                    <ReactApexChart
                        options={state.options}
                        series={state.series}
                        type="radialBar"
                        height={250}
                    />
                </div>
            </CardBody>
        </Card>
    );
};

export default Download;

