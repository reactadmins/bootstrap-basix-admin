import { useState } from "react";
import Day from "./Day.jsx";
import Month from "./Month";
import Year from "./Year";
import StatsStyle from "../../../assets/scss/UserTable.module.scss";

const Stats = () => {
    const [date, setDate] = useState("day");
    return (
        <div
            className={`col-12 border border-1 ${StatsStyle.tablist}`}
            style={{ backgroundColor: "#FAFAFA" }}
        >
            <div className="position-relative overflow-hidden w-100">
                <ul className=" nav nav-tabs">
                    {["day", "month", "year"].map((el, index) => (
                        <li
                            className={`${
                                date === el ? StatsStyle.active : ""
                            } text-uppercase ${StatsStyle.tab}`}
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

