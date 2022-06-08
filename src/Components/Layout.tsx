import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import Messenger from "./Messanger";
import Colors from './../assets/colors';




const Layout: React.FC<{ children?: React.ReactNode; link?: string }> = ({ children, link }) => {
    const [showHide, setshowHide] = useState<boolean>(false);

    const Pathname = window.location.pathname


    return (
        <>
            {showHide === true ? (
               <div onMouseLeave={() => setshowHide(false)}>
                    <BurgerMenu onClose={showHide} />
               </div>
            ) : null}
            {link ? (
                <ArrowLink to={link}><IconStyle /></ArrowLink>
            ) : null}
            <Button onClick={() => setshowHide(showHide === true ? false : true)}>
                <Burger
                    divType={Pathname == "/" ? "white" : "black" && Pathname === "/portfolio" ? "white" : "black" && Pathname === "/about" ? "black" : "white" && Pathname === "/services" ? "black" : "white"}
                />
            </Button>
            <Messenger />

            <main>
                {children}
            </main>
        </>
    )
}

const IconStyle = styled(BiArrowBack)`
    color: ${Colors.Black};
    width: 24px;
    height: 24px;
`
const ArrowLink = styled(Link)`
    position: absolute;
    top: 15px; 
    left: 15px;
    z-index: 4;
`

const Button = styled.button`
    background-color: transparent;
    border: 0px;
    position: absolute;
    right: 0;
    top: 10px;
    z-index: 5;
`

export default Layout