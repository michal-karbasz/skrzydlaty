import React from 'react';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'antd';

import history from './history';
import { Routes } from './Routes';
import { ContactFooter } from '../commons/Footer';
import { CustomBackTop } from './CustomBackTop';

const StyledLayout = styled(Layout)`
    min-height: 90vh;
`;

export const LayoutWrapper = () => (
    <Router history={history}>
        <StyledLayout>
            <Routes />
        </StyledLayout>
        <ContactFooter />
        <CustomBackTop visibilityHeight={150} />
    </Router>
);
