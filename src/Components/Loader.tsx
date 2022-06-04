import React from 'react'
import { Spinner } from 'react-bootstrap'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Colors from './../assets/colors';

const Loader = () => {
    return (
        <Div>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Div>
    )
}

const Div = styled.div`
    position: fixed;
    width: 100%;
    background-color: ${Colors.White};
    height: 100vh;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default Loader