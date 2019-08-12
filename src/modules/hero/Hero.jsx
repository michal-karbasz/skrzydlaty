import React, { useContext } from 'react';
import styled from 'styled-components';
import { Row, Layout } from 'antd';
import { AppContext } from '../../appContext.js';

import { colors } from '../../commons/config.js';
import { LogoRow } from './components/LogoRow';
import { TitleRow } from './components/Title';

import coronet from '../../assets/wieniec.jpeg';
import { MenuWrapper } from './MenuWrapper';

const HeroWrapper = styled(Layout.Content)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
`;

const StyledRow = styled(Row)`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const IconText = styled.span`
    font-size: 24px;
    transition: color 0.5s;
    opacity: 0;
    color: ${colors.primary};

    :hover {
        color: ${colors.complementary};
    }

    @keyframes fadeIn {
        100% {
            opacity: 1;
        }
    }
    animation: fadeIn 5s 2.5s forwards;
`;

const Coronet = styled.div`
    background: url(${coronet}) center;
    background-size: contain;
    background-repeat: no-repeat;
    min-width: 200px;
    min-height: 180px;
    position: relative;
    cursor: pointer;
    opacity: 0.3;
    transition: 0.5s;
    :hover {
        transform: scale(1.1);
    }
    @keyframes fadeIn {
        100% {
            opacity: 1;
        }
    }
    animation: fadeIn 4s 2.5s forwards;
`;

export const Hero = () => {
    const [activeLink, setActiveLink] = useContext(AppContext);
    return (
        <HeroWrapper type="flex" align="middle" justify="center">
            <MenuWrapper big pop />
            <LogoRow />
            <StyledRow>
                <TitleRow />
            </StyledRow>
        </HeroWrapper>
    );
};
