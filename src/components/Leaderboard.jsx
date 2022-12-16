import React from "react";
import styled from "styled-components";
import { LevelContext } from "../context/LevelContext";
import { useContext } from "react";
import LeaderboardItem from "./LeaderboardItem";

function Leaderboard({ goBack }) {
    const { currLevel } = useContext(LevelContext);
    return (
        <Container>
            <TitleContainer color={currLevel.color}>
                <CloseButton onClick={goBack}>+</CloseButton>
                <Title>{currLevel.name}</Title>
            </TitleContainer>
            <Wrapper color={currLevel.color}>
                <SubmissionsWrapper>
                    {currLevel?.leaderboard.map((submission, index) => {
                        return (
                            <LeaderboardItem
                                name={submission.name}
                                time={submission.time}
                                index={index}
                                key={index}
                            />
                        );
                    })}
                </SubmissionsWrapper>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    max-width: 350px;
    width: 90%;
    max-height: 700px;
    height: 70vh;
    background-color: var(--clr-text);
    color: var(--clr-bg);
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0.25rem;
    }
    &::-webkit-scrollbar-track {
        background: #1e1e24;
    }
    &::-webkit-scrollbar-thumb {
        background: ${(props) => props.color};
    }
`;

const TitleContainer = styled.div`
    text-align: center;
    background-color: ${(props) => props.color};
    padding: 0.8rem;
    position: relative;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    outline: none;
    position: absolute;
    font-size: 2.2rem;
    font-weight: 500;
    cursor: pointer;
    right: 2%;
    top: 1%;
    rotate: 45deg;
`;

const Title = styled.p`
    font-size: 2rem;
    font-weight: bold;
    color: var(--clr-bg);
`;

const SubmissionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 0.8rem 0.8rem;
    margin-top: 1rem;
`;

export default Leaderboard;
