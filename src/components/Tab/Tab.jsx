import { useState } from "react";
import TabOne from "./TabPage/TabOne";
import TabTwo from "./TabPage/TabTwo";
import TabThree from "./TabPage/TabThree";
import tabsStyle from "../../assets/scss/Tabs.module.scss";

const Tab = ({ tabData = {}, tabDirection = "top" }) => {
    const [date, setDate] = useState(1);
    return (
        <div
            className={`${tabsStyle.tablist_container} ${tabsStyle[tabDirection]}`}
        >
            <div className={tabsStyle.tab_title}>
                <ul className={tabsStyle.title_list}>
                    {tabData?.map((tab, index) => (
                        <li
                            className={`${
                                date === tab.id
                                    ? tabsStyle.active_tab
                                    : tabsStyle.inactive_tab
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

