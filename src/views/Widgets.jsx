import { Col, Container, Row } from "react-bootstrap";
import { BarChart, Bar, LineChart, Line } from "recharts";
import StatsCard from "../components/Dashboard/StatsCard";
import SocialCounter from "../components/Dashboard/SocialCounter";
import UserInfo from "../components/UserInfo/UserInfo";
import NotificationStatsCart from "../components/Card/NotificationStatsCart";
import ProfileCard from "../components/Card/ProfileCard";
import OverlayCard from "../components/Card/OverlayCard";

const Widgets = () => {
    return (
        <Container fluid className="p-0">
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
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="user_info"
                        counter={1490}
                        isCounter={true}
                        title="Total Profit"
                        icon="fa-sharp fa-solid fa-dollar-sign"
                        iconCorverWidth="66px"
                        iconCorverHeight="66px"
                        isBorder={true}
                        borderColor="#28a745"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="user_info"
                        counter={961}
                        isCounter={true}
                        title="New Customer"
                        icon="fa-sharp fa-solid fa-user"
                        iconCorverWidth="66px"
                        iconCorverHeight="66px"
                        isBorder={true}
                        borderColor="#007bff"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="user_info"
                        counter={770}
                        isCounter={true}
                        title="Active Projects"
                        icon="fa-solid fa-table-cells-large"
                        iconCorverWidth="66px"
                        iconCorverHeight="66px"
                        isBorder={true}
                        borderColor="#ffc107"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="user_info"
                        counter={2781}
                        isCounter={true}
                        title="Referrals"
                        icon="fa-sharp fa-solid fa-link"
                        iconCorverWidth="66px"
                        iconCorverHeight="66px"
                        isBorder={true}
                        borderColor="#dc3545"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="user_info"
                        counter={765}
                        isCounter={true}
                        title="Database"
                        icon="fa-solid fa-database"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="user_info"
                        counter={24720}
                        isCounter={true}
                        title="Users"
                        icon="fa-sharp fa-regular fa-user"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="user_info"
                        symbol="$"
                        counter={7658714}
                        isCounter={true}
                        title="Daily Sales"
                        icon="fa-solid fa-chart-line"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="user_info"
                        symbol="TB"
                        symbolDirection="right"
                        counter={4}
                        title="Bandwidth"
                        icon="fa-solid fa-wave-square"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue_card"
                        cardBg="#5c6bc0"
                        symbol="%"
                        symbolDirection="right"
                        counter={89}
                        isCounter={true}
                        title="Lorem ipsum..."
                        isProgress={true}
                        progressPercent={25}
                        progressBarTitle="Lorem ipsum dolor sit amet enim."
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue_card"
                        cardBg="#ffa726"
                        counter={12124}
                        isCounter={true}
                        title="Lorem ipsum..."
                        isProgress={true}
                        progressPercent={25}
                        progressBarTitle="Lorem ipsum dolor sit amet enim."
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue_card"
                        cardBg="#ef5350"
                        symbol="$"
                        counter={9811100}
                        isCounter={true}
                        title="Lorem ipsum..."
                        isProgress={true}
                        progressPercent={25}
                        progressBarTitle="Lorem ipsum dolor sit amet enim."
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue_card"
                        cardBg="#42a5f5"
                        symbol="$"
                        counter={9811100}
                        isCounter={true}
                        title="Lorem ipsum..."
                        isProgress={true}
                        progressPercent={25}
                        progressBarTitle="Lorem ipsum dolor sit amet enim."
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="earning_card"
                        icon="fa-sharp fa-solid fa-gears"
                        iconCorverWidth="45px"
                        iconCorverHeight="45px"
                        iconBg="#4dbd74"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="earning_card"
                        icon="fa-sharp fa-solid fa-laptop"
                        iconCorverWidth="45px"
                        iconCorverHeight="45px"
                        iconBg="#17a2b8"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="earning_card"
                        icon="fa-sharp fa-regular fa-moon"
                        iconCorverWidth="45px"
                        iconCorverHeight="45px"
                        iconBg="#ffc107"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="earning_card"
                        icon="fa-sharp fa-solid fa-bell"
                        iconCorverWidth="45px"
                        iconCorverHeight="45px"
                        iconBg="#dc3545"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="earning_card"
                        icon="fa-sharp fa-solid fa-gears"
                        iconCorverWidth="45px"
                        iconCorverHeight="45px"
                        iconBg="#4dbd74"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                        ViewMore={true}
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="earning_card"
                        icon="fa-sharp fa-solid fa-laptop"
                        iconCorverWidth="45px"
                        iconCorverHeight="45px"
                        iconBg="#17a2b8"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                        ViewMore={true}
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="earning_card"
                        icon="fa-sharp fa-regular fa-moon"
                        iconCorverWidth="45px"
                        iconCorverHeight="45px"
                        iconBg="#ffc107"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                        ViewMore={true}
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="earning_card"
                        icon="fa-sharp fa-solid fa-bell"
                        iconCorverWidth="45px"
                        iconCorverHeight="45px"
                        iconBg="#dc3545"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                        ViewMore={true}
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="earning_card"
                        padding="0px"
                        icon="fa-sharp fa-solid fa-gears"
                        iconCorverWidth="70px"
                        iconCorverHeight="70px"
                        iconBg="#4dbd74"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="earning_card"
                        padding="0px"
                        icon="fa-sharp fa-solid fa-laptop"
                        iconCorverWidth="70px"
                        iconCorverHeight="70px"
                        iconBg="#17a2b8"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="earning_card"
                        padding="0px"
                        icon="fa-sharp fa-regular fa-moon"
                        iconCorverWidth="70px"
                        iconCorverHeight="70px"
                        iconBg="#ffc107"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="earning_card"
                        padding="0px"
                        icon="fa-sharp fa-solid fa-bell"
                        iconCorverWidth="70px"
                        iconCorverHeight="70px"
                        iconBg="#dc3545"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="earning_card"
                        padding="0px"
                        icon="fa-sharp fa-solid fa-gears"
                        iconCorverWidth="100px"
                        iconCorverHeight="70px"
                        iconBg="#4dbd74"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="earning_card"
                        padding="0px"
                        icon="fa-sharp fa-solid fa-laptop"
                        iconCorverWidth="100px"
                        iconCorverHeight="70px"
                        iconBg="#17a2b8"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="earning_card"
                        padding="0px"
                        icon="fa-sharp fa-regular fa-moon"
                        iconCorverWidth="100px"
                        iconCorverHeight="70px"
                        iconBg="#ffc107"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="earning_card"
                        padding="0px"
                        icon="fa-sharp fa-solid fa-bell"
                        iconCorverWidth="100px"
                        iconCorverHeight="70px"
                        iconBg="#dc3545"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                    />
                </Col>
            </Row>
            {/* end revenue section */}

            {/* start social counter section */}
            <Row className="gy-4 gx-4 mb-4">
                <Col sm={12} md={6} lg={3}>
                    <SocialCounter
                        background="#3B5998"
                        padding="40px"
                        icon="fa-brands fa-facebook-f"
                        count="1875980"
                        position="top"
                        socialUser={{
                            followers: 40,
                            countType: "K",
                            followersType: "Friends",
                            usre: 40,
                            feeds: "feeds",
                        }}
                    />
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <SocialCounter
                        background="#00ACED"
                        padding="40px"
                        icon="fa-brands fa-twitter"
                        count="1875980"
                        position="top"
                        socialUser={{
                            followers: 30,
                            countType: "K",
                            followersType: "Friends",
                            usre: 450,
                            feeds: "TWEETS",
                        }}
                    />
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <SocialCounter
                        background="#4875B4"
                        padding="40px"
                        icon="fa-brands fa-linkedin-in"
                        count="1875980"
                        position="top"
                        socialUser={{
                            followers: 40,
                            countType: "+",
                            followersType: "CONTACTS",
                            usre: 250,
                            feeds: "feeds",
                        }}
                    />
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <SocialCounter
                        background="#D34836"
                        padding="40px"
                        icon="fa-brands fa-google-plus-g "
                        count="1875980"
                        position="top"
                        socialUser={{
                            followers: 894,
                            countType: "K",
                            followersType: "FOLLOWERS",
                            usre: 92,
                            feeds: "CIRCLES",
                        }}
                    />
                </Col>
            </Row>
            {/* end user table and social counter section */}

            {/* start user info section */}
            <Row className="mb-4" style={{ padding: "0 12px" }}>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserInfo
                        icon="fa-solid fa-users"
                        conunt={87500}
                        title="Visitors"
                        ProgressBarBg="#5c6bc0"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserInfo
                        icon="fa-solid fa-user-plus"
                        conunt={385}
                        title="New Clients"
                        ProgressBarBg="#42a5f5"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserInfo
                        icon="fa-solid fa-cart-plus"
                        conunt={1238}
                        title="Products sold"
                        ProgressBarBg="#ffa726"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserInfo
                        icon="fa-solid fa-chart-pie"
                        conunt={28 + "%"}
                        title="Returning Visitors"
                        ProgressBarBg="#ef5350"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserInfo
                        icon="fa-regular fa-clock"
                        conunt="5:34:11"
                        title="Avg. Time"
                        ProgressBarBg="#4dbd74"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0 mb-4" sm={12} md={6} lg={2} xl={2}>
                    <UserInfo
                        icon="fa-regular fa-comments"
                        conunt={972}
                        title="COMMENTS"
                        ProgressBarBg="#5c6bc0"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserInfo
                        cardBg="#5c6bc0"
                        icon="fa-solid fa-users"
                        iconfontSize="2xl"
                        conunt={87500}
                        title="Visitors"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserInfo
                        cardBg="#42a5f5"
                        icon="fa-solid fa-user-plus"
                        iconfontSize="2xl"
                        conunt={385}
                        title="New Clients"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserInfo
                        cardBg="#ffa726"
                        icon="fa-solid fa-cart-plus"
                        iconfontSize="2xl"
                        conunt={1238}
                        title="Products sold"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserInfo
                        cardBg="#ef5350"
                        icon="fa-solid fa-chart-pie"
                        iconfontSize="2xl"
                        conunt={28 + "%"}
                        title="Returning Visitors"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserInfo
                        cardBg="#4dbd74"
                        icon="fa-regular fa-clock"
                        iconfontSize="2xl"
                        conunt="5:34:11"
                        title="Avg. Time"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserInfo
                        cardBg="#5c6bc0"
                        icon="fa-regular fa-comments"
                        iconfontSize="2xl"
                        conunt={972}
                        title="COMMENTS"
                        progressPercent={40}
                    />
                </Col>
            </Row>
            {/* end user info section */}

            {/* start notification card, profile card & overlay card section */}
            <Row className="gy-4 gx-4">
                <Col sm={12} md={6} lg={4}>
                    <NotificationStatsCart />
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <ProfileCard headerTitle="Profile Card" headerIcon="" />
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <OverlayCard />
                </Col>
            </Row>
            {/* emd notification card, profile card & overlay card section */}
        </Container>
    );
};

export default Widgets;

