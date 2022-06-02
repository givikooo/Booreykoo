import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";



const Layout: React.FC = () => {
    const [showHide, setshowHide] = useState<boolean>(false);
    return (
        <>
            <main>
                {showHide === true ? (
                    <BurgerMenu />
                ) : null}
                <Button onClick={() => setshowHide(showHide === true ? false : true)}>
                    <Burger />
                </Button>
            </main>
        </>
    )
}


const Button = styled.button`
    background-color: transparent;
    border: 0px;
`

export default Layout