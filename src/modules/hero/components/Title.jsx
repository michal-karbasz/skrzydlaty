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
    text-transform: uppercase;
    ${breakpoints.xs} {
        font-size: 20px;
    }
    ${breakpoints.sm} {
        font-size: 22px;
    }
`;

const Title = styled.h1`
    font-size: 46px;
    color: ${colors.primary};
    text-transform: uppercase;

    ${breakpoints.sm} {
        font-size: 26px;
    }
    ${breakpoints.xs} {
        font-size: 20px;
    }
`;

export const TitleRow = () => (
    <CenteredRow>
        <PreTitle>centrum rodzin</PreTitle>
        <Title>skrzydlaty domek</Title>
    </CenteredRow>
);
