import React, { useEffect } from "react";
import styled from "styled-components";
import { getMinutes, getSeconds } from "../utils/functions";

function Timer({ gameOngoing, time, setTime }) {
    const seconds = getSeconds(time);
    const minutes = getMinutes(time);

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
