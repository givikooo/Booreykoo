import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';


const Layout: React.FC<{ children?: React.ReactNode; link?: string }> = ({ children, link }) => {
    const [showHide, setshowHide] = useState<boolean>(false);

    const Pathname = window.location.pathname


    return (
        <>
            {showHide === true ? (
                <BurgerMenu />
            ) : null}
            {link ? (
                <ArrowLink to={link}><IconStyle /></ArrowLink>
            ) : null}
            <Button onClick={() => setshowHide(showHide === true ? false : true)}>
                <Burger divType={Pathname == "/"  ? "white" : "black"} />
            </Button>
            <main>
              {children}
            </main>
        </>
    )
}

const IconStyle = styled(BiArrowBack)`
    color: #161616;
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