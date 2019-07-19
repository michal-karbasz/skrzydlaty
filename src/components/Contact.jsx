import React from 'react';
import styled from 'styled-components';
import { Card, Icon } from 'antd';

import { colors } from '../config.js';

const StyledCard = styled(Card)``;

export const Contact = () => (
    <StyledCard
        className="contact"
        title="Kontakt"
        extra={<Icon type="phone" theme="twoTone" twoToneColor={colors.secondary} />}
        size="small"
    >
        <p>Katarzyna Pakuła-Wieja</p>
        <p>000 111 222</p>
        <p>ul. Raciborska 36</p>
        <p> Rybnik</p>
    </StyledCard>
);
