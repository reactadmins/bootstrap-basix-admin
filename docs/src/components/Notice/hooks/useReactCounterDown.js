import { useEffect, useRef, useState } from "react";

export const useReactCountdown = (date) => {
    //COUNTDOWN
    const [timerDays, setTimerDays] = useState("0");
    const [timerHours, setTimerHours] = useState("0");
    const [timerMinutes, setTimerMinutes] = useState("0");
    const [timerSeconds, setTimerSeconds] = useState("0");

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date(date).getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // Stop
                clearInterval(interval.current);
            } else {
                // Update
                if (days) setTimerDays(days);
                if (hours) setTimerHours(hours);
                if (minutes) setTimerMinutes(minutes);
                if (seconds) setTimerSeconds(seconds);
            }
        }, 500);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

    // Logic
    return {
        days: timerDays,
        hours: timerHours,
        minutes: timerMinutes,
        seconds: timerSeconds,
    };
};
