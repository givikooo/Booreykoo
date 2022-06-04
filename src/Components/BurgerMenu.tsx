import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components';
import api from '../api';
import Home from '../Pages/Home';
import Loader from './Loader';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import NotFound404 from './NotFound';


const BurgerMenu: React.FC = () => {
    const { data: menus, isFetching: isMenusLoading, refetch: refetchMenus } = api.useGetMenusQuery(undefined);


    return isMenusLoading ? <Loader /> : !menus ? <NotFound404 /> : (
        <Header>
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
                <Text>{menus.data.text}</Text>
                <SocialWrapper>
                    {menus.data.social.map((s, index) => (
                        <div>
                            <a href={`${s.href}`} target="_blank">
                                {s.icon === "facebook" ? <FbIcon /> : s.icon === "instagram" ? <InstaIcon /> : "icons not found"}
                            </a>
                        </div>
                    ))}
                </SocialWrapper>
            </Nav>
        </Header>
    )
}

const Header = styled.header`
    z-index: 4;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    background-color: #cdc152;
`;
const Nav = styled.nav`
   
`
const Text = styled.div`
    text-align: center;
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 16px;
    color: #161616;
    font-weight: bold;
    padding-left: 30px;
    margin-top: 60px;
`

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    text-decoration: unset;
    list-style-type: none;
    width: 350px;
    height: 100%;
    
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
const SocialWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 0 140px;
    margin-top: 120px;

`

const FbIcon = styled(FaFacebookF)`
    color: #161616;
`
const InstaIcon = styled(FaInstagram)`
    color: #161616;
`

export default BurgerMenu