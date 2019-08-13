import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import { breakpoints } from '../../../commons/config';

import logo from '../../../assets/skrzydlate_logo.jpeg';
import coronet from '../../../assets/wieniec.jpeg';
import spriteSmall from '../../../assets/sprite_small.png';
import spriteFull from '../../../assets/sprite_long.png';

const spriteSizes = {
    full: '-6496px',
    xl: '-5686px',
    lg: '-4876px',
};

const Sprite = styled.div`
    height: 120px;
    background: url(${spriteSmall}) left center;
    background-repeat: no-repeat;
    @keyframes growFrom1201 {
        100% {
            background-position: ${spriteSizes.xl};
        }
    }
    animation: growFrom1201 1s steps(7) forwards;

    ${breakpoints.lg} {
        @keyframes growFrom993 {
            100% {
                background-position: ${spriteSizes.lg};
            }
        }
        animation: growFrom993 1s steps(6) forwards;
    }

}
    ${breakpoints.sm} {
        background: url(${spriteFull}) left center;
        animation: growFrom1201 1.2s steps(7) forwards;
    }
    ${breakpoints.xs} {
        display: none;
    }
    }
`;

const ReverseSprite = styled.div`
    height: 90px;
    background: url(${spriteSmall}) left center;
    background-repeat: no-repeat;
    transform: rotate(180deg);
    animation: growFrom1201 1s steps(7) forwards;

    ${breakpoints.lg} {
        @keyframes grow2 {
            100% {
                background-position: ${spriteSizes.lg};
            }
        }
        animation: grow2 1s steps(6) forwards;
    }
    ${breakpoints.sm} {
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
    ${breakpoints.md} {
        max-width: 90px;
    }
    ${breakpoints.xs} {
        max-width: 50px;
    }
`;

const Coronet = styled.div`
    background: url(${coronet}) center;
    background-size: contain;
    background-repeat: no-repeat;
    min-width: 320px;
    min-height: 280px;
    opacity: 0;
    z-index: 999;
    transition: 0.5s;
    @keyframes fadeIn {
        100% {
            opacity: 1;
        }
    }
    animation: fadeIn 3s 1s forwards;

    ${breakpoints.md} {
        min-width: 240px;
        min-height: 200px;
    }
    ${breakpoints.xs} {
        min-width: 160px;
        min-height: 120px;
    }
`;

const StyledCol = styled(Col)`
    margin-top: -25px;
    ${breakpoints.md} {
        margin-top: unset;
    }
`;

export const LogoRow = () => (
    <>
        <Row>
            <Col sm={24} md={12} xxl={8}>
                <Sprite />
            </Col>
            <Col sm={0} md={12} xxl={{ span: 8, offset: 8 }}>
                <ReverseSprite />
            </Col>
        </Row>
        <Row>
            <StyledCol>
                <Coronet>
                    <Logo src={logo} alt="logo" />
                </Coronet>
            </StyledCol>
        </Row>
    </>
);
