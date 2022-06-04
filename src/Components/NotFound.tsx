import React from 'react';
import styled from 'styled-components';
import Colors from './../assets/colors';



const NotFound404: React.FC<{}> = ({ }) => {
    
    return (
        <Wrapper >
            <Number>4<span>0</span>4</Number>
            <NotFound>Page Not Found</NotFound>
        </Wrapper>
    )
}



// style
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    background-color: ${Colors.White};
    user-select: none;
    pointer-events: none;
`;
const Number = styled.div`
    font-size: 60px;
    font-family: 'Roboto';
    color: #161616;
    border-right: 2px solid ${Colors.Orange};
    padding-right: 8px;
        & > span {
            color: ${Colors.Orange};
        }
`;
const NotFound = styled.div`
    font-size: 50px;
    font-family: 'Roboto';
    border-left: 2px solid ${Colors.Orange};
    border-top: 2px solid ${Colors.Orange};
    padding-left: 8px;
        & > span {
            color: ${Colors.Black};
        }
`;


export default NotFound404;