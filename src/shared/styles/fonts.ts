import { createGlobalStyle } from "styled-components";
import kanitWoff2Regular300Woff2 from "../../assets/fonts/kanit-v12-latin/kanit-v12-latin-300.woff2";
import kanitWoff2RegularWoff2 from "../../assets/fonts/kanit-v12-latin/kanit-v12-latin-regular.woff2";
import kanitWoff2Regular600Woff2 from "../assets/../fonts/kanit-v12-latin/kanit-v12-latin-600.woff2";
import kanitWoff2Regular800Woff2 from "../assets/../fonts/kanit-v12-latin/kanit-v12-latin-800.woff2";

import kanitWoff2Regular300Woff from "../assets/../fonts/kanit-v12-latin/kanit-v12-latin-300.woff";
import kanitWoff2RegularWoff from "../../assets/fonts/kanit-v12-latin/kanit-v12-latin-regular.woff";
import kanitWoff2Regular600Woff from "../../assets/fonts/kanit-v12-latin/kanit-v12-latin-600.woff";
import kanitWoff2Regular800Woff from "../../assets/fonts/kanit-v12-latin/kanit-v12-latin-800.woff";

export const GlobalFonts = createGlobalStyle`
    /* kanit-300 - latin */
    @font-face {
        font-display: swap;
        font-family: 'Kanit';
        font-style: normal;
        font-weight: 300;
        src: url(${kanitWoff2Regular300Woff2}) format('woff2'),
            url(${kanitWoff2Regular300Woff}) format('woff')
    }
    /* kanit-regular - latin */
    @font-face {
        font-display: swap;
        font-family: 'Kanit';
        font-style: normal;
        font-weight: 400;
        src: url(${kanitWoff2RegularWoff2}) format('woff2'),
        url(${kanitWoff2RegularWoff}) format('woff')
    }
    /* kanit-600 - latin */
    @font-face {
        font-display: swap;
        font-family: 'Kanit';
        font-style: normal;
        font-weight: 600;
        src: url(${kanitWoff2Regular600Woff2}) format('woff2'),
        url(${kanitWoff2Regular600Woff}) format('woff')
    }
    /* kanit-800 - latin */
    @font-face {
        font-display: swap;
        font-family: 'Kanit';
        font-style: normal;
        font-weight: 800;
        src: url(${kanitWoff2Regular800Woff2}) format('woff2'),
        url(${kanitWoff2Regular800Woff}) format('woff')
    }

`;
