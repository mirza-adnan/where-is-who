import React, { useState } from "react";
import styled from "styled-components";
import DefaultButton from "../styles/Button.style";

function CharacterList({ characters }) {
    const [showList, setShowList] = useState(false);

    const numOfRemaining = characters.reduce((total, curr) => {
        if (!curr.found) return total + 1;
        return total;
    }, 0);

    const handleClick = () => {
        setShowList((prev) => !prev);
    };

    return (
        <Div>
            <Button onClick={handleClick} showList={showList}>
                {numOfRemaining}
            </Button>
            <List showList={showList}>
                {characters.map((item) => (
                    <ListItem key={item.id} found={item.found}>
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                        {item.found && <Line></Line>}
                    </ListItem>
                ))}
            </List>
        </Div>
    );
}

const Div = styled.div`
    position: relative;
    user-select: none;
`;

const Button = styled(DefaultButton)`
    width: 50px;
    height: 50px;
    background-color: var(
        --clr-${(props) => (props.showList ? "text" : "accent")}
    );
    color: var(--clr-${(props) => (props.showList ? "bg" : "text")});
    border-radius: 50px;
    font-size: 1.4rem;
    padding-bottom: 5px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
`;

const List = styled.ul`
    list-style: none;
    position: absolute;
    transform: translateX(-92%)
        scale(${(props) => (props.showList ? "1" : "0")});
    left: 0;
    top: 60%;
    max-width: 300px;
    width: 20vw;
    min-width: 200px;
    background-color: var(--clr-text);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease-in-out;
    transform-origin: top right;
`;

const ListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
    position: relative;
    filter: grayscale(${(props) => (props.found ? "0.6" : "0")});

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

export default CharacterList;
