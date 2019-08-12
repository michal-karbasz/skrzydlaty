import React from 'react';
import styled from 'styled-components';
import { Layout, Descriptions, Icon, Col, Row } from 'antd';

import { colors } from './config';
import { Ornament } from './Ornament';

import logo from '../assets/skrzydlate_logo.jpeg';

const { Item } = Descriptions;

const Image = styled.img`
    width: 40px;
    height: auto;
`;

const Footer = styled(Layout.Footer)`
    position: sticky;
    bottom: 0;
    padding: 0;
    z-index: 999;
`;

export const ContactFooter = () => (
    <Footer>
        <Ornament />
        <Row>
            <Col xs={23} offset={1}>
                <Descriptions title="Kontakt" column={{ xs: 1, sm: 2, md: 3, xl: 5 }}>
                    <Item>Katarzyna Wieja</Item>
                    <Item>
                        <Icon type="phone" theme="twoTone" twoToneColor={colors.secondary} />
                        {` 603 466 103`}
                    </Item>
                    <Item>
                        <Icon type="mail" theme="twoTone" twoToneColor={colors.secondary} />
                        {` skrzydaltydomek@gmail.com`}
                    </Item>
                    <Item>ul. Raciborska 36</Item>
                    <Item>44-210 Rybnik</Item>
                </Descriptions>
            </Col>
        </Row>
    </Footer>
);
