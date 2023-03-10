import React from "react";
import Timer from "./Timer";
import CharacterList from "./CharacterList";
import styled from "styled-components";

function Header({ gameOngoing, characters, time, setTime, reset }) {
    return (
        <Wrapper>
            <HeaderEle gameOngoing={gameOngoing}>
                <h1 onClick={reset}>
                    <BlueSpan>Where</BlueSpan>'s
                    <br />
                    <RedSpan>Who?</RedSpan>
                </h1>
                {gameOngoing && (
                    <>
                        <Timer
                            gameOngoing={gameOngoing}
                            time={time}
                            setTime={setTime}
                        />
                        <CharacterList characters={characters} />
                    </>
                )}
            </HeaderEle>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
`;

const HeaderEle = styled.header`
    padding: 1.5em 0.2rem;
    display: flex;
    height: var(--header-height);
    justify-content: ${(props) =>
        props.gameOngoing ? "space-around" : "center"};
    align-items: center;
    font-size: clamp(0.9rem, 4vw, 1.3rem);
    position: relative;
    z-index: 1000;
    background-color: #222222;

    & h1 {
        font-family: "Sansita Swashed", sans-serif;
        text-align: center;
        cursor: pointer;
    }
`;

const RedSpan = styled.span`
    color: var(--clr-accent);
`;

const BlueSpan = styled.span`
    color: var(--clr-sub);
`;

export default Header;
