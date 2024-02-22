import { useState } from "react";
import Card from "@site/src/components/Card/Card";
import { CardBody } from "react-bootstrap";
import BrowserOnly from '@docusaurus/BrowserOnly';

const ColumnChart = () => {
    const [state, setState] = useState({
        series: [
            {
                name: "Inflation",
                data: [
                    2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2,
                ],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "bar",
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: "top", // top, center, bottom
                    },
                },
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%";
                },
                offsetY: -20,
                style: {
                    fontSize: "12px",
                    colors: ["#304758"],
                },
            },

            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                position: "top",
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                crosshairs: {
                    fill: {
                        type: "gradient",
                        gradient: {
                            colorFrom: "#D8E3F0",
                            colorTo: "#BED1E6",
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        },
                    },
                },
                tooltip: {
                    enabled: true,
                },
            },
            yaxis: {
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val + "%";
                    },
                },
            },
            title: {
                text: "Monthly Inflation in Argentina, 2002",
                floating: true,
                offsetY: 330,
                align: "center",
                style: {
                    color: "#444",
                },
            },
        },
    });
    return (
        <BrowserOnly>
            {() => {
                const ReactApexChart = require("react-apexcharts").default;

                return (
                    <Card title="Column Chart">
                        <CardBody>
                            <div className="d-flex justify-content-center align-items-center overflow-hidden">
                                <ReactApexChart
                                    options={state.options}
                                    series={state.series}
                                    type="bar"
                                    height={300}
                                    style={{ width: "100%" }}
                                />
                            </div>
                        </CardBody>
                    </Card>
                )
            }}
        </BrowserOnly>
        
    );
};

export default ColumnChart;

