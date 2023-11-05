import { createGlobalStyle } from "styled-components";
import ExoRegularWoff from "./assets/fonts/exo/Exo-Regular.woff";
import ExoRegularTtf from "./assets/fonts/exo/Exo-Regular.ttf";
import ExoRegularOtf from "./assets/fonts/exo/exoregular.otf";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'exo_regular';
    src: local('exo_regular'),
        url(${ExoRegularWoff}) format('woff'),
        url(${ExoRegularTtf}) format('truetype'),
        url(${ExoRegularOtf}) format('opentype');
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'exo_regular';
}

body{
    background-color: ${({ theme }) => theme.color.bodyBg};
}

.container{
    margin:0 auto;
    max-width: 1180px;
}

img{
    max-width: 100%;
    height: auto;
}

.fx {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.fx-ac {
    -webkit-box-align: center;
    -ms-flex-align: center;
    -ms-grid-row-align: center;
    align-items: center;
}
.fx-jb {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.fx-jc {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.fx-ae {
    align-items: flex-end;
}
.fx-as {
    align-items: flex-start;
}
.fx-je {
    justify-content: flex-end;
}
.fx-js {
    justify-content: flex-start;
}
.f-dir-col {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.fx-wrap {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

h1{
    font-size: 28px;
    letter-spacing: 6px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.heading};
}

p{
    color: ${({ theme }) => theme.color.text};
    font-size: 14px;
    line-height: 22px;
}

a{
    text-decoration: none;
    color: ${({ theme }) => theme.color.navLink}; 
}

li{
    list-style: none;
}
`;
