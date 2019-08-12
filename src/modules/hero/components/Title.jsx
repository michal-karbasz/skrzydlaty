import React from 'react';
import styled from 'styled-components';
import { colors, animations } from '../../../commons/config';

const CenteredRow = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 58px;
    color: ${colors.primary}
    text-transform: capitalize;
opacity: 0;
    @keyframes fadeIn {
        100% {
            opacity: 1;
        }
    }
    animation: fadeIn 2.5s ${animations.initialDelay} forwards;
`;

const SubTitle = styled.span`
    color: ${colors.complementary};
    font-size: 20px;
    margin-top: -20px;
    opacity: 0;
    @keyframes fadeIn {
        100% {
            opacity: 1;
        }
    }
    animation: fadeIn 2s 2s forwards;
`;

const PreTitle = styled.span`
    color: ${colors.complementary};
    font-size: 30px;
    opacity: 0;
    @keyframes fadeIn {
        100% {
            opacity: 1;
        }
    }
    animation: fadeIn 2s 1.5s forwards;
`;

export const TitleRow = () => (
    <CenteredRow>
        <PreTitle>centrum rodzin</PreTitle>
        <Title>skrzydlaty domek</Title>
        <SubTitle>pomagamy wzrastać Twojemu dziecku</SubTitle>
    </CenteredRow>
);
