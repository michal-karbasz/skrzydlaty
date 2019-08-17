import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../../../commons/config';

const CenteredRow = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
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
    animation: fadeIn 2.5s 1.5s forwards;
    ${breakpoints.xs} {
        font-size: 20px;
    }
    ${breakpoints.sm} {
        font-size: 22px;
    }
`;

const Title = styled.h1`
    font-size: 58px;
    color: ${colors.primary};
    text-transform: capitalize;
    opacity: 0;
    @keyframes fadeIn {
        100% {
            opacity: 1;
        }
    }
    animation: fadeIn 3s 1.5s forwards;

    ${breakpoints.sm} {
        font-size: 26px;
    }
    ${breakpoints.xs} {
        font-size: 20px;
    }
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
    animation: fadeIn 3s 2.5s forwards;
`;

export const TitleRow = () => (
    <CenteredRow>
        <PreTitle>centrum rodzin</PreTitle>
        <Title>skrzydlaty domek</Title>
        <SubTitle>pomagamy wzrastać Twojemu dziecku</SubTitle>
    </CenteredRow>
);
