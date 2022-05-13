import styled from "styled-components";
import Header from "./components/Header";
import ModalBg from "./components/ModalBg";
import SelectionScreen from "./components/SelectionScreen";
import Level from "./components/Level";
import { useState } from "react";
import levelsData from "./data/data";

function App() {
    const [display, setDisplay] = useState("selection");
    const [showModal, setShowModal] = useState(true);
    const [levels, setLevels] = useState(levelsData);
    const [currLevel, setCurrLevel] = useState(levels[0]);

    const handlePlayClick = (id) => {
        setShowModal(false);
        setDisplay("game");
        const level = levels.find((level) => level.id === id);
        setCurrLevel(level);
    };

    const handleMouseEnter = (id) => {
        const level = levels.find((level) => level.id === id);
        setCurrLevel(level);
    };

    return (
        <>
            <Header
                gameOngoing={display === "game"}
                characters={currLevel.characters}
            />
            <Main>
                <Level currLevel={currLevel} />
            </Main>
            {showModal && (
                <ModalBg>
                    {display === "selection" && (
                        <SelectionScreen
                            levels={levels}
                            handlePlayClick={handlePlayClick}
                            handleMouseEnter={handleMouseEnter}
                        />
                    )}
                </ModalBg>
            )}
        </>
    );
}

const Main = styled.main`
    flex-grow: 1;
`;

export default App;
