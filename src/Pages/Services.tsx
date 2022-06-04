import React, { useState } from 'react'
import styled from 'styled-components'
import Burger from '../Components/Burger'
import BurgerMenu from '../Components/BurgerMenu'
import BtnForm from '../Components/Button'
import ServiceWrap from '../Components/ServiceWrap'

const Services = () => {

    const [showHide, setshowHide] = useState<boolean>(false);
    return (
        <>
            <Body>
                <HeadWrapper>
                    <HeaderTitle>
                        Services
                    </HeaderTitle>
                    <p>
                        Booreykoo is a branding, web development, design, and marketing firm with more than fourteen years of industry experience, serving clients worldwide. Welcome to the future of design. <br />
                        Our main goal is not only to rank your website higher but also maintain its high rank once achieved.
                    </p>
                </HeadWrapper>
                <ContentWrapper>
                    <LeftSide>
                        Just be Yourself!
                    </LeftSide>
                    <RightSide>
                        <Div>
                            <ServiceWrap
                                title='Mobile & Web development'
                                content='Booreykoo has extensive experience in custom mobile and web development. We constantly develop our technology capabilities to always deliver the agile and top notch products.'
                            />
                            <ServiceWrap
                                title='Mobile & Web development'
                                content='Booreykoo has extensive experience in custom mobile and web development. We constantly develop our technology capabilities to always deliver the agile and top notch products.'
                            />
                            <ServiceWrap
                                title='Mobile & Web development'
                                content='Booreykoo has extensive experience in custom mobile and web development. We constantly develop our technology capabilities to always deliver the agile and top notch products.'
                            />
                            <ServiceWrap
                                title='Mobile & Web development'
                                content='Booreykoo has extensive experience in custom mobile and web development. We constantly develop our technology capabilities to always deliver the agile and top notch products.'
                            />
                            <ServiceWrap
                                title='Mobile & Web development'
                                content='Booreykoo has extensive experience in custom mobile and web development. We constantly develop our technology capabilities to always deliver the agile and top notch products.'
                            />
                            <ServiceWrap
                                title='Mobile & Web development'
                                content='Booreykoo has extensive experience in custom mobile and web development. We constantly develop our technology capabilities to always deliver the agile and top notch products.'
                            />
                            <ServiceWrap
                                title='Mobile & Web development'
                                content='Booreykoo has extensive experience in custom mobile and web development. We constantly develop our technology capabilities to always deliver the agile and top notch products.'
                            />
                            <ServiceWrap
                                title='Mobile & Web development'
                                content='Booreykoo has extensive experience in custom mobile and web development. We constantly develop our technology capabilities to always deliver the agile and top notch products.'
                            />
                            <ServiceWrap
                                title='Mobile & Web development'
                                content='Booreykoo has extensive experience in custom mobile and web development. We constantly develop our technology capabilities to always deliver the agile and top notch products.'
                            />
                        </Div>
                    </RightSide>
                </ContentWrapper>
                <BtnDiv>
                    <BtnForm
                        title='Contact us'
                        btnType="send"
                        width={true}
                        height={true}
                        borderColor={true}
                        onClick={() => alert('Button 1 is clicked !')}
                    />
                </BtnDiv>
            </Body>
        </>
    )
}


const Button = styled.button`
    background-color: transparent;
    border: 0px;
`

const HeadWrapper = styled.div`
    margin-top: 80px    ;
    padding: 0 222px;
    font-family: "roboto";
    font-size: 14px;
    line-height: 16px;
    font-style: normal;
    color: #161616;
    margin-bottom: 30px;
`
const HeaderTitle = styled.h4`
    font-size: 16px;
    font-weight: bold;
    &::after{
        content: "";
        display: block;
        width: 13px;
        height: 2px;
        background-color: #333333;
        margin: 10px 0 12px;
    }
`
const ContentWrapper = styled.div`
    height: 620px;
    display: flex;
`

const LeftSide = styled.div`
    padding:0 95px;
    writing-mode: vertical-rl;
    background-color: #CDC152;
    height: 100%;
    display: flex;
    justify-content: center;
    color: #161616;
    font-weight: bold;
    font-size: 24px;
`

const Div = styled.div`
    display: grid;
    row-gap: 40px;
    column-gap: 80px;
    grid-template-columns: repeat(3,minmax(0,1fr));
`

const RightSide = styled.div`
   background-color: #161616;
   width: 100%;
   row-gap: 40px;
   grid-template-columns: repeat(3,minmax(0,1fr));
   /* padding-left: 60px;
   padding-right: 60px; */
   padding: 60px;
`

const Body = styled.section`
    display: flex;
    flex-direction: column;
`
const BtnDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 45px;
`

export default Services