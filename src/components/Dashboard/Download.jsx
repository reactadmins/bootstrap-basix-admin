import { Fragment, useState } from "react";
import CardContent from "../Card/CardContent";
import ReactApexChart from "react-apexcharts";

const Download = () => {
    const [state, setState] = useState({
        series: [60],
        options: {
            chart: {
                height: 350,
                type: "radialBar",
            },
            plotOptions: {
                color: "red",
                radialBar: {
                    hollow: {
                        size: "60%",
                        background: "#fff",
                    },
                },
            },
            labels: ["Cricket"],
        },
    });
    return (
        <Fragment>
            <CardContent
                title="Download"
                icons={["fa fa-ellipsis-v"]}
                CardBody={
                    <div
                        className="d-flex align-items-center"
                        style={{ height: "258px" }}
                    >
                        <ReactApexChart
                            options={state.options}
                            series={state.series}
                            type="radialBar"
                            height={250}
                        />
                    </div>
                }
            />
        </Fragment>
    );
};

export default Download;

