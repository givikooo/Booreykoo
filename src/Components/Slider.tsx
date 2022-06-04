import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
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
    return (
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
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px" responsive={responsive}
            >
                <div>
                    <Image src="https://lg.aqva.co.uk/L-2019-1-11--12-15-40-608.jpg" alt="" />
                </div>
                <div>
                    <Image src='https://media.nesta.org.uk/images/jakub-gorajek-i24tGGbc9GE-unsplash.2e16d0ba.fill-750x430.jpg' />
                </div>
                <div>
                    <Image src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
                </div>
                <div>
                    <Image src='https://media.istockphoto.com/photos/panoramic-view-of-tbilisi-georgia-after-sunset-picture-id1066851986?k=20&m=1066851986&s=612x612&w=0&h=nS-F1J7NLA-AKJHfadFnXSOlL-AquYJhiaGCdO-7tz8=' />
                </div>
            </Carousel>;
        </div>
    )
}


const Image = styled.img`
    width: 608px;
    height: 433px;
`


export default Slider