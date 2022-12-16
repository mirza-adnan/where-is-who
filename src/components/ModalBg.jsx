import React from "react";
import styled from "styled-components";

function ModalBg(props) {
    return <Div>{props.children}</Div>;
}

const Div = styled.div`
    position: fixed;
    height: calc(100vh - 146px);
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 146px;
`;

export default ModalBg;
