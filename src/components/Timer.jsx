import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Timer({ gameOngoing }) {
    const [time, setTime] = useState(0);
    // const milliseconds = ("0" + Math.floor((time / 10) % 100)).slice(-2);
    const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
    const minutes = ("0" + Math.floor(time / 60000)).slice(-2);
    // const hours = ("0" + Math.floor(time / 3600000)).slice(-2);

    useEffect(() => {
        let interval;

        if (gameOngoing) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [gameOngoing]);

    return (
        <P>
            {minutes} : {seconds}
        </P>
    );
}

const P = styled.p`
    font-size: clamp(1.6rem, 4vw, 2.5rem);
`;

export default Timer;
