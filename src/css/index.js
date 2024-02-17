import { createGlobalStyle } from 'styled-components';
import { device } from './deviceSizes';
import Regular from '../assets/fonts/Montserrat-Regular.ttf';
import Medium from '../assets/fonts/Montserrat-Medium.ttf';
import Bold from '../assets/fonts/Montserrat-Bold.ttf';

export const GlobalStyle = createGlobalStyle`

//FONTS
@font-face {
    @font-face {
    font-family: 'Montserrat';
    src: url(${Regular}) format('truetype'),
    }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Medium}) format('truetype'),
    }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Bold}) format('truetype'),
    }
}


//ROOT
:root{
    --main-font-regular: ${Regular};
    --main-font-medium: ${Medium};
    --main-font-bold: ${Bold};

    --font-size: 16px;
    --line-height: 1.25;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;

    --bg-clr:  #B2B1AF;
    --text-special-clr:#f3e61d;
    --text-grey-clr: #4D5055;
    --text-clr-black: #2F2E30;
    --text-clr-white: #fff;

    --favorite-icon: #f85d52;

    --select-focus-within: #26282A;
    --btn-dark-hover-focus: #4D5055;
    --btn-yellow-hover-focus:#dacf1a;
    --hover-focus-trans: 250ms cubic-bezier(0.4, 0, 0.2, 1);

    --favorite-icon-clr:  #ff0000;
}

body{
    font-family: 'Montserrat ', sans-serif;
    font-size: var(--font-size);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height);
    color: var(--text-clr-black);
    background-color: var(--bg-clr) ;
    
}
/* #401641 */

.main-container {
  width: 100%;
  margin: 0 auto; 
  
  @media ${device.mobile} {
        max-width: 320px;
        }
  
  @media ${device.tablet} {
        max-width: 744px;
        
        }

    @media ${device.desktop} {        
        max-width: 1180px;       
      
      }
}
`;
