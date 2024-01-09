import { Col, Container, Row } from "react-bootstrap";
import { Bar, BarChart, Line, LineChart } from "recharts";
import StatsCard from "../components/Dashboard/StatsCard";
import Timeseries from "../components/Dashboard/Timeseries";
import Traffic from "../components/Dashboard/Traffic";
import Earning from "../components/Dashboard/Earning";
import Download from "../components/Dashboard/Download";
import Revenue from "../components/Dashboard/Revenue";
import Stats from "../components/Dashboard/Stats/Stats";
import SocialCounter from "../components/Dashboard/SocialCounter";
import Timeline from "../components/Dashboard/Timeline";
import AnalyticsStats from "../components/Dashboard/AnalyticsStats";
import WeatherStats from "../components/Dashboard/WeatherStats";
import UserStats from "../components/Dashboard/UserStats";
import MonthlyStats from "../components/Dashboard/MonthlyStats";
import DeviceVisitorStats from "../components/Chart/DeviceVisitorStats";
import Alert from "../components/Alert/Alert";

const Dashboard = () => {
    return (
        <Container fluid className="p-0">
            {/* start alert section */}
            <Alert
                type="dismissible"
                title="You successfully read this important alert message."
                badgeTitle="Success"
                alertBg="success"
            />
            {/* end alert section */}

            {/* start revenue section */}
            <Row className="gy-4 gx-4 mb-4">
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue_card"
                        cardBg="#5c6bc0"
                        iconDirection="right"
                        symbol="$"
                        counter={23569}
                        isCounter={true}
                        title="Revenue"
                        icon="fa-solid fa-cart-shopping"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue_card"
                        cardBg="#66bb6a"
                        iconDirection="right"
                        symbol="%"
                        symbolDirection="right"
                        counter={85}
                        isCounter={true}
                        title="Sales Increase"
                        icon={
                            <>
                                <BarChart
                                    width={100}
                                    height={80}
                                    data={[
                                        {
                                            name: "Page A",
                                            uv: 2000,
                                            pv: 2400,
                                            amt: 2400,
                                        },
                                        {
                                            name: "Page B",
                                            uv: 6000,
                                            pv: 1398,
                                            amt: 2210,
                                        },
                                        {
                                            name: "Page C",
                                            uv: 4000,
                                            pv: 9800,
                                            amt: 2290,
                                        },
                                        {
                                            name: "Page D",
                                            uv: 8000,
                                            pv: 3908,
                                            amt: 2000,
                                        },
                                        {
                                            name: "Page E",
                                            uv: 4000,
                                            pv: 4800,
                                            amt: 2181,
                                        },
                                        {
                                            name: "Page F",
                                            uv: 6000,
                                            pv: 3800,
                                            amt: 2500,
                                        },
                                        {
                                            name: "Page G",
                                            uv: 2000,
                                            pv: 4300,
                                            amt: 2100,
                                        },
                                        {
                                            name: "Page G",
                                            uv: 5000,
                                            pv: 4300,
                                            amt: 2100,
                                        },
                                    ]}
                                >
                                    <Bar dataKey="uv" fill="#fff" />
                                </BarChart>
                            </>
                        }
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue_card"
                        cardBg="#ffa726"
                        iconDirection="right"
                        counter={6596}
                        isCounter={true}
                        title="Total Clients"
                        icon="fa-solid fa-user-group"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue_card"
                        cardBg="#42a5f5"
                        iconDirection="right"
                        counter={1490}
                        isCounter={true}
                        title="New Users"
                        icon={
                            <>
                                <>
                                    <LineChart
                                        width={100}
                                        height={67}
                                        data={[
                                            {
                                                name: "Page A",
                                                uv: 400,
                                                pv: 400,
                                                amt: 2400,
                                            },
                                            {
                                                name: "Page B",
                                                uv: 30,
                                                pv: 25000,
                                                amt: 2210,
                                            },
                                            {
                                                name: "Page C",
                                                uv: 10,
                                                pv: 10500,
                                                amt: 2290,
                                            },
                                            {
                                                name: "Page D",
                                                uv: 20,
                                                pv: 50000,
                                                amt: 2000,
                                            },
                                        ]}
                                    >
                                        <Line
                                            type="monotone"
                                            dataKey="pv"
                                            stroke="#fff"
                                            strokeWidth={2}
                                        />
                                    </LineChart>
                                </>
                            </>
                        }
                    />
                </Col>
            </Row>
            {/* end revenue section */}

            {/* start timeseries and traffic  section */}
            <Row className="gy-4 gx-4 mb-4">
                <Col md={12} lg={4} xl={4}>
                    <Timeseries />
                </Col>
                <Col md={12} lg={8} xl={8}>
                    <Traffic />
                </Col>
            </Row>
            {/* end timeseries and traffic  section */}

            {/* start earning and download  revenue section */}
            <Row className="gy-4 gx-4 mb-4">
                <Col cmd={12} lg={6} xl={6}>
                    <Earning />
                </Col>
                <Col cmd={12} lg={6} xl={6}>
                    <Row className="gy-4 gx-4">
                        <Col sm={12} md={6}>
                            <Download />
                        </Col>
                        <Col sm={12} md={6}>
                            <Revenue />
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* end earning and download  revenue section */}

            {/* start user table, social counter & timeline section */}
            <Row className="gy-4 gx-4 mb-4">
                <Col md={12} lg={8} xl={8}>
                    <Col className="mb-4" sm={12}>
                        <Stats />
                    </Col>
                    <Row className="gy-4 gx-4">
                        <Col sm={12} md={4}>
                            <SocialCounter
                                background="#1DA1F2"
                                icon="fa-brands fa-twitter"
                                count="1875980"
                                countType={true}
                            />
                        </Col>
                        <Col sm={12} md={4}>
                            <SocialCounter
                                background="#3B5998"
                                icon="fa-brands fa-facebook-f"
                                count="1875980"
                                countType={true}
                            />
                        </Col>
                        <Col sm={12} md={4}>
                            <SocialCounter
                                background="#833AB4"
                                icon="fa-brands fa-instagram"
                                count="1875980"
                                countType={true}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col md={12} lg={4} xl={4}>
                    <Timeline />
                </Col>
            </Row>
            {/* end user table, social counter & timeline section */}

            {/* start analytics stats, weather stats, user stats, monthly stats & device visitor stats section */}
            <Row className="gy-4 gx-4">
                <Col className="" md={12} lg={6}>
                    <AnalyticsStats />
                </Col>
                <Col md={12} lg={6}>
                    <Row className="gy-4 gx-4">
                        <Col md={6}>
                            <WeatherStats />
                        </Col>
                        <Col md={6}>
                            <UserStats />
                        </Col>
                    </Row>
                    <Col className="mt-4">
                        <Row className="gy-4 gx-4">
                            <Col md={6}>
                                <MonthlyStats />
                            </Col>
                            <Col md={6}>
                                <DeviceVisitorStats />
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
            {/* end analytics stats, weather stats, user stats, monthly stats & device visitor stats section */}
        </Container>
    );
};

export default Dashboard;

