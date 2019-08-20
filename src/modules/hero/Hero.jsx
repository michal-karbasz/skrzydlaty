import React from 'react';
import styled from 'styled-components';
import { Row, Layout } from 'antd';

import { LogoRow } from './components/LogoRow';
import { TitleRow } from './components/Title';

import { MenuWrapper } from './MenuWrapper';

const HeroWrapper = styled(Layout.Content)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const StyledRow = styled(Row)`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const Hero = () => (
    <HeroWrapper>
        <MenuWrapper big="true" pop />
        <LogoRow />
        <StyledRow>
            <TitleRow />
        </StyledRow>
    </HeroWrapper>
);
