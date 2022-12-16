import React from "react";
import styled from "styled-components";
import { getMinutes, getSeconds } from "../utils/functions";

function EndScreen({
    time,
    showNameInput,
    name,
    setName,
    handleNameSubmit,
    reset,
}) {
    const minutes = getMinutes(time);
    const seconds = getSeconds(time);

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <Container>
            <CloseButton onClick={reset}>+</CloseButton>
            <div>
                <p>
                    Your time was{" "}
                    <span>
                        {minutes} : {seconds}
                    </span>
                </p>
            </div>
            {showNameInput && (
                <InputContainer>
                    <input
                        type="text"
                        maxLength="6"
                        value={name}
                        onChange={handleChange}
                        placeholder="Name (Max 6 characters)"
                    />
                    <button onClick={handleNameSubmit}>Submit</button>
                </InputContainer>
            )}
        </Container>
    );
}

const Container = styled.div`
    max-width: 600px;
    width: 90%;
    height: 300px;
    background-color: var(--clr-text);
    color: var(--clr-bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: var(--clr-text);
    color: var(--clr-bg);
    border-radius: 2px;
    position: relative;

    p:nth-child(1) {
        font-size: 2rem;
    }

    p:nth-child(2) {
        font-size: 2rem;
        color: var(--clr-bg);
    }

    div:first-child {
        text-align: center;
    }
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    outline: none;
    position: absolute;
    font-size: 2.2rem;
    font-weight: 500;
    cursor: pointer;
    right: 2%;
    top: 1%;
    rotate: 45deg;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    input {
        max-width: 420px;
        width: 95%;
        border: none;
        outline: none;
        padding: 0.6rem;
        font-size: 1.2rem;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    button {
        max-width: 420px;
        width: 95%;
        padding: 0.5rem;
        background-color: var(--clr-bg);
        color: var(--clr-text);
        font-size: 1.2rem;
        font-weight: medium;
        cursor: pointer;
        border-radius: 5px;
        transition: box-shadow 0.2s ease-in-out;
        border: none;

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
    }
`;

export default EndScreen;
