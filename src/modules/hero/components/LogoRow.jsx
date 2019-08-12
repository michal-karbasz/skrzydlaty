import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import { breakpoints } from '../../../commons/config';

import logo from '../../../assets/skrzydlate_logo.jpeg';
import coronet from '../../../assets/wieniec.jpeg';
import spriteSmall from '../../../assets/sprite_small.png';

const Sprite = styled.div`
    height: 300px;
    background: url(${spriteSmall}) left center;
    background-repeat: no-repeat;
    @keyframes grow {
        100% {
            background-position: -5686px;
        }
    }
    animation: grow 1s steps(7) forwards;
    ${breakpoints.xs} {
        display: none;
    }
`;

const ReverseSprite = styled.div`
    height: 250px;
    background: url(${spriteSmall}) left center;
    background-repeat: no-repeat;
    @keyframes grow {
        100% {
            background-position: -5686px;
        }
    }
    transform: rotate(180deg);
    animation: grow 1s steps(7) forwards;
    ${breakpoints.xs} {
        display: none;
    }
`;

const Logo = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 110px;
    height: auto;
`;

const Coronet = styled.div`
    background: url(${coronet}) center;
    background-size: contain;
    background-repeat: no-repeat;
    min-width: 320px;
    min-height: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 10%);
    opacity: 0;
    z-index: 999;
    transition: 0.5s;
    @keyframes fadeIn {
        100% {
            opacity: 1;
        }
    }
    animation: fadeIn 3s 1s forwards;
`;

export const LogoRow = () => (
    <Row>
        <Col span={10}>
            <Sprite />
        </Col>
        <Col>
            <Coronet>
                <Logo src={logo} alt="logo" />
            </Coronet>
        </Col>
        <Col offset={4} span={10}>
            <ReverseSprite />
        </Col>
    </Row>
);
