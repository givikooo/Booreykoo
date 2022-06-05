import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import api from '../api';
import Colors from '../assets/colors';
import Loader from '../Components/Loader';
import NotFound404 from '../Components/NotFound';
import Responsive from '../Responsive';

const PortfolioDetailed = () => {
    const { slug = '' } = useParams();

    const { data: portfolioDetail, isFetching: isPortfolioDetailLoading } = api.useGetPortfolioDetailedQuery(slug);

    return isPortfolioDetailLoading ? <Loader /> : !portfolioDetail ? <NotFound404 /> : (
        <>
            <MainWrapper>
                <LeftSide>
                    <HeaderTitle>
                        {portfolioDetail.data.title}
                    </HeaderTitle>
                    <Text>
                        {portfolioDetail.data.description}
                    </Text>
                </LeftSide>
                <div>
                    <Img src={portfolioDetail.data.thumb} alt="" />
                </div>
            </MainWrapper>
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
`

const Text = styled.p`
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 16px;
    color: ${Colors.Black};
`
const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 0px;
    height: 100vh;
    padding: 20px;
    ${Responsive.mobile}{
        grid-template-columns: repeat(1,1fr);
    }
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`
const LeftSide = styled.div`
    padding-top: 50px;
`
export default PortfolioDetailed