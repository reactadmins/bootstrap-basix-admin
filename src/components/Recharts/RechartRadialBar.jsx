import {
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer,
} from "recharts";
import Card from "@/components/Card/Card";
import { CardBody } from "react-bootstrap";

const data = [
    {
        name: "18-24",
        uv: 31.47,
        pv: 2400,
        fill: "#8884d8",
    },
    {
        name: "25-29",
        uv: 26.69,
        pv: 4567,
        fill: "#83a6ed",
    },
    {
        name: "30-34",
        uv: 15.69,
        pv: 1398,
        fill: "#8dd1e1",
    },
    {
        name: "35-39",
        uv: 8.22,
        pv: 9800,
        fill: "#82ca9d",
    },
    {
        name: "40-49",
        uv: 8.63,
        pv: 3908,
        fill: "#a4de6c",
    },
    {
        name: "50+",
        uv: 2.63,
        pv: 4800,
        fill: "#d0ed57",
    },
    {
        name: "unknow",
        uv: 6.67,
        pv: 4800,
        fill: "#ffc658",
    },
];

const style = {
    top: 0,
    left: 350,
    lineHeight: "24px",
};

const RechartRadialBar = () => {
    return (
        <Card title="Radial Bar Chart">
            <CardBody>
                <ResponsiveContainer width="100%" height={300}>
                    <div className="d-flex justify-content-center align-items-center">
                        <RadialBarChart
                            width={500}
                            height={300}
                            cx={150}
                            cy={150}
                            innerRadius={20}
                            outerRadius={140}
                            barSize={10}
                            data={data}
                        >
                            <RadialBar
                                minAngle={15}
                                label={{
                                    position: "insideStart",
                                    fill: "#fff",
                                }}
                                background
                                clockWise
                                dataKey="uv"
                            />
                            <Legend
                                iconSize={10}
                                width={120}
                                height={140}
                                layout="vertical"
                                verticalAlign="middle"
                                wrapperStyle={style}
                            />
                        </RadialBarChart>
                    </div>
                </ResponsiveContainer>
            </CardBody>
        </Card>
    );
};

export default RechartRadialBar;

