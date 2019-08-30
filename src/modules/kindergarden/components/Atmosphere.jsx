import React from 'react';
import { List, Icon, Row, Col } from 'antd';
import styled from 'styled-components';

import { StyledParagraph } from '../../../commons/StyledParagraph';
import { CommentsWrapper } from '../../../modules/kindergarden/CommentsWrapper';
import { colors } from '../../../commons/config';

import bubbles from '../../../assets/gallery/24.JPG';

const advantages = [
    'pielęgnujemy zwyczaje i tradycje polskie, co daje dzieciom poczucie bezpieczeństwa, tożsamości i przynależności do chrześcijaństwa',
    'dbamy o zdrowe żywienie: pieczemy chleb, robimy przetwory, sałatki',
    'dzieci zachęcane są do współpracy: zbierają orzechy, zamiatają liście, karmią kota',
    'wykorzystujemy życiowe sytuacje do nauki, tak by dzieci poznawały świat empirycznie',
    'dużo czytamy',
];

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
`;

export const Atmosphere = () => (
    <StyledParagraph>
        <Row>
            <Col xs={{ span: 24 }} lg={12}>
                <p>
                    Skrzydlaty Domek to oaza bezpieczeństwa, piękna i harmonii. Artystyczny wystrój
                    wnętrza, subtelna kolorystyka, uwrażliwiająca muzyka tworzą osobliwy klimat.
                    Skrzydlatą, zbliżoną do domowej, atmosferę zbudowaliśmy wraz z mężem 8 lat temu
                    z myślą o stworzeniu wyjątkowego i przyjaznego miejsca dla naszych dzieci. Z
                    czasem postanowiliśmy podzielić się tym miejscem (parterem naszego domu) z
                    innymi rodzinami i tak, ku wielkiej naszej radości, powstało DOMOWE PRZEDSZKOLE.
                </p>
            </Col>
            <Col xs={{ span: 0 }} lg={11} offset={1}>
                <StyledImage src={bubbles} />
            </Col>
        </Row>
        <List
            dataSource={advantages}
            size="small"
            header="nasze atuty:"
            renderItem={item => (
                <List.Item>
                    <Icon type="heart" theme="twoTone" twoToneColor={colors.secondary} />
                    {` ${item}`}
                </List.Item>
            )}
        />
    </StyledParagraph>
);
