import { Fragment, createContext, useContext, useState } from "react";
import style from "./Tab.module.scss";

export const ActiveTabContext = createContext();

export const Tab = ({
    activeTab = "",
    tabPosition = "top",
    iconPosition = "left",
    tabActiveBg = "#292b35",
    tabActiveTextColor = "#fff",
    children = "",
}) => {
    const [active, setActive] = useState(activeTab);
    return (
        <div className={`${style.tablist_wrapper} ${style[tabPosition]}`}>
            <div className={style.tab_title}>
                <ul className={style.title_list}>
                    {children.length >= 0 ? (
                        children?.map((item) => {
                            return (
                                <li
                                    key={item.props.eventKey}
                                    onClick={() =>
                                        setActive(item.props.eventKey)
                                    }
                                    className={`${style.inactive_tab} ${
                                        item.props.eventKey === active
                                            ? style.active_tab
                                            : ""
                                    } ${
                                        item?.props?.icon
                                            ? "d-flex align-items-center justify-content-center gap-2"
                                            : ""
                                    } ${
                                        iconPosition === "right"
                                            ? "flex-row-reverse"
                                            : ""
                                    }`}
                                    style={{
                                        color: `${
                                            item.props.eventKey === active
                                                ? tabActiveTextColor
                                                : ""
                                        }`,
                                        background: `${
                                            item.props.eventKey === active
                                                ? tabActiveBg
                                                : ""
                                        }`,
                                    }}
                                >
                                    {item?.props?.icon ? (
                                        <i className={item?.props?.icon} />
                                    ) : null}
                                    {item?.props?.title}
                                </li>
                            );
                        })
                    ) : (
                        <li
                            className={`${style.inactive_tab} ${
                                children.props.eventKey === active
                                    ? style.active_tab
                                    : ""
                            } ${
                                children?.props?.icon
                                    ? "d-flex align-items-center gap-2"
                                    : ""
                            } ${
                                iconPosition === "right"
                                    ? "flex-row-reverse"
                                    : ""
                            }`}
                            style={{
                                color: `${
                                    children.props.eventKey === active
                                        ? tabActiveTextColor
                                        : ""
                                }`,
                                background: `${
                                    children.props.eventKey === active
                                        ? tabActiveBg
                                        : ""
                                }`,
                            }}
                        >
                            {children?.props?.icon ? (
                                <i className={children?.props?.icon} />
                            ) : null}
                            {children?.props?.title}
                        </li>
                    )}
                </ul>
            </div>
            <ActiveTabContext.Provider value={{ active }}>
                {children}
            </ActiveTabContext.Provider>
        </div>
    );
};

export const TabPage = ({ children, eventKey }) => {
    let { active } = useContext(ActiveTabContext);
    return <Fragment>{eventKey === active && children}</Fragment>;
};

