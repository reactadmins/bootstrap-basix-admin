import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useDashboardDataContext } from "../../context/dashboardDataContext";

const DeviceVisitorStats = () => {
    const { isDark } = useDashboardDataContext();
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
            className="d-flex justify-content-center align-items-center rounded-0"
            style={{
                height: "147px",
                backgroundColor: `${
                    isDark ? "var(--bg-content)" : "var(--bg-content)"
                }`,
                border: `${isDark ? "1px solid var(--border-color)" : "0"}`,
            }}
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

