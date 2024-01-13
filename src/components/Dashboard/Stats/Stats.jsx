import { useState } from "react";
import Day from "./Day.jsx";
import Month from "./Month";
import Year from "./Year";
import statsStyle from "../../../assets/scss/Stats.module.scss";
import { useDashboardDataContext } from "../../../context/dashboardDataContext.jsx";

const Stats = () => {
    const [date, setDate] = useState("day");
    const { isDark } = useDashboardDataContext();
    return (
        <div
            data={isDark ? "true" : "false"}
            className={`col-12 border border-1 ${statsStyle.tablist}`}
        >
            <div className="position-relative overflow-hidden w-100">
                <ul className={`nav ${statsStyle.nav_tabs}`}>
                    {["day", "month", "year"].map((el, index) => (
                        <li
                            className={`${
                                date === el ? statsStyle.active : ""
                            } text-uppercase ${statsStyle.tab}`}
                            onClick={() => setDate(el)}
                            key={index}
                        >
                            {el}
                        </li>
                    ))}
                </ul>
            </div>
            <div>{date === "day" && <Day />}</div>
            <div>{date === "month" && <Month />}</div>
            <div>{date === "year" && <Year />}</div>
        </div>
    );
};

export default Stats;

