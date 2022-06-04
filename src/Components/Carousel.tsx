import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import api from '../api';
import Loader from './Loader';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
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
    width: 608px;
    height: 433px;
`


export default Slider