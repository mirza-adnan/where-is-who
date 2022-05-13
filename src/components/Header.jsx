import React from "react";
import Timer from "./Timer";
import CharacterList from "./CharacterList";
import styled from "styled-components";

function Header({ gameOngoing, characters }) {
    return (
        <HeaderEle gameOngoing={gameOngoing}>
            <h1>
                <BlueSpan>Where</BlueSpan>'s
                <br />
                <RedSpan>Who?</RedSpan>
            </h1>
            {gameOngoing && (
                <>
                    <Timer gameOngoing={gameOngoing} />
                    <CharacterList characters={characters} />
                </>
            )}
        </HeaderEle>
    );
}

const HeaderEle = styled.header`
    padding: 1.5rem 0.2rem;
    display: flex;
    justify-content: ${(props) =>
        props.gameOngoing ? "space-around" : "center"};
    align-items: center;
    font-size: 1.3rem;
    position: relative;
    z-index: 1000;
    background: #222;

    & h1 {
        font-family: "Sansita Swashed", sans-serif;
        text-align: center;
    }
`;

const RedSpan = styled.span`
    color: var(--clr-accent);
`;

const BlueSpan = styled.span`
    color: var(--clr-sub);
`;

export default Header;
