import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    }

    body {
        font-family: "Bebas";
        font-size: 14px;
        background-color: whitesmoke;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;

        ::-webkit-scrollbar {
            width: 8px;
            background-color: var(--primary);
        }
        ::-webkit-scrollbar-track {
            background-color: var(--primary);
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #000;
            border-radius: 10px;
        }
    }

    html, body, #root {
        height: 100%;
    }

    :root {
        --primary: #101213;
        --accent-color: #b30000;
        --hover-accent-color: #870000;
    }
`;
