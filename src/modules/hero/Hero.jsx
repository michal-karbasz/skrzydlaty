import React from 'react';
import styled from 'styled-components';
import { Row, Layout } from 'antd';

import { LogoRow } from './components/LogoRow';
import { TitleRow } from './components/Title';

const HeroWrapper = styled(Layout.Content)`
    display: flex;
    flex-direction: column;
`;

const StyledRow = styled(Row)`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const Hero = () => (
    <HeroWrapper>
        <LogoRow />
        <StyledRow>
            <TitleRow />
        </StyledRow>
    </HeroWrapper>
);
