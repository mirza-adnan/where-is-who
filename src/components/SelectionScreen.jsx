import React from "react";
import styled from "styled-components";
import LevelPreview from "./LevelPreview";
import PreviewSlider from "./PreviewSlider";

function SelectionScreen({
    levels,
    handlePlayClick,
    handleMouseEnter,
    handleLeaderboardClick,
    setCurrLevel,
}) {
    // return (
    //     <Container>
    //         {levels?.map((level, index) => {
    //             return (
    //                 <LevelPreview
    //                     level={level}
    //                     index={index}
    //                     key={level.id}
    //                     id={level.id}
    //                     handlePlayClick={handlePlayClick}
    //                     handleMouseEnter={handleMouseEnter}
    //                     handleLeaderboardClick={handleLeaderboardClick}
    //                 />
    //             );
    //         })}
    //     </Container>
    // );

    return (
        <Container>
            <PreviewSlider
                levels={levels}
                handlePlayClick={handlePlayClick}
                handleMouseEnter={handleMouseEnter}
                handleLeaderboardClick={handleLeaderboardClick}
                setCurrLevel={setCurrLevel}
            />
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
