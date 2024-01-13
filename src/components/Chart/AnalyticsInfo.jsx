import { Line } from "peity-react";

const AnalyticsInfo = ({ count = "", title = "" }) => {
    return (
        <div className="analytics-wrapper">
            <span
                className="text-uppercase text-center d-block"
                style={{
                    color: "var(--content-text-color)",
                    fontSize: "14px",
                    marginBottom: "6px",
                }}
            >
                {title}
            </span>
            <div className="d-flex gap-3 align-items-center">
                <Line
                    values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2]}
                    width={60}
                    height={20}
                />
                <div className="counter-up">
                    <div className="d-flex align-items-center gap-1">
                        <i
                            className="fa fa-caret-up"
                            style={{ color: "#4dbd74", fontSize: "14px" }}
                        ></i>
                        <span
                            className="mx-1"
                            style={{
                                fontSize: "14px",
                                color: "var(--hedging-text-color)",
                            }}
                        >
                            {count}%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsInfo;

