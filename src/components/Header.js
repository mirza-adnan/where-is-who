import React from "react";
import styled from "styled-components";

function Header() {
    return (
        <HeaderEle>
            <h1>
                <BlueSpan>Where</BlueSpan> is <RedSpan>Who?</RedSpan>
            </h1>
        </HeaderEle>
    );
}

const HeaderEle = styled.header`
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
`;

const RedSpan = styled.span`
    color: var(--clr-accent);
`;

const BlueSpan = styled.span`
    color: var(--clr-sub);
`;

export default Header;
