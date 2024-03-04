import { Fragment, useState } from "react";
import Card from "@/components/Card/Card";
import ReactApexChart from "react-apexcharts";
import { CardBody } from "react-bootstrap";

const RealTime = () => {
    const [close, setClose] = useState(false);
    const [state, setState] = useState({
        series: [
            {
                name: "series2",
                data: [28, 30, 32, 32, 34, 35, 36],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "area",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        },
    });
    return (
        <Fragment>
            {!close ? (
                <Card
                    title="Real Time"
                    icons={[
                        {
                            icon: "fa fa-cog",
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
                        { icon: "fa fa-angle-down" },
                    ]}
                    dismissible={true}
                    onClose={() => setClose(!close)}
                >
                    <CardBody className="p-3">
                        <div className="d-flex justify-content-center align-items-center overflow-hidden">
                            <ReactApexChart
                                options={state.options}
                                series={state.series}
                                type="area"
                                height={446}
                                style={{ width: "100%" }}
                            />
                        </div>
                    </CardBody>
                </Card>
            ) : null}
        </Fragment>
    );
};

export default RealTime;

