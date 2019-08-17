import React from 'react';
import styled from 'styled-components';
import { Layout, Icon } from 'antd';

import { colors } from './config';
import { Ornament } from './Ornament';

const Footer = styled(Layout.Footer)`
    position: sticky;
    bottom: 0;
    padding: 0;
    z-index: 999;
`;

const CustomRow = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 15px;
    flex-wrap: wrap;
`;

const Item = styled.span`
    margin-left: 10px;
`;

export const ContactFooter = () => (
    <Footer>
        <Ornament />
        <CustomRow>
            <Item>
                <strong>Kontakt: </strong>Katarzyna Wieja
            </Item>
            <Item>
                <Icon type="phone" theme="twoTone" twoToneColor={colors.secondary} />
                {` 603 466 103`}
            </Item>
            <Item>
                <Icon type="mail" theme="twoTone" twoToneColor={colors.secondary} />
                {` skrzydlatydomek@gmail.com`}
            </Item>
            <Item> ul. Raciborska 36</Item>
            <Item>44-210 Rybnik</Item>
        </CustomRow>
    </Footer>
);
