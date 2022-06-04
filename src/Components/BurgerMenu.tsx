import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components';
import api from '../api';
import Home from '../Pages/Home';

const BurgerMenu: React.FC = () => {
    const { data: menus, isFetching: isMenusLoading, refetch: refetchMenus } = api.useGetMenusQuery(undefined);


    return isMenusLoading ? (<span>loading...</span>) : !menus ? (<span>not found menu</span>) : (
        <Nav>

            <Ul>
                {menus.data.items.map((m, index) => (
                    <li>
                        <NavLink style={{ textDecoration: 'unset', color: '#161616' }} to={m.href === "contact" ? `/${m.href}` : m.href}>
                           {m.label}
                        </NavLink>
                    </li>
               ))}


            </Ul>

        </Nav>
    )
}

const Nav = styled.nav`
    z-index: 4;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
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
    margin: 0px;
   

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