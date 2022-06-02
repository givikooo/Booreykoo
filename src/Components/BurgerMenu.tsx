import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components';
import Home from '../Pages/Home';

const BurgerMenu: React.FC = () => {

    return (
        <Nav>

            <Ul>
                <li>
                    <NavLink style={{ textDecoration: 'unset', color: '#161616' }} to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink style={{ textDecoration: 'unset', color: '#161616' }} to="/about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink style={{ textDecoration: 'unset', color: '#161616' }} to="/services">
                        Servises
                    </NavLink>
                </li>
                <li>
                    <NavLink style={{ textDecoration: 'unset', color: '#161616' }} to="/portfolio">
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink style={{ textDecoration: 'unset', color: '#161616' }} to="/contact">
                        Contact
                    </NavLink>
                </li>
            </Ul>

        </Nav>
    )
}

const Nav = styled.nav`
  
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