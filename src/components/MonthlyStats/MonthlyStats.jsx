import Card from "@/components/Card/Card";
import { CardBody } from "react-bootstrap";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import styles from "@/assets/scss/MonthlyStats.module.scss";

const MonthlyStats = () => {
    const data = [
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
        <div className={styles.monthly_stats}>
            <Card
                title="February"
                titleColor="#fff"
                titleBg="#5c6bc0"
                cardHeaderBorderColor="#5c6bc0"
            >
                <CardBody className={`${styles.card_body} pt-0`}>
                    <ResponsiveContainer width="100%" height={85}>
                        <LineChart width={250} height={82} data={data}>
                            <Line
                                type="monotone"
                                dataKey="pv"
                                stroke="#fff"
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </CardBody>
            </Card>
        </div>
    );
};

export default MonthlyStats;

