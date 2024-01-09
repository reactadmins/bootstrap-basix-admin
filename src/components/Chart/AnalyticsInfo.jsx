import { Line } from "peity-react";

const AnalyticsInfo = ({ count = "", title = "" }) => {
    return (
        <div className="analytics-wrapper">
            <div className="d-flex gap-3">
                <Line
                    values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2]}
                    width={60}
                    height={16}
                />
                <div className="d-flex">
                    <i
                        className="fa fa-caret-up"
                        style={{ color: "#4dbd74", fontSize: "14px" }}
                    ></i>
                    <span className="mx-1" style={{ fontSize: "14px" }}>
                        {count}%
                    </span>
                </div>
            </div>
            <span
                className="text-uppercase text-end d-block"
                style={{ color: "#868e96", fontSize: "14px" }}
            >
                {title}
            </span>
        </div>
    );
};

export default AnalyticsInfo;

