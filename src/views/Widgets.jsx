import { CardBody, Col, Container, Row } from "react-bootstrap";
import { BarChart, Bar, LineChart, Line } from "recharts";
import StatsCard from "@/components/StatsCard/StatsCard";
import Card from "@/components/Card/Card";
import SocialCounter from "@/components/SocialCounter/SocialCounter";
import UserStats from "@/components/UserStats/UserStats";
import NotificationStatsCart from "@/components/NotificationStatsCart/NotificationStatsCart";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import OverlayCard from "@/components/OverlayCard/OverlayCard";
import userImg from "@/assets/image/admin.jpg";

const Widgets = () => {
    const data1 = [
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
    ];

    const data2 = [
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
    ];
    return (
        <Container fluid className="p-0">
            {/* start revenue section */}
            <Row className="gy-4 gx-4 mb-4">
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-counter"
                        bgColor="#5c6bc0"
                        symbol="$"
                        counter={23569}
                        isCounter={true}
                        title="Revenue"
                        icon="fa-solid fa-cart-shopping"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-counter"
                        bgColor="#66bb6a"
                        symbolPosition="right"
                        symbol="%"
                        counter={23569}
                        isCounter={true}
                        title="Revenue"
                        icon={
                            <BarChart width={100} height={80} data={data1}>
                                <Bar dataKey="uv" fill="#fff" />
                            </BarChart>
                        }
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-counter"
                        bgColor="#ffa726"
                        counter={6596}
                        isCounter={true}
                        title="Total Clients"
                        icon="fa-solid fa-user-group"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-counter"
                        bgColor="#42a5f5"
                        counter={1490}
                        isCounter={true}
                        title="New Users"
                        icon={
                            <LineChart width={100} height={67} data={data2}>
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#fff"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        }
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="user-info"
                        counter={1490}
                        isCounter={true}
                        title="Total Profit"
                        icon="fa-sharp fa-solid fa-dollar-sign"
                        isIconBorder={true}
                        borderColor="#28a745"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="user-info"
                        counter={961}
                        isCounter={true}
                        title="New Customer"
                        icon="fa-sharp fa-solid fa-user"
                        isIconBorder={true}
                        borderColor="#007bff"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="user-info"
                        counter={770}
                        isCounter={true}
                        title="Active Projects"
                        icon="fa-solid fa-table-cells-large"
                        isIconBorder={true}
                        borderColor="#ffc107"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="user-info"
                        counter={2781}
                        isCounter={true}
                        title="Referrals"
                        icon="fa-sharp fa-solid fa-link"
                        isIconBorder={true}
                        borderColor="#dc3545"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="user-info"
                        counter={765}
                        isCounter={true}
                        title="Database"
                        icon="fa-solid fa-database"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="user-info"
                        counter={24720}
                        isCounter={true}
                        title="Users"
                        icon="fa-sharp fa-regular fa-user"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="user-info"
                        counter={7658714}
                        isCounter={true}
                        symbolPosition="left"
                        symbol="$"
                        title="Daily Sales"
                        icon="fa-solid fa-chart-line"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="user-info"
                        counter="4TB"
                        title="Bandwidth"
                        icon="fa-solid fa-wave-square"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-progressBar"
                        bgColor="#5c6bc0"
                        symbol="%"
                        symbolPosition="right"
                        counter={89}
                        isCounter={true}
                        title="Lorem ipsum..."
                        progressPercent={25}
                        description="Lorem ipsum dolor sit amet enim."
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-progressBar"
                        bgColor="#ffa726"
                        counter={12124}
                        isCounter={true}
                        title="Lorem ipsum..."
                        progressPercent={25}
                        description="Lorem ipsum dolor sit amet enim."
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-progressBar"
                        bgColor="#ef5350"
                        symbol="$"
                        counter={9811100}
                        isCounter={true}
                        title="Lorem ipsum..."
                        progressPercent={25}
                        description="Lorem ipsum dolor sit amet enim."
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-progressBar"
                        bgColor="#42a5f5"
                        symbol="$"
                        counter={9811100}
                        isCounter={true}
                        title="Lorem ipsum..."
                        progressPercent={25}
                        description="Lorem ipsum dolor sit amet enim."
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-earning"
                        icon="fa-sharp fa-solid fa-gears"
                        bgColor="#4dbd74"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-earning"
                        icon="fa-sharp fa-solid fa-laptop"
                        bgColor="#17a2b8"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-earning"
                        icon="fa-sharp fa-regular fa-moon"
                        bgColor="#ffc107"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-earning"
                        icon="fa-sharp fa-solid fa-bell"
                        bgColor="#dc3545"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-earning"
                        icon="fa-sharp fa-solid fa-gears"
                        bgColor="#4dbd74"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                        isViewMore={true}
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-earning"
                        icon="fa-sharp fa-solid fa-laptop"
                        bgColor="#17a2b8"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                        isViewMore={true}
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-earning"
                        icon="fa-sharp fa-regular fa-moon"
                        bgColor="#ffc107"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                        isViewMore={true}
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-earning"
                        icon="fa-sharp fa-solid fa-bell"
                        bgColor="#dc3545"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                        isViewMore={true}
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-earning"
                        icon="fa-sharp fa-solid fa-gears"
                        bgColor="#4dbd74"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                        padding="0"
                        width="70px"
                        height="70px"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-earning"
                        icon="fa-sharp fa-solid fa-laptop"
                        bgColor="#17a2b8"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                        padding="0"
                        width="70px"
                        height="70px"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-earning"
                        icon="fa-sharp fa-regular fa-moon"
                        bgColor="#ffc107"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                        padding="0"
                        width="70px"
                        height="70px"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-earning"
                        icon="fa-sharp fa-solid fa-bell"
                        bgColor="#dc3545"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                        padding="0"
                        width="70px"
                        height="70px"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-earning"
                        icon="fa-sharp fa-solid fa-gears"
                        bgColor="#4dbd74"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                        padding="0"
                        width="100px"
                        height="70px"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-earning"
                        icon="fa-sharp fa-solid fa-laptop"
                        bgColor="#17a2b8"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                        padding="0"
                        width="100px"
                        height="70px"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-earning"
                        icon="fa-sharp fa-regular fa-moon"
                        bgColor="#ffc107"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                        padding="0"
                        width="100px"
                        height="70px"
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-earning"
                        icon="fa-sharp fa-solid fa-bell"
                        bgColor="#dc3545"
                        symbol="$"
                        counter="4.999,50"
                        title="Income"
                        padding="0"
                        width="100px"
                        height="70px"
                    />
                </Col>
            </Row>
            {/* end revenue section */}

            {/* start social counter section */}
            <Row className="gy-4 gx-4 mb-4">
                <Col sm={12} md={6} lg={3}>
                    <SocialCounter
                        bgColor="#3B5998"
                        padding="40px"
                        icon="fa-brands fa-facebook-f"
                        count="1875980"
                        iconPosition="top"
                        socialActivity={{
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
                        bgColor="#00ACED"
                        padding="40px"
                        icon="fa-brands fa-twitter"
                        count="1875980"
                        iconPosition="top"
                        socialActivity={{
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
                        bgColor="#4875B4"
                        padding="40px"
                        icon="fa-brands fa-linkedin-in"
                        count="1875980"
                        iconPosition="top"
                        socialActivity={{
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
                        bgColor="#D34836"
                        padding="40px"
                        icon="fa-brands fa-google-plus-g"
                        count="1875980"
                        iconPosition="top"
                        socialActivity={{
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
                    <UserStats
                        icon="fa-solid fa-users"
                        conunt={87500}
                        title="Visitors"
                        progressBg="#5c6bc0"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserStats
                        icon="fa-solid fa-user-plus"
                        conunt={385}
                        title="New Clients"
                        progressBg="#42a5f5"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserStats
                        icon="fa-solid fa-cart-plus"
                        conunt={1238}
                        title="Products sold"
                        progressBg="#ffa726"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserStats
                        icon="fa-solid fa-chart-pie"
                        conunt={28 + "%"}
                        title="Returning Visitors"
                        progressBg="#ef5350"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserStats
                        icon="fa-regular fa-clock"
                        conunt="5:34:11"
                        title="Avg. Time"
                        progressBg="#4dbd74"
                        progressPercent={50}
                    />
                </Col>
                <Col className="p-0 mb-4" sm={12} md={6} lg={2} xl={2}>
                    <UserStats
                        icon="fa-regular fa-comments"
                        conunt={972}
                        title="COMMENTS"
                        progressBg="#5c6bc0"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserStats
                        bgColor="#5c6bc0"
                        icon="fa-solid fa-users"
                        size="2rem"
                        conunt={87500}
                        title="Visitors"
                        progressPercent={100}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserStats
                        bgColor="#42a5f5"
                        icon="fa-solid fa-user-plus"
                        size="2rem"
                        conunt={385}
                        title="New Clients"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserStats
                        bgColor="#ffa726"
                        icon="fa-solid fa-cart-plus"
                        size="2rem"
                        conunt={1238}
                        title="Products sold"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserStats
                        bgColor="#ef5350"
                        icon="fa-solid fa-chart-pie"
                        size="2rem"
                        conunt={28 + "%"}
                        title="Returning Visitors"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserStats
                        bgColor="#4dbd74"
                        icon="fa-regular fa-clock"
                        size="2rem"
                        conunt="5:34:11"
                        title="Avg. Time"
                        progressPercent={40}
                    />
                </Col>
                <Col className="p-0" sm={12} md={6} lg={2} xl={2}>
                    <UserStats
                        bgColor="#5c6bc0"
                        icon="fa-regular fa-comments"
                        size="2rem"
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
                    <NotificationStatsCart
                        useName="Jim Doe"
                        image={userImg}
                        description="Project Manager"
                        notifications={[
                            {
                                link: "#",
                                label: "Mail Inbox",
                                icon: "fa-regular fa-envelope",
                                count: 10,
                                badgeBg: "primary",
                            },
                            {
                                link: "#",
                                label: "Recent Activity",
                                icon: "fa-solid fa-server",
                                count: 15,
                                badgeBg: "danger",
                            },
                            {
                                link: "#",
                                label: "Notification",
                                icon: "fa-regular fa-bell",
                                count: 11,
                                badgeBg: "success",
                            },
                            {
                                link: "#",
                                label: "Message",
                                icon: "fa-solid fa-message",
                                count: 3,
                                badgeBg: "warning",
                            },
                        ]}
                    />
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card isHeader={false}>
                        <CardBody className="p-0">
                            <ProfileCard userName="Steven Lee" image={userImg}>
                                <p className="text-center fs-6 px-3">
                                    Just got a pretty neat project via @ooomf -
                                    Give it a
                                    <a href="#" className="mx-1">
                                        tryhttp://t.co/e02DwGEeOJ
                                    </a>
                                </p>
                            </ProfileCard>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <OverlayCard
                        useName="Jim Doe"
                        image={userImg}
                        description="Project Manager"
                        socialStatus={[
                            { label: "Tweets", count: 750 },
                            { label: "Following", count: 865 },
                            { label: "Followers", count: 3645 },
                        ]}
                        comment={
                            <textarea
                                placeholder="Write your Tweet and Enter"
                                rows="1"
                                className="w-100 form-control"
                            />
                        }
                        locationName="New Castle, UK"
                    />
                </Col>
            </Row>
            {/* emd notification card, profile card & overlay card section */}
        </Container>
    );
};

export default Widgets;

