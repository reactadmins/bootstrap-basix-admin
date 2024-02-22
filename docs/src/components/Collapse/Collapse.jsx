// import Details from "@theme/MDXComponents/Details";

export default function Collapse({ children, title = "Collapse" }) {
    return (
        <details>
            <summary mdxtype="summary">{title}</summary>

            {children}
        </details>
    );
}

