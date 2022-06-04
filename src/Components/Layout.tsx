import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";



const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [showHide, setshowHide] = useState<boolean>(false);

    const Pathname = window.location.pathname


    return (
        <>
            <main>
                {showHide === true ? (
                    <BurgerMenu />
                ) : null} 
                <Button onClick={() => setshowHide(showHide === true ? false : true)}>
                    <Burger divType={Pathname == "/" ? "white" : "black" } />
                </Button>
                {children}
            </main>
        </>
    )
}


const Button = styled.button`
    background-color: transparent;
    border: 0px;
    position: absolute;
    right: 0;
    top: 10px;
    z-index: 5;
`

export default Layout