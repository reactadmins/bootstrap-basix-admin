import { useState } from "react";
import Card from "@site/src/components/Card/Card";
import { CardBody } from "react-bootstrap";
import BrowserOnly from '@docusaurus/BrowserOnly';

const ApexPieChart = () => {
    const [state, setState] = useState({
        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                type: "donut",
            },
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        },
    });
    return (
        <BrowserOnly>
            {() => {
                const ReactApexChart = require("react-apexcharts").default;

                return (
                    <Card title="Pie Chart">
                        <CardBody>
                            <ReactApexChart
                                options={state.options}
                                series={state.series}
                                type="donut"
                                height={300}
                                style={{ width: "100%" }}
                            />
                        </CardBody>
                    </Card>
                )
            }}
        </BrowserOnly>
    );
};

export default ApexPieChart;

