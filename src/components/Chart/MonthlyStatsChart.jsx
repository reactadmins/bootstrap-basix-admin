import { Line, LineChart, ResponsiveContainer } from "recharts";

const MonthlyStatsChart = () => {
    return (
        <ResponsiveContainer width="100%" height={85}>
            <LineChart
                width={250}
                height={82}
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
        </ResponsiveContainer>
    );
};

export default MonthlyStatsChart;

