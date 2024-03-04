import { Table } from "react-bootstrap";
import { BarChart, Bar } from "recharts";
import user1 from "@/assets/image/avatar/user-1.jpg";
import user2 from "@/assets/image/avatar/user-2.jpg";
import user3 from "@/assets/image/avatar/user-3.jpg";
import user4 from "@/assets/image/avatar/user-4.jpg";
import user5 from "@/assets/image/avatar/user-5.jpg";
import styles from "@/assets/scss/Stats.module.scss";

const Year = () => {
    const data = [
        {
            name: "Page A",
            uv: 300,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Page B",
            uv: 4000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Page C",
            uv: 6000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Page D",
            uv: 5000,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Page E",
            uv: 7000,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Page F",
            uv: 3000,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "Page G",
            uv: 4000,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className={styles.table_wrapper}>
            <Table className="w-100 h-100">
                <thead>
                    <tr>
                        <th scope="col">User</th>
                        <th scope="col text-center">Numbers</th>
                        <th scope="col">Stats</th>
                        <th scope="col">State</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="align-middle">
                            <div className={styles.user_img}>
                                <a href="#">
                                    <img
                                        src={user1}
                                        alt="img"
                                        className="rounded-circle"
                                    />
                                </a>
                                <span>Louis Stanley</span>
                            </div>
                        </td>
                        <td className="align-middle">
                            <span className={styles.user_count}>3765879</span>
                        </td>
                        <td className="align-middle">
                            <BarChart width={60} height={50} data={data}>
                                <Bar dataKey="uv" fill="#42A5F5" />
                            </BarChart>
                        </td>
                        <td className="align-middle">
                            <i
                                className="fa fa-caret-up"
                                style={{ color: "#4dbd74" }}
                            ></i>
                            <span
                                className="mx-1"
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                }}
                            >
                                54%
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="align-middle">
                            <div className={styles.user_img}>
                                <a href="#">
                                    <img
                                        src={user2}
                                        alt="img"
                                        className="rounded-circle"
                                    />
                                </a>
                                <span>Gregory Dixon</span>
                            </div>
                        </td>
                        <td className="align-middle">
                            <span className={styles.user_count}>3765879</span>
                        </td>
                        <td className="align-middle">
                            <BarChart width={60} height={50} data={data}>
                                <Bar dataKey="uv" fill="#EF5350" />
                            </BarChart>
                        </td>
                        <td className="align-middle">
                            <i
                                className="fa fa-caret-up"
                                style={{ color: "#4dbd74" }}
                            ></i>
                            <span
                                className="mx-1"
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                }}
                            >
                                54%
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="align-middle">
                            <div className={styles.user_img}>
                                <a href="#">
                                    <img
                                        src={user3}
                                        alt="img"
                                        className="rounded-circle"
                                    />
                                </a>
                                <span>Catherine Flores</span>
                            </div>
                        </td>
                        <td className="align-middle">
                            <span className={styles.user_count}>3765879</span>
                        </td>
                        <td className="align-middle">
                            <BarChart width={60} height={50} data={data}>
                                <Bar dataKey="uv" fill="#66BB6A" />
                            </BarChart>
                        </td>
                        <td className="align-middle">
                            <i
                                className="fa fa-caret-up"
                                style={{ color: "#4dbd74" }}
                            ></i>
                            <span
                                className="mx-1"
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                }}
                            >
                                54%
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="align-middle">
                            <div className={styles.user_img}>
                                <a href="#">
                                    <img
                                        src={user4}
                                        alt="img"
                                        className="rounded-circle"
                                    />
                                </a>
                                <span>Mary Silva</span>
                            </div>
                        </td>
                        <td className="align-middle">
                            <span className={styles.user_count}>3765879</span>
                        </td>
                        <td className="align-middle">
                            <BarChart width={60} height={50} data={data}>
                                <Bar dataKey="uv" fill="#5C6BC0" />
                            </BarChart>
                        </td>
                        <td className="align-middle">
                            <i
                                className="fa fa-caret-up"
                                style={{ color: "#4dbd74" }}
                            ></i>
                            <span
                                className="mx-1"
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                }}
                            >
                                54%
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="align-middle">
                            <div className={styles.user_img}>
                                <a href="#">
                                    <img
                                        src={user5}
                                        alt="img"
                                        className="rounded-circle"
                                    />
                                </a>
                                <span>Johnny Stephens</span>
                            </div>
                        </td>
                        <td className="align-middle">
                            <span className={styles.user_count}>3765879</span>
                        </td>
                        <td className="align-middle">
                            <BarChart width={60} height={50} data={data}>
                                <Bar dataKey="uv" fill="#FFA726" />
                            </BarChart>
                        </td>
                        <td className="align-middle">
                            <i
                                className="fa fa-caret-up"
                                style={{ color: "#4dbd74" }}
                            ></i>
                            <span
                                className="mx-1"
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                }}
                            >
                                54%
                            </span>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Year;

