import React from 'react'
import styled from 'styled-components'
import Colors from '../assets/colors';

const ServiceWrap: React.FC<{
    title: string;
    content: string
}> = ({ 
    title,
    content
}) => {
    return (
        <>
            <div>
                <Title>
                    {title}
                </Title>
                <Content>
                    {content}
                </Content>
            </div>
        </>
    )
}

const Title = styled.h3`
    font-family: 'Roboto';
    font-size: 24px;
    line-height: 28px;
    color: ${Colors.White};
    text-align: justify;
    max-width: 415px;
`
const Content = styled.p`
    width: 310px;
    color: ${Colors.White};
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 16px;
    text-align: justify;
`

export default ServiceWrap