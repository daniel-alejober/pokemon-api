import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html{
        font-size: 62.5%;
        box-sizing: border-box;
    }
    body{
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }
    *,*::after,*::before{
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }
`;
