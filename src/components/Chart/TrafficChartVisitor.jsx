import Style from "../../assets/scss/TrafficChartVisitor.module.scss";

const TrafficChartVisitor = () => {
    return (
        <div className={Style.visitor_wrapper}>
            <span className={`${Style.title} text-center d-block"`}>
                Visits
            </span>
            <h4
                className={`${Style.counter}counter text-center m-0 text-uppercase pb-1`}
            >
                29.703 Users (40%)
            </h4>
            <div className={Style.progress}>
                <div
                    className={Style.progress_bar}
                    role="progressbar"
                    aria-valuenow=""
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        </div>
    );
};

export default TrafficChartVisitor;

