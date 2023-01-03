import React from "react";
import styled from "styled-components";
import DefaultButton from "../styles/Button.style";

function LevelPreview({
    level,
    index,
    handlePlayClick,
    handleMouseEnter,
    id,
    handleLeaderboardClick,
}) {
    const { name, image } = level;

    const fgColor = index % 2 === 0 ? "var(--clr-bg)" : "var(--clr-bg)";
    const bgColor = index % 2 === 0 ? "var(--clr-accent)" : "var(--clr-sub)";

    return (
        <PreviewContainer
            image={image}
            fg={fgColor}
            bg={bgColor}
            onMouseEnter={() => handleMouseEnter(id)}>
            <LevelTitle>{name}</LevelTitle>
            <ButtonsContainer>
                <PlayButton onClick={() => handlePlayClick(id)}>
                    Play
                </PlayButton>
                <Button onClick={() => handleLeaderboardClick(id)}>
                    Leaderboard
                </Button>
            </ButtonsContainer>
        </PreviewContainer>
    );
}

const LevelTitle = styled.h2`
    text-align: center;
    padding: 1rem;
    font-size: 1.7rem;
    width: 100%;
`;

const Button = styled(DefaultButton)`
    width: 80%;
    padding: 0.7rem 0;
    text-align: center;
    background: var(--clr-text);
    display: block;
    margin: 1rem auto;
    cursor: pointer;
    color: var(--clr-bg);
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
    font-weight: 500;
    font-family: "Sansita", sans-serif;
    font-size: clamp(1.2rem, 3vw, 1.4rem);
`;

const PlayButton = styled(Button)``;

const PreviewContainer = styled.div`
    background: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-position: 5% 80%;
    height: 63vh;
    max-width: 300px;
    width: 80vw;
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &:hover {
        transform: scale(1.02);
    }

    ${LevelTitle} {
        color: ${(props) => props.fg};
        background: ${(props) => props.bg};
    }

    ${PlayButton} {
        color: ${(props) => props.fg};
        background: ${(props) => props.bg};
    }
`;

const ButtonsContainer = styled.div`
    width: 100%;
    margin-bottom: 3vh;
`;

export default LevelPreview;
