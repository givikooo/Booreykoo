import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import api from '../api';
import Home from '../Pages/Home';
import Loader from './Loader';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import NotFound404 from './NotFound';
import Responsive from '../Responsive';
import { useEffect } from 'react';
import Colors from '../assets/colors';
import { FbIcon, Header, InstaIcon, NavLinkStyle, Topic, Ul } from '../GlobalStyle';



const BurgerMenu: React.FC<{
    onClose: boolean;
}> = ({
    onClose
}) => {
        const { data: menus, isFetching: isMenusLoading, refetch: refetchMenus } = api.useGetMenusQuery(undefined);
        const Pathname = window.location.pathname;
        const [showHide, setshowHide] = useState<boolean>(onClose);
        const navigate = useNavigate();
        console.log(showHide) 

        return isMenusLoading ? <Loader /> : !menus ? <NotFound404 /> : (
            <Header $Pathname={Pathname} onMouseLeave={() => setshowHide(true)}>
                <Nav>
                    <Ul>
                        {menus.data.items.map((m, index) => (
                            <li>
                                <NavLinkStyle $Pathname={Pathname} to={m.href === "contact" ? `/${m.href}` : m.href}>
                                    {m.label}
                                </NavLinkStyle>
                            </li>
                        ))}
                    </Ul>
                    <Topic $Pathname={Pathname} >{menus.data.text}</Topic>
                    <SocialWrapper>
                        {menus.data.social.map((s, index) => (
                            <div>
                                <a href={`${s.href}`} target="_blank">
                                    {s.icon === "facebook" ? <FbIcon $Pathname={Pathname} /> :
                                    s.icon === "instagram" ? <InstaIcon $Pathname={Pathname} /> : "icons not found"}
                                </a>
                            </div>
                        ))}
                    </SocialWrapper>
                </Nav>
            </Header>
        )
    }



const Nav = styled.nav`
    ${Responsive.tablet}{
        width: 100%;
    }
`
const SocialWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 0 140px;
    margin-top: 20px;
    ${Responsive.mobile}{
        padding: 0 60px;
    }

`
export default BurgerMenu