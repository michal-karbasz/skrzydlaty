import React from 'react';
import styled from 'styled-components';

import { AppContextProvider } from './appContext.js';
import { LayoutWrapper } from './commons/LayoutWrapper';

const AppWrapper = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mali', sans-serif;
`;

function Root() {
    return (
        <AppWrapper>
            <AppContextProvider>
                <LayoutWrapper />
            </AppContextProvider>
        </AppWrapper>
    );
}

export default Root;
