import React from 'react';
import styled from 'styled-components';
import { Collapse, Col, Row } from 'antd';

import { StyledParagraph } from '../../../commons/StyledParagraph';
import { Interview } from './Interview';

import kasia from '../../../assets/kasia.jpg';

const { Panel } = Collapse;

const StyledPortrait = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 15px;
    border-radius: 5px;
`;

const StyledCollapse = styled(Collapse)`
    && {
        margin: 30px 0;
    }
`;

export const Kasia = () => (
    <StyledParagraph>
        <Row>
            <Col xs={{ span: 24 }} lg={12}>
                <p>
                    <strong>Kasia Wieja</strong> – po pierwsze: Oblubienica Jezusa, po drugie: żona
                    męża mieszkającego od trzech lat w niebie, po trzecie: mama dwóch super
                    dziewczynek (7 i 13 lat), po czwarte: cała reszta - filolog polski prowadzący od
                    9 lat Skrzydlaty Domek - artystyczny zakątek dla przedszkolaków w Rybniku, od 3
                    lat prezes Fundacji Niebo na Ziemi.
                </p>
                <p>
                    Poniżej mała odsłona mojej osoby w wywiadzie przeprowadzonym za mną przez Monikę
                    Kogut, autorkę bloga <em>Piękna Dziewczyna</em>.
                </p>
            </Col>
            <Col xs={{ span: 0 }} lg={11} offset={1}>
                <StyledPortrait src={kasia} alt="Kasia z córkami" />
            </Col>
        </Row>

        <StyledCollapse>
            <Panel header="kliknij aby przeczytać wywiad" key="1">
                <Interview />
            </Panel>
        </StyledCollapse>
    </StyledParagraph>
);
