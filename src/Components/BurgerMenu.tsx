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
        <Header style={Pathname === "/contact" ? { backgroundColor: Colors.Black } : { backgroundColor: Colors.Orange }} onMouseLeave={() => setshowHide(false)}>
            <Nav>
                <Ul>
                    {menus.data.items.map((m, index) => (
                        <li>
                            <NavLinkStyle style={Pathname === "/contact" ? { color: Colors.White } : { color: Colors.Black }} to={m.href === "contact" ? `/${m.href}` : m.href}>
                                {m.label}
                            </NavLinkStyle>
                        </li>
                    ))}
                </Ul>
                <Text style={Pathname === '/contact' ? {color:Colors.White} : {color: Colors.Black}} >{menus.data.text}</Text>
                <SocialWrapper>
                    {menus.data.social.map((s, index) => (
                        <div>
                            <a href={`${s.href}`} target="_blank">
                                {s.icon === "facebook" ? <FbIcon style={Pathname === '/contact' ? { color: Colors.White } : { color: Colors.Black }} /> : s.icon === "instagram" ? <InstaIcon style={Pathname === '/contact' ? { color: Colors.White } : { color: Colors.Black }} /> : "icons not found"}
                            </a>
                        </div>
                    ))}
                </SocialWrapper>
            </Nav>
        </Header>
    )
}

const NavLinkStyle = styled(NavLink)`
    text-decoration: unset;
    color: ${Colors.Black};
`;
const Header = styled.header`
    z-index: 4;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    background-color: ${Colors.Orange};
    ${Responsive.tablet}{
        width: 100%;
    }
    ${Responsive.mobile}{
        width: 100%;
        height: 100%;
    }
`;
const Nav = styled.nav`
    ${Responsive.tablet}{
        width: 100%;
    }
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
    ${Responsive.mobile}{
        font-size: 12px;
    }
`

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    text-decoration: unset;
    list-style-type: none;
    width: 350px;
    /* height: 100%; */
    margin: 0px;
    ${Responsive.tablet}{
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
    ${Responsive.mobile}{
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
   

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
       ${Responsive.tablet}{
           font-size: 24px;
       }
       ${Responsive.mobile}{
           font-size: 14px;
       }
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

const FbIcon = styled(FaFacebookF)`
    color: #161616;
`
const InstaIcon = styled(FaInstagram)`
    color: #161616;
`

export default BurgerMenu