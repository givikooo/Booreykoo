import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import BtnForm from '../Components/Button'
import { ColumnWhiteBody } from '../GlobalStyle';
import Responsive from '../Responsive';
import Colors from './../assets/colors';
import Contact from './Contact';

const About = () => {

    const navigate = useNavigate()
    return (
        <>
            <ColumnWhiteBody>
                <Container>
                    <ImgTag>
                        <Img src="https://booreykoo.com/images/booreykoo-black.svg" alt="" />
                    </ImgTag>
                    <TextWrapper>
                        <TextTitle>About us</TextTitle>
                        <TextContent>
                            <Ul>
                                <Li>
                                    Booreykoo is a branding, web development, design,  and marketing firm with more than fourteen years of industry experience, serving clients worldwide. Welcome to the future of design. <br /> <br /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, delenit  vel illum dolore delenit  eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te delenit  feugait nulla se molestie consequat.
                                </Li>
                                <Li>
                                    Booreykoo is a branding, web development, design, and marketing firm with more than fourteen years of industry experience, serving clients worldwide. Welcome to the future of design. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse <br /> <br /> molestie consequat, delenit  vel illum dolore delenit  eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te delenit  feugait nulla.
                                </Li>
                            </Ul>
                        </TextContent>
                    </TextWrapper>
                    <BtnForm
                        btnSize='large'
                        btnBorder='orange'
                        type='button'
                        onClick={() => navigate(`/contact`)}
                    >
                        Contact us
                    </BtnForm>
                </Container>
            </ColumnWhiteBody>
        </>
    )
}

const Container = styled.section`
    padding: 0 350px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${Responsive.tablet}{
        padding: unset;
    }
    ${Responsive.mobile}{
        padding: unset;
    }
    ${Responsive.fullHD}{
        padding: 190px;
    }
    ${Responsive.desktop}{
        padding: 180px;
    }
    ${Responsive.laptop}{
        padding: 100px;
    }
 `
const ImgTag = styled.div`
   text-align: center;
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

const TextWrapper = styled.div`
    
`
const TextTitle = styled.h4`
    font-size: 14px;
    line-height: 20px;
    padding-left: 40px;
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
const TextContent = styled.div`
    
`

const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 70px;
    ${Responsive.mobile}{
        gap: 10px;
    }
`
const Li = styled.li`
    font-size: 14px;
    line-height: 16px;
    font-family: 'roboto';
    list-style-type: none;
    color: ${Colors.Black};
    ${Responsive.mobile}{
        font-size: 12px;
    }
`


export default About