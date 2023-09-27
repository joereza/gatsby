import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        // COLORS
        --transparent: transparent;
        --current: currentColor;
        --white-50: #fff;
        --black-50: #3b3b3b;
        --brown-50: #eae8e5;
        --brown-100: #beafa6;
        --brown-200: #b2a79e;
        --brown-300: #a39d94;
        --brown-400: #9b8e82;
        --brown-500: #827468;
        --brown-600: #665b51;

        // FONTS
        --sans-serif-font-family: 'Lato', sans-serif;
        --serif-font-family: 'Arvo', sans-serif;
    }

    body {
        background-color: var(--brown-50);
        font-size: var(--font-size-base);
    };

    .underline {
        text-decoration: underline;
    };

    .gatsby-image-wrapper img[src*=base64\\,] {
        image-rendering: -moz-crisp-edges;
        image-rendering: pixelated;
    };

    b,
    strong {
        font-weight: 700;
    }
    
    a {
        text-decoration: none;
        color: var(--black-50);
    }
`;
