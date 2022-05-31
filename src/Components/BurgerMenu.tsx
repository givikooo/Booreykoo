import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Home from '../Pages/Home';

const BurgerMenu = () => {
    return (
        <Nav>

            <Ul>
                <li>
                    <Link style={{ textDecoration: 'unset', color: '#161616' }} to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'unset', color: '#161616' }} to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'unset', color: '#161616' }} to="/servises">
                        Servises
                    </Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'unset', color: '#161616' }} to="/portfolio">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'unset', color: '#161616' }} to="/contact">
                        Contact
                    </Link>
                </li>
            </Ul>

        </Nav>
    )
}

const Nav = styled.nav`
    display: none;
`

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    text-decoration: unset;
    list-style-type: none;
    width: 350px;
    height: 100%;
    background-color: #cdc152;
    position: fixed;
    top: -16px;
    right: 0;
   

    li{
        padding: 30px 0;
        font-family: 'Roboto';
        font-style: normal;
        font-size: 32px;
        font-weight: 400;
        text-align: center;
       &:first-child{
        margin-top: 170px;
       }
    }
`


export default BurgerMenu