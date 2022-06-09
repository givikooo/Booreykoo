import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import api from '../api';
import { responsive } from '../GlobalStyle';
import Loader from './Loader';

const Slider = () => {
    const { data: portfolio, isFetching: isPortfolioLoading, refetch: refetchPortfolio } = api.useGetPortfolioQuery(undefined);
    return isPortfolioLoading ? <Loader /> : !portfolio ? (<span>not found menu</span>) : (
        <div>
            <Carousel

                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                arrows={false}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px" responsive={responsive}
            >
                <MainWrapper className='carousel-portfolio'>
                    {portfolio.data.items.map((p, index) => (
                        <Wrapper>

                            <Link to={`${p.slug}`}>
                                <Title>{p.title}</Title>
                                <Descr>{p.description}</Descr>
                                <Image src={p.thumb} alt="" />
                            </Link>
  
                        </Wrapper>
                    ))}
                </MainWrapper>

            </Carousel>;
        </div>
    )
}

const MainWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(2, 1fr);
   grid-column-gap: 20px;
   grid-row-gap: 20px;
   ${responsive.mobile}{
    /* grid-template-columns: repeat(3, 1fr); */
   }
`
const Wrapper = styled.div`
    position: relative;
`
const Title = styled.h3`
    position: absolute;
    top: 150px;
    left: 50px;
    color: #ffffff;
    &::after{
        content: '';
        display: block;
        width: 13px;
        height: 2px;
        color: black;
        margin: 8px 0 12px;
    }
    
`
const Descr = styled.p`
    position: absolute;
    top: 195px;
    left: 50px;
    color: #ffffff;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`


export default Slider