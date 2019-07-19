import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu, Icon, Col } from 'antd';
import styled from 'styled-components';

import logo from '../assets/logo.jpeg';
import { breakpoints, colors } from '../config.js';
import { Contact } from '../components/Contact';

const menuItems = [
    { name: 'dom', icon: 'home' },
    { name: 'o mnie', icon: 'heart' },
    { name: 'program nauczania', icon: 'book' },
    { name: 'fundacja', icon: 'bank' },
    { name: 'zapisz dziecko', icon: 'mail' },
];

const MenuName = styled.span`
    text-transform: capitalize;
    text-decoration-style: none;
`;

const Image = styled.img`
    width: 100%; 
    height 180px; 
    margin: 20px 0;
    ${breakpoints.sm} {
        height: 90px;
        width: 50%
    }
`;

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
`;

const NavigationWrapper = styled.nav`
    height: 100%;
    border-right: 1px solid ${colors.borders};
`;

const StyledMenu = styled(Menu)`
    && {
        border-right: none;
    }
`;

export const Nav = () => (
    <MenuWrapper>
        <NavigationWrapper>
            <Router>
                <StyledMenu mode="vertical" aria-label="navigation panel">
                    <Image src={logo} alt="logo" />
                    {menuItems.map(({ name, icon }) => (
                        <Menu.Item key={name}>
                            <Link to={`/${name}`}>
                                <Icon type={icon} theme="twoTone" twoToneColor={colors.secondary} />
                                <MenuName>{name}</MenuName>
                            </Link>
                        </Menu.Item>
                    ))}
                </StyledMenu>
            </Router>
        </NavigationWrapper>
        <Contact />
    </MenuWrapper>
);
