import React, { useState, useContext } from "react";
import styled from "styled-components";
import PopupCharacterList from "./PopupCharacterList";
import { LevelContext } from "../context/LevelContext";
import LocNar from "../assets/the-loc-nar.jpg";

function Level({ showEndingScreen, shouldBeInLB, setShowNameInput }) {
    const { currLevel } = useContext(LevelContext);
    const [showList, setShowList] = useState(false);
    const [coordsData, setCoordsData] = useState({
        x: 0,
        y: 0,
        adjX: 0,
        adjY: 0,
        fromRight: false,
        fromBottom: false,
        width: 0,
        height: 0,
    });

    const handleClick = (e) => {
        setShowList((prev) => {
            // so that the list doesn't move while closing
            if (!prev) {
                const rect = e.target.getBoundingClientRect();

                let width = rect.width;
                let height = rect.height;

                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;

                let adjX = x;
                let adjY = y;

                let fromRight = false;
                let fromBottom = false;

                if (x > rect.width / 2) {
                    adjX = rect.width - x;
                    fromRight = true;
                } else {
                    fromRight = false;
                }

                if (rect.height - y <= 400) {
                    adjY = rect.height - y;
                    fromBottom = true;
                } else {
                    fromBottom = false;
                }
                setCoordsData({
                    x,
                    y,
                    adjX,
                    adjY,
                    fromRight,
                    fromBottom,
                    width,
                    height,
                });
            }
            return !prev;
        });
    };

    return (
        <Container>
            <Img
                src={currLevel.image ? currLevel.image : LocNar}
                onClick={handleClick}
            />
            <PopupCharacterList
                showList={showList}
                setShowList={setShowList}
                coordsData={coordsData}
                showEndingScreen={showEndingScreen}
                shouldBeInLB={shouldBeInLB}
                setShowNameInput={setShowNameInput}
            />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: var(--clr-bg);
`;

const Img = styled.img`
    width: 100%;
`;

export default Level;
