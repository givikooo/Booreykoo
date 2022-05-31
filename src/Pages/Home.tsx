import React from "react";
import styled from "styled-components";
import Burger from "../Components/Burger";
import BurgerMenu from "../Components/BurgerMenu";



const Home  = () => {

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
                <ContactBtn>
                    Contact Us
                </ContactBtn>
                <BurgerMenu/>
                <Burger/>
            </Body>
        </>
    )

}

const Body = styled.body`
    background-color: #161616;
    height: 100vh;
    width: 100%;
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
const ContactBtn = styled.button`
    width: 190px;
    height: 55px;
    border: 3px #CDC152 solid;
    box-sizing: border-box;
    background-color: transparent;
    color: #ffffff;
    margin-top: 230px;
    &:hover{
        background-color: rgba(205,193,82,);
    }
    cursor: pointer;
   
`





export default Home