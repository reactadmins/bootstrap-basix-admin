import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import CardContent from "../Card/CardContent";
import visitorStyle from "../../assets/scss/Traffic.module.scss";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export const TrafficChartVisitor = () => {
    return (
        <div className={visitorStyle.visitor_wrapper}>
            <span className={`${visitorStyle.title} text-center d-block`}>
                Visits
            </span>
            <h4
                className={`${visitorStyle.counter} counter text-center m-0 text-uppercase pb-1`}
            >
                29.703 Users (40%)
            </h4>
            <div className={visitorStyle.progress}>
                <div
                    className={visitorStyle.progress_bar}
                    role="progressbar"
                    aria-valuenow=""
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        </div>
    );
};

const Traffic = () => {
    return (
        <Fragment>
            <CardContent
                title="Traffic"
                icons={["fa fa-cog", "fa fa-angle-down", "fa fa-times"]}
                CardBody={
                    <ResponsiveContainer width="100%" height={345}>
                        <AreaChart
                            width={1000}
                            height={400}
                            data={[
                                {
                                    name: "Jan",
                                    uv: 25000,
                                    pv: 13000,
                                    amt: 13000,
                                },
                                {
                                    name: "Feb",
                                    uv: 15000,
                                    pv: 27000,
                                    amt: 17000,
                                },
                                {
                                    name: "Mar",
                                    uv: 37000,
                                    pv: 15000,
                                    amt: 35000,
                                },
                                {
                                    name: "Apr",
                                    uv: 25000,
                                    pv: 30000,
                                    amt: 20000,
                                },
                                {
                                    name: "Jun",
                                    uv: 15000,
                                    pv: 20000,
                                    amt: 25000,
                                },
                                {
                                    name: "Jul",
                                    uv: 20000,
                                    pv: 30000,
                                    amt: 27000,
                                },
                                {
                                    name: "Aug",
                                    uv: 30000,
                                    pv: 14000,
                                    amt: 23000,
                                },
                                {
                                    name: "Sep",
                                    uv: 25000,
                                    pv: 14000,
                                    amt: 20000,
                                },
                                {
                                    name: "Oct",
                                    uv: 18000,
                                    pv: 23000,
                                    amt: 18000,
                                },
                                {
                                    name: "Nov",
                                    uv: 35000,
                                    pv: 16000,
                                    amt: 35000,
                                },
                                {
                                    name: "Dec",
                                    uv: 17000,
                                    pv: 30000,
                                    amt: 20000,
                                },
                                {
                                    name: "",
                                    uv: 14000,
                                    pv: 18000,
                                    amt: 25000,
                                },
                            ]}
                            fontSize="11px"
                            color="#999999"
                            margin={{
                                top: 10,
                                right: 10,
                                left: -10,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area
                                connectNulls
                                type="monotone"
                                dataKey="amt"
                                stroke="#93CF96"
                                fill="#93CF96"
                            />
                            <Area
                                connectNulls
                                type="monotone"
                                dataKey="pv"
                                stroke="#D47765"
                                fill="#D47765"
                            />
                            <Area
                                connectNulls
                                type="monotone"
                                dataKey="uv"
                                stroke="#5C6BC0"
                                fill="#5C6BC0"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                }
                CardFooter={
                    <Row
                        className="gy-4 gx-4 mb-4"
                        style={{ padding: "8px 48px 17px" }}
                    >
                        <Col sm={12} md={4}>
                            <TrafficChartVisitor />
                        </Col>
                        <Col sm={12} md={4}>
                            <TrafficChartVisitor />
                        </Col>
                        <Col sm={12} md={4}>
                            <TrafficChartVisitor />
                        </Col>
                    </Row>
                }
            />
        </Fragment>
    );
};

export default Traffic;

