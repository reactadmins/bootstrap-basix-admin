import { useState } from "react";
import TabOne from "./TabPage/TabOne";
import TabTwo from "./TabPage/TabTwo";
import TabThree from "./TabPage/TabThree";
import TabsStyle from "../../assets/scss/Tabs.module.scss";

const Tab = ({ tabData = {}, tabDirection = "top" }) => {
    const [date, setDate] = useState(1);
    return (
        <div
            className={`${TabsStyle.tablist_container} ${TabsStyle[tabDirection]}`}
        >
            <div className={TabsStyle.tab_title}>
                <ul className={TabsStyle.title_list}>
                    {tabData?.map((tab, index) => (
                        <li
                            className={`${
                                date === tab.id
                                    ? TabsStyle.active_tab
                                    : TabsStyle.inactive_tab
                            }`}
                            onClick={() => setDate(tab.id)}
                            key={index}
                        >
                            <div className="d-flex justify-content-center align-items-center gap-2">
                                {tab.icon && <i className={`${tab.icon}`}></i>}
                                {tab.title && <span>{tab.title}</span>}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {date === 1 && <TabOne />}
            {date === 2 && <TabTwo />}
            {date === 3 && <TabThree />}
        </div>
    );
};

export default Tab;

