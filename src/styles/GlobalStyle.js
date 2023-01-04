import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --clr-bg: #030613;
        --clr-text: #f7f8f3;
        --clr-sub: #78bcc4;
        --clr-accent: #f7444e;
        --header-height: 146px;
    }

    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }

    body {
        font-family: "Sansita", sans-serif;
        color: var(--clr-text);
    }

    #root {
        display: flex;
        flex-direction: column;
    }

    @media only screen and (max-width: 450px) {
        :root {
            --header-height: 110px;
        }
    }
`;

export default GlobalStyle;
