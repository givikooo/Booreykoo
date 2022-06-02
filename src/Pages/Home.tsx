import React, { useState } from "react";
import styled from "styled-components";
import Burger from "../Components/Burger";
import BurgerMenu from "../Components/BurgerMenu";
import BtnForm from "../Components/Button";



const Home = () => {
    const [showHide, setshowHide] = useState<boolean>(false);




    return (
        <>
            <Body>
                <MainWrapp>
                    <ImgTag>
                        <img src="https://booreykoo.com/images/booreykoo.svg" alt="" />
                    </ImgTag>
                    <TextTag>
                        BUREIKOU - [BOO-REY-KOO] JAPANESE 無礼講 <br />
                        putting everything aside to be yourself!
                    </TextTag>
                </MainWrapp>
                <div style={{marginTop: '230px'}} >
                    <BtnForm
                        title='Contact us'
                        btnType="contact"
                        width={true}
                        height={true}
                        borderColor={true}
                        onClick={() => alert('Button 1 is clicked !')}
                    />
                </div>
                {showHide === true ? (
                    <BurgerMenu />
                ) : null}
                <Button onClick={() => setshowHide(showHide === true ? false : true)}>
                    <Burger 
                        divType='white'
                    />
                </Button>
            </Body>
        </>
    )

}

const Body = styled.body`
    background-color: #161616;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`
const MainWrapp = styled.div`
    text-align: center;
    margin-top: 420px;
`
const ImgTag = styled.div`
   
`
const TextTag = styled.p`
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #ffffff;
    font-family:'Roboto';
    margin-top: 55px;
`

const Button = styled.button`
    background-color: transparent;
    border: 0px;
`




export default Home