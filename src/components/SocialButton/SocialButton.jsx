import React from "react";
import styled from "styled-components";
import styles from "@/assets/scss/SocialButton.module.scss";

function Social({
    href = "#",
    icon = "fa-brands fa-facebook-f",
    bgColor = "#3b5998",
    hoverBgColor = "",
    color = "#fff",
    hoverColor = "",
    effect = "",
    type = "square-rounded",
    border = "",
    hoverBorder = "",
}) {
    return (
        <Link
            href={href}
            $bgColor={bgColor}
            $hoverBgColor={hoverBgColor}
            $color={color}
            $hoverColor={hoverColor}
            $type={type}
            className={`${styles.social_button} ${styles[type]} ${styles[effect]}`}
            $border={border}
            $effect={effect}
            $hoverBorder={hoverBorder}
        >
            <i className={icon} />
        </Link>
    );
}

export default Social;

const Link = styled.a.attrs((props) => ({
    href: props.href,
    target: "_blank",
}))`
    background: ${(props) => props.$bgColor};
    ${(props) => `${props.$border ? `border: ${props.$border}` : ""}`};
    > i {
        color: ${(props) => props.$color};
    }
    &:hover {
        ${(props) =>
            props.$effect != "bolb"
                ? `background: ${props.$hoverBgColor}`
                : ""};
        ${(props) =>
            `${props.$hoverBorder ? `border: ${props.$hoverBorder}` : ""}`};
        > i {
            color: ${(props) => props.$hoverColor};
        }
    }
    &::after {
        ${(props) =>
            props.$effect == "bolb"
                ? `background: ${props.$hoverBgColor}`
                : ""};
    }
`;

