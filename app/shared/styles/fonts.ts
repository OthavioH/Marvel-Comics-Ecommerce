import { createGlobalStyle } from "styled-components";

import bebasRegular from "../../assets/fonts/bebas/Bebas-Regular.otf";

export const GlobalFonts = createGlobalStyle`

    /* bebas-regular */
    @font-face {
        font-display: swap;
        font-family: 'Bebas';
        font-style: normal;
        font-weight: 400;
        src: url(${bebasRegular}) format('opentype')
    }

`;
