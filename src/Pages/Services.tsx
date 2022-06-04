import React, { useState } from 'react'
import styled from 'styled-components'
import api from '../api'
import Burger from '../Components/Burger'
import BurgerMenu from '../Components/BurgerMenu'
import BtnForm from '../Components/Button'
import ServiceWrap from '../Components/ServiceWrap'
import Loader from '../Components/Loader';
import { useNavigate } from 'react-router-dom'
import NotFound404 from '../Components/NotFound'
import Colors from '../assets/colors'

const Services = () => {
    const { data: services, isFetching: isServicesLoading, refetch: refetchServices } = api.useGetServicesQuery(undefined);

    const navigate = useNavigate()

    return isServicesLoading ? <Loader /> : !services ? <NotFound404 /> : (
        <>
            <Body>
                <HeadWrapper>
                    <HeaderTitle>
                        {services.data.title}
                    </HeaderTitle>
                    <p>
                        {services.data.description}
                    </p>
                </HeadWrapper>
                <ContentWrapper>
                    <LeftSide>
                        {services.data.sidebar_text}
                    </LeftSide>
                    <RightSide>
                        <Div>
                            {services.data.items.map((s, index) => (
                                <ServiceWrap
                                    title={s.title}
                                    content={s.description}
                                />
                            ))}
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
                        onClick={() => navigate(`/contact`)}
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
    color: ${Colors.Black};
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
        background-color: ${Colors.Shaft};
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
    background-color: ${Colors.Orange};
    height: 100%;
    display: flex;
    justify-content: center;
    color: ${Colors.Black};
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
   background-color: ${Colors.Black};
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