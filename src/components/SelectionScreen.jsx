import React from "react";
import styled from "styled-components";
import LevelPreview from "./LevelPreview";

function SelectionScreen({ levels, handlePlayClick, handleMouseEnter }) {
    return (
        <Container>
            {levels &&
                levels.map((level, index) => {
                    return (
                        <LevelPreview
                            level={level}
                            index={index}
                            key={level.id}
                            id={level.id}
                            handlePlayClick={handlePlayClick}
                            handleMouseEnter={handleMouseEnter}
                        />
                    );
                })}
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export default SelectionScreen;
