import styled from "styled-components";
import Header from "./components/Header";
import ModalBg from "./components/ModalBg";
import SelectionScreen from "./components/SelectionScreen";
import Level from "./components/Level";
import { useEffect, useState } from "react";
import levelsData from "./data/data";
import { LevelContext } from "./context/LevelContext";
import { db } from "./config/firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
    const [display, setDisplay] = useState("selection");
    const [showModal, setShowModal] = useState(true);
    const [levels, setLevels] = useState(levelsData);
    const [currLevel, setCurrLevel] = useState(levelsData[0]);

    const handlePlayClick = (id) => {
        setShowModal(false);
        setDisplay("game");
        const level = levels.find((level) => level.id === id);
        setCurrLevel(level);
        window.scroll(0, 0);
    };

    const handleMouseEnter = (id) => {
        const level = levels.find((level) => level.id === id);
        setCurrLevel(level);
    };

    useEffect(() => {
        const getLevels = async () => {
            // getting the levels without the characters
            const querySnapshot = await getDocs(collection(db, "levels"));
            const data = querySnapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });

            // adding the characters to the levels
            const levels = data.map(async (level) => {
                const charactersSnapshots = await getDocs(
                    collection(db, `levels/${level.id}/characters`)
                );
                const characters = charactersSnapshots.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id };
                });
                return { ...level, characters };
            });
        };

        getLevels();
    }, []);

    return (
        <>
            <LevelContext.Provider value={{ currLevel, setCurrLevel }}>
                <Header
                    gameOngoing={display === "game"}
                    characters={currLevel.characters}
                />
                <Main>
                    <Level />
                </Main>
            </LevelContext.Provider>
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
    margin-top: 146px;
`;

export default App;
