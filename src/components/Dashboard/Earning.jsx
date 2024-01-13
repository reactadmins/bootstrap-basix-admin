import { Fragment, useState } from "react";
import { Card } from "react-bootstrap";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import earningStyle from "../../assets/scss/Earning.module.scss";
import { useDashboardDataContext } from "../../context/dashboardDataContext";

const Earning = () => {
    const [isOpen, setIsOpen] = useState();
    const [hiddenContent, setHiddenContent] = useState();
    const { isDark } = useDashboardDataContext();

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
            {!hiddenContent ? (
                <div
                    className={earningStyle.earning_wrapper}
                    data={isDark ? "true" : "false"}
                >
                    <Card
                        className={`${earningStyle.card} rounded-0`}
                        style={{
                            backgroundColor: `${
                                isDark ? "var(--bg-content)" : ""
                            }`,
                            border: `${
                                isDark ? "1px solid var(--border-color)" : "0"
                            }`,
                        }}
                    >
                        <Card.Header
                            className={`${earningStyle.header} border-0`}
                        >
                            <div className="d-flex justify-content-between align-items-center">
                                <strong className={earningStyle.title}>
                                    Earning Stats
                                </strong>
                                <div className="d-flex align-items-center">
                                    <button
                                        type="button"
                                        className={`${earningStyle.content_settings} border-0 bg-transparent`}
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <i className="fa fa-cog"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className={`${earningStyle.content_settings} border-0 bg-transparent`}
                                    >
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className={`${earningStyle.content_settings} border-0 bg-transparent`}
                                        onClick={() =>
                                            setHiddenContent(!hiddenContent)
                                        }
                                    >
                                        <i className="fa fa-times"></i>
                                    </button>
                                    {isOpen ? (
                                        <div
                                            className={
                                                earningStyle.card_setting
                                            }
                                        >
                                            <button type="button">
                                                <i className="fa-solid fa-gear"></i>
                                                Edit
                                            </button>
                                            <button type="button">
                                                <i className="fa-solid fa-trash"></i>
                                                Delete
                                            </button>
                                            <button type="button">
                                                <i className="fa-solid fa-recycle"></i>
                                                Update
                                            </button>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body className="bg-transparent pb-0">
                            <ResponsiveContainer width="100%" height={210}>
                                <BarChart
                                    width={580}
                                    height={300}
                                    data={earning}
                                >
                                    <Bar dataKey="uv" fill="#F58F8D" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Card.Body>
                        <Card.Footer
                            className={`${earningStyle.footer} border-0 rounded-0`}
                        >
                            <div className="d-flex justify-content-between align-items-center">
                                <strong className={earningStyle.footer_title}>
                                    Total Earning
                                </strong>
                                <h4 className={earningStyle.earning_count}>
                                    <span className="currency float-left mr-1">
                                        $
                                    </span>
                                    <span className="count">3265986</span>
                                </h4>
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
            ) : (
                ""
            )}
        </Fragment>
    );
};

export default Earning;

