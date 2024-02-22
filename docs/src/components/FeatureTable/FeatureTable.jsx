import React from "react";

function FeatureTable({ thead = ["Name", "Type", "Default", "Description"], children }) {
    return (
        <table className="featureTable">
            <thead>
                <tr>
                    {thead?.map((item, i) => (
                        <td key={i} className="td">
                            {item}
                        </td>
                    ))}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
}

export default FeatureTable;

