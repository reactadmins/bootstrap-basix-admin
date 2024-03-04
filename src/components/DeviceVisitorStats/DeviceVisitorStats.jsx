import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import styles from "@/assets/scss/DeviceVisitorStats.module.scss";

const DeviceVisitorStats = () => {
    const [state, setState] = useState({
        series: [44, 55, 41],
        options: {
            chart: {
                type: "donut",
            },
            labels: ["Desktop visits", "Tab visits", "Mobile visits"],
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
        <div
            className={`${styles.device_visitor_stats} d-flex justify-content-center align-items-center rounded-0`}
        >
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="donut"
            />
        </div>
    );
};

export default DeviceVisitorStats;

