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
import {
    collection,
    getDocs,
    orderBy,
    query,
    onSnapshot,
    doc,
    updateDoc,
} from "firebase/firestore";
import EndScreen from "./components/EndScreen";
import Leaderboard from "./components/Leaderboard";

function App() {
    const [display, setDisplay] = useState("selection"); // "selection", "game", "end", "leaderboard"
    const [showModal, setShowModal] = useState(true);
    const [levels, setLevels] = useState([]);
    const [currLevel, setCurrLevel] = useState({});
    const [showSpinner, setShowSpinner] = useState(true);
    const [time, setTime] = useState(0);
    const [showNameInput, setShowNameInput] = useState(false);
    const [name, setName] = useState("");

    const handlePlayClick = (id) => {
        setShowModal(false);
        setDisplay("game");
        const level = levels.find((level) => level.id === id);
        setCurrLevel(level);
        window.scroll(0, 0);
    };

    const handleLeaderboardClick = (id) => {
        setDisplay("leaderboard");
        const level = levels.find((level) => level.id === id);
        setCurrLevel(level);
    };

    const handleMouseEnter = (id) => {
        const level = levels.find((level) => level.id === id);
        setCurrLevel(level);
    };

    const showEndingScreen = () => {
        setShowModal(true);
        setDisplay("end");
    };

    const sortLeaderboard = (leaderboard) => {
        return [...leaderboard].sort((player1, player2) => {
            return player1.time - player2.time;
        });
    };

    const shouldBeInLB = () => {
        const lessThanTen = currLevel.leaderboard.length < 20;
        const isAboveSomeone = currLevel.leaderboard.some(
            (player) => time < player.time
        );

        return lessThanTen || isAboveSomeone;
    };

    const resetCharacters = () => {
        const newLevels = levels.map((level) => {
            return {
                ...level,
                characters: level.characters.map((character) => {
                    return { ...character, found: false };
                }),
            };
        });

        setLevels(newLevels);
    };

    const reset = () => {
        setTime(0);
        setCurrLevel({});
        resetCharacters();
        setShowModal(true);
        setDisplay("selection");
        setShowNameInput(false);
        setName("");
    };

    const goBack = () => {
        setShowModal(true);
        setDisplay("selection");
    };

    const handleNameSubmit = () => {
        if (!!name.trim()) {
            const submission = { name, time };

            let newLeaderBoard = currLevel.leaderboard.concat(submission);
            newLeaderBoard = sortLeaderboard(newLeaderBoard);
            newLeaderBoard = newLeaderBoard.slice(0, 20);

            const docRef = doc(db, "levels", currLevel?.id);
            updateDoc(docRef, { leaderboard: newLeaderBoard });

            reset();
        }
    };

    useEffect(() => {
        const colRef = query(collection(db, "levels"), orderBy("name"));
        const unsub = onSnapshot(colRef, async (snapshot) => {
            const data = snapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });

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
            setShowSpinner(false);
        });

        return unsub;
    }, []);

    return showSpinner ? (
        <Spinner />
    ) : (
        <LevelContext.Provider value={{ currLevel, setCurrLevel }}>
            <Header
                gameOngoing={display === "game"}
                characters={currLevel?.characters}
                time={time}
                setTime={setTime}
                reset={reset}
            />
            <Main gameOngoing={display === "game"}>
                <Level
                    showEndingScreen={showEndingScreen}
                    shouldBeInLB={shouldBeInLB}
                    setShowNameInput={setShowNameInput}
                    gameOngoing={display === "game"}
                />
            </Main>
            {showModal && (
                <ModalBg>
                    {display === "selection" && (
                        <SelectionScreen
                            levels={levels}
                            handlePlayClick={handlePlayClick}
                            handleMouseEnter={handleMouseEnter}
                            handleLeaderboardClick={handleLeaderboardClick}
                            setCurrLevel={setCurrLevel}
                        />
                    )}
                    {display === "leaderboard" && (
                        <Leaderboard goBack={goBack} />
                    )}
                    {display === "end" && (
                        <EndScreen
                            time={time}
                            showNameInput={showNameInput}
                            name={name}
                            setName={setName}
                            handleNameSubmit={handleNameSubmit}
                            reset={reset}
                        />
                    )}
                </ModalBg>
            )}
        </LevelContext.Provider>
    );
}

const Main = styled.main`
    flex-grow: 1;
    margin-top: 146px;
    overflow: ${(props) => (!props.gameOngoing ? "hidden" : "visible")};
`;

export default App;
