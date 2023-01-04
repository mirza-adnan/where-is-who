import React from "react";
import styled from "styled-components";

function ModalBg(props) {
    return <Div>{props.children}</Div>;
}

const Div = styled.div`
    position: fixed;
    height: calc(100vh - var(--header-height));
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: var(--header-height);
`;

export default ModalBg;
