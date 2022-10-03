import React, { useContext } from "react";
import styled from "styled-components";
import { LevelContext } from "../context/LevelContext";
import { getScaledCoords } from "../utils/functions";

function PopupCharacterList({ showList, coordsData }) {
    const { currLevel, setCurrLevel } = useContext(LevelContext);
    const { characters } = currLevel;
    const handleClick = (id, coordsData) => {
        const [x, y] = getScaledCoords(coordsData);

        const character = currLevel.characters.find(
            (character) => character.id === id
        );

        if (
            x >= character.minX &&
            x <= character.maxX &&
            y >= character.minY &&
            y <= character.maxY
        ) {
            const newCharacters = currLevel.characters.map((character) => {
                if (character.id === id) {
                    character.found = true;
                    return character;
                }
                return character;
            });

            setCurrLevel({ ...currLevel, characters: newCharacters });
        }
    };

    return (
        <List showList={showList} coordsData={coordsData}>
            {characters &&
                characters.map((character) => (
                    <ListItem
                        onClick={() => handleClick(character.id, coordsData)}
                        found={character.found}
                        key={character.id}>
                        <img src={character.image} alt={character.name} />
                        <p>{character.name}</p>
                        {character.found && <Line></Line>}
                    </ListItem>
                ))}
        </List>
    );
}

const List = styled.div`
    position: absolute;
    left: ${(props) =>
        props.coordsData.fromRight ? "auto" : props.coordsData.adjX + 1 + "px"};
    right: ${(props) =>
        props.coordsData.fromRight ? props.coordsData.adjX + 1 + "px" : "auto"};
    top: ${(props) =>
        props.coordsData.fromBottom ? "auto" : props.coordsData.adjY + "px"};
    bottom: ${(props) =>
        props.coordsData.fromBottom ? props.coordsData.adjY + "px" : "auto"};
    max-width: 300px;
    width: 20vw;
    min-width: 200px;
    background-color: var(--clr-text);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    transform: scale(${(props) => (props.showList ? "1" : "0")});
    transition: transform 0.2s ease-in-out;
    transform-origin: ${(props) => {
        let value = "";
        props.coordsData.fromBottom ? (value += "bottom ") : (value += "top ");
        props.coordsData.fromRight ? (value += "right") : (value += "left");
        return value;
    }};
`;

const ListItem = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    position: relative;
    font-family: "Sansita", sans-serif;
    font-size: 1.3rem;
    filter: grayscale(${(props) => (props.found ? "0.6" : "0")});

    &:hover {
        background-color: #d6d6d6;
    }

    & p {
        color: var(--clr-bg);
        width: 60%;
        text-align: center;
    }

    & img {
        width: 35%;
    }
`;

const Line = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    height: 5px;
    transform: translate(-50%, -50%);
    background-color: var(--clr-accent);
    border-radius: 50px;
`;

export default PopupCharacterList;
