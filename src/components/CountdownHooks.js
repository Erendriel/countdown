import React, { useState, useEffect, useRef } from "react";
import TipsSlider from "./TipsList/TipsSlider";
import "../style/CountdownHooks.css";

const CountdownHooks = ({ setEndCountdown, date }) => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const [start, setStart] = useState(true);

  let interval = useRef();

  const startInterval = () => {
    if (start) {
      const countdownDate = new Date(date).getTime();
      //update every second
      interval = setInterval(function () {
        // Get todays date and time
        const now = new Date().getTime();
        //find the distance between now and countdown date
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance < 0) {
          //stop our timer
          clearInterval(interval);
          setEndCountdown(true);
          setStart(false);
          setTimeout(() => {
            setEndCountdown(false);
          }, 5000);
        } else {
          //update timer
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      }, 1000);
    }
  };

  //componentDidMount
  useEffect(() => {
    startInterval();
    const clearing = interval.current;
    return () => {
      clearInterval(clearing);
    };
  });
  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <span className="mdi mdi-calendar-clock timer-icon"></span>
          <h2>Birthday Countdown</h2>
        </div>
        <div>
          <section>
            <p>{timerDays}</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours} </p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes} </p>
            <p>
              <small>Minutes</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds} </p>
            <p>
              <small>Seconds</small>
            </p>
          </section>
        </div>
      </section>
      {/* Some BD parties tips */}
      <TipsSlider />
    </section>
  );
};
export default CountdownHooks;
