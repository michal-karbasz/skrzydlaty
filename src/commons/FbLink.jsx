import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { colors } from './config';

const StyledIcon = styled(Icon)`
    position: fixed;
    top: 15px;
    right: 15px;
    font-size: 40px;
    color: ${colors.primary};
    opacity: 0.7;
    transition: all 500ms;
    :hover {
        opacity: 1;
    }

    @keyframes dingding {
        10% {
            transform: rotate(-15deg);
        }
        20% {
            transform: rotate(15deg);
        }
        30% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
    animation: dingding 3s 5s infinite alternate;
`;

export const FbLink = () => (
    <a
        href="https://www.facebook.com/skrzydlaty.domek.rybnik/"
        target="_blank"
        rel="noopener noreferrer"
    >
        <StyledIcon type="facebook" />;
    </a>
);
