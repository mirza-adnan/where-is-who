import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import LevelPreview from "./LevelPreview";

function PreviewSlider({
    levels,
    handlePlayClick,
    handleMouseEnter,
    handleLeaderboardClick,
    setCurrLevel,
}) {
    const [current, setCurrent] = useState(0);
    const length = levels.length;

    const nextSlide = () => {
        setCurrent((prev) => {
            const newIndex = (prev + 1) % length;
            return newIndex;
        });
    };

    const prevSlide = () => {
        setCurrent((prev) => {
            const newIndex = prev === 0 ? length - 1 : (prev - 1) % length;
            return newIndex;
        });
    };

    useEffect(() => {
        setCurrLevel(levels[current]);
    }, [current]);

    if (!Array.isArray(levels) || length <= 0) return null;

    return (
        <Slider>
            <FaArrowAltCircleLeft
                className="left-arrow arrow"
                onClick={prevSlide}
            />
            <FaArrowAltCircleRight
                className="right-arrow arrow"
                onClick={nextSlide}
            />
            {levels?.map((level, index) => {
                return (
                    <div
                        className={index === current ? "slide-active" : "slide"}
                        key={level.id}>
                        {index === current && (
                            <LevelPreview
                                level={level}
                                index={index}
                                key={level.id}
                                id={level.id}
                                handlePlayClick={handlePlayClick}
                                handleMouseEnter={handleMouseEnter}
                                handleLeaderboardClick={handleLeaderboardClick}
                            />
                        )}
                    </div>
                );
            })}
        </Slider>
    );
}

const Slider = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .arrow {
        position: absolute;
        top: 50%;
        font-size: 3rem;
        color: var(--clr-text);
        z-index: 10;
        cursor: pointer;
        user-select: none;
        translate: 0px -50%;
    }

    .left-arrow {
        left: 30%;
    }

    .right-arrow {
        right: 30%;
    }

    .slide-active {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 1s ease, scale 1s ease;
        scale: 1.08;
    }

    .slide {
        opacity: 0;
        transition: opacity 1s ease;
    }

    @media only screen and (max-width: 1150px) {
        .left-arrow {
            left: 20%;
        }

        .right-arrow {
            right: 20%;
        }
    }

    @media only screen and (max-width: 740px) {
        .left-arrow {
            left: 10%;
        }

        .right-arrow {
            right: 10%;
        }
    }

    @media only screen and (max-width: 740px) {
        .left-arrow {
            left: 2%;
        }

        .right-arrow {
            right: 2%;
        }
    }
`;

export default PreviewSlider;
