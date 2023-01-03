import React from "react";
import styled from "styled-components";
import { getMinutes, getSeconds } from "../utils/functions";

function LeaderboardItem({ name, time, index }) {
    const minutes = getMinutes(time);
    const seconds = getSeconds(time);

    return (
        <Container>
            <Position>{index + 1}</Position>
            <Name>{name}</Name>
            <Time>
                {minutes} : {seconds}
            </Time>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    height: 65px;
    background-color: var(--clr-text);
    color: var(--clr-bg);
    border-radius: 20px;
    font-size: clamp(1.2rem, 4vw, 1.3rem);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    justify-content: center;
    align-items: center;

    p {
        text-align: center;
    }
`;

const Name = styled.p`
    flex: 1;
`;

const Time = styled.p`
    font-weight: bold;
    flex: 1;
    padding-right: 0.5rem;
`;

const Position = styled.p`
    flex: 0.5;
`;

export default LeaderboardItem;
