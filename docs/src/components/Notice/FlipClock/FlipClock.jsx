import { useEffect, useState } from "react";
// import styles from "./FlipClock.module.scss";
import { useReactCountdown } from "../hooks/useReactCounterDown";
import "./FlipClock.css";

// function component
const AnimatedCard = ({ animation, digit }) => {
    return (
        <div className={`flip-card ${animation}`}>
            <span>{digit}</span>
        </div>
    );
};

// function component
const StaticCard = ({ position, digit }) => {
    return (
        <div className={`${position}`}>
            <span>{digit}</span>
        </div>
    );
};

// function component
const FlipUnitContainer = ({ digit, shuffle, unit }) => {
    // assign digit values
    let currentDigit = digit;
    let previousDigit = digit == 59 ? "0" : digit + 1;

    // to prevent a negative value
    if (unit !== "hours") {
        previousDigit = previousDigit === -1 ? 59 : previousDigit;
    } else {
        previousDigit = previousDigit === -1 ? 23 : previousDigit;
    }

    // add zero
    if (currentDigit < 10 && unit !== "days") {
        currentDigit = `0${currentDigit}`;
    }
    if (previousDigit < 10 && unit !== "days") {
        previousDigit = `0${previousDigit}`;
    }

    // shuffle digits
    const digit1 = shuffle ? previousDigit : currentDigit;
    const digit2 = !shuffle ? previousDigit : currentDigit;

    // shuffle animations
    const animation1 = shuffle ? "fold" : "unfold";
    const animation2 = !shuffle ? "fold" : "unfold";

    return (
        <div>
            <div className={"flip-unit-container"}>
                <StaticCard position={"upperCard"} digit={currentDigit} />
                <StaticCard position={"lowerCard"} digit={previousDigit} />
                <AnimatedCard digit={digit1} animation={animation1} />
                <AnimatedCard digit={digit2} animation={animation2} />
            </div>
            <p className="title">{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
        </div>
    );
};

// func component
const FlipClock = ({ date }) => {
    const { days, hours, minutes, seconds } = useReactCountdown(date);
    const [shuffle, setShuffle] = useState({
        daysShuffle: true,
        hoursShuffle: true,
        minutesShuffle: true,
        secondsShuffle: true,
    });

    useEffect(() => {
        setShuffle({ ...shuffle, secondsShuffle: !shuffle.secondsShuffle });
    }, [seconds]);

    useEffect(() => {
        setShuffle({ ...shuffle, minutesShuffle: !shuffle.minutesShuffle });
    }, [minutes]);

    useEffect(() => {
        setShuffle({ ...shuffle, hoursShuffle: !shuffle.hoursShuffle });
    }, [hours]);

    useEffect(() => {
        setShuffle({ ...shuffle, daysShuffle: !shuffle.daysShuffle });
    }, [days]);

    return (
        <div className={"flip-clock"}>
            <FlipUnitContainer unit={"days"} digit={days} shuffle={shuffle.hoursShuffle} />
            <FlipUnitContainer unit={"hours"} digit={hours} shuffle={shuffle.hoursShuffle} />
            <FlipUnitContainer unit={"minutes"} digit={minutes} shuffle={shuffle.minutesShuffle} />
            <FlipUnitContainer unit={"seconds"} digit={seconds} shuffle={shuffle.secondsShuffle} />
        </div>
    );
};

export default FlipClock;

