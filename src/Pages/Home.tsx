import React from "react";
import styled from "styled-components";
import BtnForm from "../Components/Button";
import api from "../api";
import { useNavigate } from "react-router-dom";
import Colors from "../assets/colors";
import Responsive from "../Responsive";



const Home = () => {
    const navigate = useNavigate();


    return (
        <>
            <Body>
                <MainWrapp>
                    <ImgTag>
                        <Img src="https://booreykoo.com/images/booreykoo.svg" alt="" />
                    </ImgTag>
                    <TextTag>
                        BUREIKOU - [BOO-REY-KOO] JAPANESE 無礼講 <br />
                        putting everything aside to be yourself!
                    </TextTag>
                </MainWrapp>


                <BtnWrapper >
                    <BtnForm
                        btnColor={Colors.White}
                        btnSize="large"
                        btnBorder="orange"
                        type="button"
                        onClick={() => navigate(`/contact`)}>
                        Contact us
                    </BtnForm>
                </BtnWrapper>
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
    ${Responsive.mobile}{
        justify-content: center;
    }
`
const MainWrapp = styled.div`
    text-align: center;
    margin-top: 420px;
    ${Responsive.mobile}{
        margin-top: unset;
    }
`
const ImgTag = styled.div`
   
`
const Img = styled.img`
    width: 100%;
    ${Responsive.tablet}{
        width: 75%;
    }
    ${Responsive.mobile}{
        width: 50%;
    }
`

const TextTag = styled.p`
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: ${Colors.White};
    font-family:'Roboto';
    margin-top: 55px;
    ${Responsive.mobile}{
        font-size: 10px;
    }
`
const BtnWrapper = styled.div`
    
    ${Responsive.fullHD}{
        margin-top: 150px;
    }
    ${Responsive.laptop}{
        margin-top: 50px;
    }
    ${Responsive.mobile}{
        margin-top: 100px;
    }
`




export default Home