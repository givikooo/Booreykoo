import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Colors from './assets/colors';
import Responsive from './Responsive';


const GlobalStyle = createGlobalStyle`

`;
export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

// BurgerMenu variables

export const NavLinkStyle = styled(NavLink) <{ $Pathname: string }>`
    text-decoration: unset;
    color: ${({ $Pathname }) => ($Pathname === "/contact" ? Colors.White : Colors.Black)};
  
    &.active {
        font-weight: bold;
    }

    &:hover{
        color: ${({ $Pathname }) => ($Pathname === "/contact" ? Colors.White : Colors.Black)};
        ::before {
            content: '';
            width: 20px;
            height: 3px;
            background-color: ${({ $Pathname }) => ($Pathname === "/contact" ? Colors.White : Colors.Black)};
            margin-left: -30px;
            margin-right: 10px;
            display: inline-block;
            margin-bottom: 10px;
        }
    }
`;
export const Header = styled.header<{ $Pathname: string }>`
background-color: ${({ $Pathname }) => ($Pathname === "/contact" ? Colors.Black : Colors.Orange)};
z-index: 4;
height: 100vh;
position: fixed;
right: 0;
top: 0;
${Responsive.tablet}{
    width: 100%;
}
${Responsive.mobile}{
    width: 100%;
    height: 100%;
}
`
export const Ul = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
text-decoration: unset;
list-style-type: none;
width: 350px;
/* height: 100%; */
margin: 0px;
${Responsive.tablet}{
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}
${Responsive.mobile}{
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}


li{
    padding: 30px 0;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 32px;
    font-weight: 400;
    text-align: center;
   &:first-child{
    margin-top: 170px;
   }
   ${Responsive.tablet}{
       font-size: 24px;
   }
   ${Responsive.mobile}{
       font-size: 14px;
   }
}
`
export const FbIcon = styled(FaFacebookF) <{ $Pathname: string }>`
    color: ${({ $Pathname }) => ($Pathname === "/contact" ? Colors.White : Colors.Black)};
`
export const InstaIcon = styled(FaInstagram) <{ $Pathname: string }>`
    color: ${({ $Pathname }) => ($Pathname === "/contact" ? Colors.White : Colors.Black)};
`
export const Topic = styled.div<{ $Pathname: string }>`
text-align: center;
font-family: 'Roboto';
font-size: 14px;
line-height: 16px;
color: ${({ $Pathname }) => ($Pathname === "/contact" ? Colors.White : Colors.Black)};
font-weight: bold;
padding-left: 30px;
margin-top: 60px;
${Responsive.mobile}{
    font-size: 12px;
}
`
// BurgerMenu variables


// Column Body With White background color
export const ColumnWhiteBody = styled.section`
display: flex;
flex-direction: column;
align-items: center;
background-color: ${Colors.White};
`
// Column Body With White background color


// Contact & Send Button 
export const Button = styled.button<{
    $btnSize?: "large" | "small";
    $btnBorder?: "orange" | "black",
    $btnColor?: string
}>`
    font-family: 'Roboto';
    font-weight: bold;
    border: 3px solid;
    box-sizing: border-box;
    background-color: transparent;

    /* button size*/
    width: ${({ $btnSize }) => ($btnSize === "large" ? 195 : 180)}px;
    height: ${({ $btnSize }) => ($btnSize === "large" ? 55 : 45)}px;

    /* button borderColor style */
    border-color: ${({ $btnBorder }) => ($btnBorder === "orange" ? Colors.Orange : Colors.Black)};

    color: ${({ $btnColor }) => ($btnColor ? $btnColor : Colors.Black)};

    &:hover{
        background-color: rgba(205,193,82);
    }
    cursor: pointer;
`
// Contact & Send Button 







export default GlobalStyle;


