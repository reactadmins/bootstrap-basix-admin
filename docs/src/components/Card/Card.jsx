import { Fragment, useState, useEffect, useRef } from "react";
import { Card as BootstrapCard, CardHeader } from "react-bootstrap";
import classNames from "classnames";
import styles from "./Card.module.scss";

const Card = ({
    title = "",
    titleIcon = null,
    titleBg = "",
    isHeader = true,
    headerPosition = "top",
    bodyBg = "",
    padding = "16px",
    subscript = "",
    icons = [],
    dismissible = false,
    onClose = () => {},
    children = "",
}) => {
    const [openIndex, setOpenIndex] = useState(null);

    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref?.current?.contains(event.target)) {
                setOpenIndex(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <Fragment>
            <BootstrapCard className={`${styles.card} rounded-0 w-100 h-100`}>
                {headerPosition === "bottom" ? (
                    <div style={{ padding: padding, background: bodyBg }}>{children}</div>
                ) : null}

                {!!isHeader ? (
                    <CardHeader
                        className={`${styles.card_header} rounded-0`}
                        {...(titleBg ? { style: { background: titleBg } } : "")}>
                        <div
                            className={`d-flex align-items-center ${
                                icons.length > 0 ? "justify-content-between" : ""
                            }`}>
                            <div>
                                {titleIcon ? (
                                    <span className={classNames(styles.titleIcon, "titleIcon")} />
                                ) : null}
                                <strong className={styles.card_title}>{title}</strong>
                                {subscript}
                            </div>
                            {icons.length > 0 && (
                                <div
                                    ref={ref}
                                    className={`d-flex align-items-center ${styles.card_icon}`}>
                                    {icons?.map((item, index) => (
                                        <Fragment key={index}>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOpenIndex(
                                                        openIndex === index ? null : index
                                                    );
                                                }}
                                                className={`${styles.content_settings} border-0 bg-transparent`}>
                                                <i className={item.icon} />
                                            </button>

                                            {openIndex === index && item?.dropdown?.length > 0 ? (
                                                <div className={styles.card_setting}>
                                                    {item?.dropdown?.map((menu, i) => (
                                                        <button
                                                            key={i}
                                                            type="button"
                                                            onClick={menu?.method}>
                                                            <i className={menu?.icon} />
                                                            {menu.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            ) : null}
                                        </Fragment>
                                    ))}
                                    {!!dismissible ? (
                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className={`${styles.content_settings} border-0 bg-transparent`}>
                                            <i className={"fa fa-times"} />
                                        </button>
                                    ) : null}
                                </div>
                            )}
                        </div>
                    </CardHeader>
                ) : null}

                {headerPosition !== "bottom" ? (
                    <div style={{ padding: padding, background: bodyBg }}>{children}</div>
                ) : null}
            </BootstrapCard>
        </Fragment>
    );
};

export default Card;
