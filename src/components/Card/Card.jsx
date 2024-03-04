import { Fragment, useState, useEffect, useRef } from "react";
import { Badge, Card as BootstrapCard, CardHeader } from "react-bootstrap";
import styles from "@/assets/scss/Card.module.scss";
import classNames from "classnames";

const Card = ({
    title = "",
    titleIcon = null,
    titleBg = "",
    titleColor = "",
    cardBorderColor = "",
    cardHeaderBorderColor = "",
    isHeader = true,
    headerPosition = "top",
    subscript = "",
    badgeLabel = "",
    badgeBg = "",
    icons = [],
    iconColor = "",
    dismissible = false,
    onClose = () => {},
    children = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref?.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return (
        <BootstrapCard
            className={`${styles.card} rounded-0 w-100 h-100`}
            {...(cardBorderColor
                ? {
                      style: {
                          borderColor: cardBorderColor,
                      },
                  }
                : "")}
        >
            {headerPosition === "bottom" ? children : null}

            {!!isHeader ? (
                <CardHeader
                    className={`${styles.card_header} ${
                        headerPosition === "bottom" &&
                        "border-top border-bottom-0"
                    } rounded-0`}
                    {...(titleBg || cardHeaderBorderColor
                        ? {
                              style: {
                                  background: titleBg,
                                  borderColor: cardHeaderBorderColor,
                              },
                          }
                        : "")}
                >
                    <div
                        className={`d-flex align-items-center ${
                            icons.length > 0 ? "justify-content-between" : ""
                        }`}
                    >
                        <div
                            className={`${
                                badgeLabel
                                    ? "d-flex align-items-center justify-content-between w-100"
                                    : ""
                            }`}
                        >
                            {titleIcon ? (
                                <span
                                    className={classNames(
                                        styles.titleIcon,
                                        titleIcon
                                    )}
                                />
                            ) : null}
                            <strong
                                className={styles.card_title}
                                {...(titleColor
                                    ? {
                                          style: {
                                              color: titleColor,
                                          },
                                      }
                                    : "")}
                            >
                                {title}
                            </strong>
                            {subscript}
                            {badgeLabel ? (
                                <Badge bg={badgeBg}>{badgeLabel}</Badge>
                            ) : null}
                        </div>
                        {icons.length > 0 && (
                            <div
                                className={`d-flex align-items-center ${styles.card_icon}`}
                            >
                                {icons?.map((item, index) => (
                                    <Fragment key={index}>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setIsOpen(
                                                    item.icon === "fa fa-cog"
                                                        ? !isOpen
                                                        : "" ||
                                                          item.icon ===
                                                              "fa fa-ellipsis-v"
                                                        ? !isOpen
                                                        : ""
                                                );
                                            }}
                                            className={`${styles.content_settings} border-0 bg-transparent`}
                                            {...(iconColor
                                                ? {
                                                      style: {
                                                          color: iconColor,
                                                      },
                                                  }
                                                : "")}
                                        >
                                            <i className={item.icon} />
                                        </button>
                                        {isOpen &&
                                        item?.dropdown?.length > 0 ? (
                                            <div
                                                ref={ref}
                                                className={styles.card_setting}
                                            >
                                                {item?.dropdown?.map(
                                                    (menu, i) => (
                                                        <button
                                                            key={i}
                                                            type="button"
                                                            onClick={
                                                                menu?.method
                                                            }
                                                        >
                                                            <i
                                                                className={
                                                                    menu?.icon
                                                                }
                                                            />
                                                            {menu.label}
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        ) : null}
                                    </Fragment>
                                ))}
                                {!!dismissible ? (
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className={`${styles.content_settings} border-0 bg-transparent`}
                                        {...(iconColor
                                            ? {
                                                  style: {
                                                      color: iconColor,
                                                  },
                                              }
                                            : "")}
                                    >
                                        <i className={"fa fa-times"} />
                                    </button>
                                ) : null}
                            </div>
                        )}
                    </div>
                </CardHeader>
            ) : null}

            {headerPosition !== "bottom" ? children : null}
        </BootstrapCard>
    );
};

export default Card;

