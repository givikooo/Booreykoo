import React from "react";
import styled from "styled-components";
import BtnForm from "../Components/Button";
import api from "../api";
import { useNavigate } from "react-router-dom";
import Colors from "../assets/colors";


const Home = () => {
    const navigate = useNavigate();


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
                <div style={{ marginTop: '230px' }} >
                    <BtnForm
                        title='Contact us'
                        btnType="contact"
                        width={true}
                        height={true}
                        borderColor={true}
                        onClick={() => navigate(`/contact`)}
                    />
                </div>
            </Body>
        </>
    )

}

const Body = styled.div`
    background-color: ${Colors.Black};
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
    color: ${Colors.White};
    font-family:'Roboto';
    margin-top: 55px;
`

const Button = styled.button`
    background-color: transparent;
    border: 0px;
`




export default Home