import styled from "styled-components";
import Header from "./components/Header";
import ModalBg from "./components/ModalBg";
import SelectionScreen from "./components/SelectionScreen";
import Spinner from "./components/Spinner";
import Level from "./components/Level";
import { useEffect, useState } from "react";
import levelsData from "./data/data";
import { LevelContext } from "./context/LevelContext";
import { db } from "./config/firebase-config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

function App() {
    const [display, setDisplay] = useState("selection");
    const [showModal, setShowModal] = useState(true);
    const [levels, setLevels] = useState("");
    const [currLevel, setCurrLevel] = useState({});
    const [showSpinner, setShowSpinner] = useState(true);

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
            const querySnapshot = await getDocs(
                query(collection(db, "levels"), orderBy("name"))
            );
            const data = querySnapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });

            // adding the characters to the levels
            const levels = [];
            for (const level of data) {
                const charactersSnapshots = await getDocs(
                    collection(db, `levels/${level.id}/characters`)
                );
                const characters = charactersSnapshots.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id };
                });
                levels.push({ ...level, characters });
            }
            setLevels(levels);
            setCurrLevel(levels[0]); // setting the first level in the array as the current level until the user picks another one
            setShowSpinner(false);
        };

        getLevels();
    }, []);

    return showSpinner ? (
        <Spinner />
    ) : (
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
