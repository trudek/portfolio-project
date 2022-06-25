import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.text5};
        font-family: 'Poppins', sans-serif;
        letter-spacing: .6px;
    }
`;
