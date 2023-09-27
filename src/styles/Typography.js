import { createGlobalStyle } from 'styled-components';
import ArvoFontRegular from '../assets/fonts/Arvo-Regular.ttf';
import ArvoFontBold from '../assets/fonts/Arvo-Bold.ttf';
import LatoFontRegular from '../assets/fonts/Lato-Regular.ttf';
import LatoFontBold from '../assets/fonts/Lato-Bold.ttf';

export const Typography = createGlobalStyle`
    @font-face {
        font-display: swap;
        font-family: 'Arvo';
        font-weight: 400;
        font-style: normal;
        src: url(${ArvoFontRegular});
        format('truetype');
    };

    @font-face {
        font-display: swap;
        font-family: 'Arvo';
        font-weight: 700;
        font-style: normal;
        src: url(${ArvoFontBold});
        format('truetype');
    };

    @font-face {
        font-display: swap;
        font-family: 'Lato';
        font-weight: 400;
        font-style: normal;
        src: url(${LatoFontRegular});
        format('truetype');
    };

    @font-face {
        font-display: swap;
        font-family: 'Lato';
        font-weight: 700;
        font-style: normal;
        src: url(${LatoFontBold});
        format('truetype');
    };
`;
