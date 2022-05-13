import React from "react";
import styled from "styled-components";

function ModalBg(props) {
    return <Div>{props.children}</Div>;
}

const Div = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export default ModalBg;
