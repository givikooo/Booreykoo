import React, { useState } from 'react'
import styled from 'styled-components'
import api from '../api'
import BtnForm from '../Components/Button'
import ServiceWrap from '../Components/ServiceWrap'
import Loader from '../Components/Loader';
import { useNavigate } from 'react-router-dom'
import NotFound404 from '../Components/NotFound'
import Colors from '../assets/colors'
import Responsive from '../Responsive'
import { ColumnWhiteBody, ContentWrapper, HeadWrapper } from '../GlobalStyle'

const Services = () => {
    const { data: services, isFetching: isServicesLoading, refetch: refetchServices } = api.useGetServicesQuery(undefined);

    const navigate = useNavigate()

    return isServicesLoading ? <Loader /> : !services ? <NotFound404 /> : (
        <>
            <ColumnWhiteBody>
                <HeadWrapper>
                    <HeaderTitle>
                        {services.data.title}
                    </HeaderTitle>
                    <HeaderText>
                        {services.data.description}
                    </HeaderText>
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
                        btnSize='large'
                        btnBorder='orange'
                        type="button"
                        onClick={() => navigate(`/contact`)}>
                        Contact us
                    </BtnForm>
                </BtnDiv>
            </ColumnWhiteBody>
        </>
    )
}





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
    ${Responsive.mobile}{
        font-size: 12px;
    }
   
`
const HeaderText = styled.p`
    ${Responsive.mobile}{
        font-size: 10px;
    }
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
    ${Responsive.mobile}{
        padding:0 20px;
        height: unset;
    }
    ${Responsive.tablet}{
        padding:0 45px;
        height: unset;
    }
    ${Responsive.desktop}{
       height: unset;
    }
    ${Responsive.laptop}{
       height: unset;
       padding:0 80px;
    }
`

const Div = styled.div`
    display: grid;
    row-gap: 40px;
    column-gap: 80px;
    grid-template-columns: repeat(3,minmax(0,1fr));
    ${Responsive.mobile}{
        display: unset;
    }
    ${Responsive.tablet}{
        display: unset;
    }
    ${Responsive.laptop}{
        display: unset;
    }
    ${Responsive.desktop}{
        row-gap: 200px;
        column-gap: 40px; 
    }
    
    
`

const RightSide = styled.div`
   background-color: ${Colors.Black};
   width: 100%;
   height: 100%;
   row-gap: 40px;
   grid-template-columns: repeat(3,minmax(0,1fr));
   padding: 60px;
   ${Responsive.mobile}{
        padding: 20px;
    }
    ${Responsive.tablet}{
        padding: 30px;
    }
    ${Responsive.desktop}{
        padding: 30px;
    }
    ${Responsive.laptop}{
        padding: 40px;
    }
`

const BtnDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
`

export default Services