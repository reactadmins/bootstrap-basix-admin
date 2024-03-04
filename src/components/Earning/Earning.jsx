import { Fragment, useState } from "react";
import { CardBody, CardFooter } from "react-bootstrap";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import styles from "@/assets/scss/Earning.module.scss";
import Card from "@/components/Card/Card";

const Earning = () => {
    const [close, setClose] = useState(false);

    const earning = [
        {
            name: "Page A",
            uv: 1000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Page B",
            uv: 2000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Page C",
            uv: 1500,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Page D",
            uv: 4000,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Page E",
            uv: 1500,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Page F",
            uv: 2000,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "Page G",
            uv: 1500,
            pv: 4300,
            amt: 2100,
        },
        {
            name: "Page H",
            uv: 2000,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <Fragment>
            {!close ? (
                <div className={styles.earning_wrapper}>
                    <Card
                        title="Earning Stats"
                        titleBg="#ef5350"
                        cardBorderColor="#ef5350"
                        cardHeaderBorderColor="#ef5350"
                        titleColor="#fff"
                        iconColor="#fff"
                        icons={[
                            {
                                icon: "fa fa-cog",
                                dropdown: [
                                    {
                                        label: "Edit",
                                        icon: "fa fa-cog",
                                        method: () => alert("Cog"),
                                    },
                                    {
                                        label: "Delete",
                                        icon: "fa-solid fa-trash",
                                        method: () => alert("Delete"),
                                    },
                                    {
                                        label: "Update",
                                        icon: "fa-solid fa-recycle",
                                        method: () => alert("Update"),
                                    },
                                ],
                            },
                            { icon: "fa fa-angle-down" },
                        ]}
                        dismissible={true}
                        onClose={() => setClose(!close)}
                    >
                        <CardBody className={`${styles.card_body} p-3 pb-0`}>
                            <ResponsiveContainer width="100%" height={210}>
                                <BarChart
                                    width={580}
                                    height={300}
                                    data={earning}
                                    style={{ top: "5px" }}
                                >
                                    <Bar dataKey="uv" fill="#F58F8D" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardBody>
                        <CardFooter
                            className={`${styles.card_footer} border-0 rounded-0 px-3`}
                        >
                            <div className="d-flex justify-content-between align-items-center">
                                <span className={styles.title}>
                                    Total Earning
                                </span>
                                <span className={styles.counter}>$3265986</span>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            ) : (
                ""
            )}
        </Fragment>
    );
};

export default Earning;

