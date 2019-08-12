import React from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';

import { StyledParagraph } from '../../../commons/StyledParagraph';
import { Interview } from './Interview';

import kasia from '../../../assets/kasia.jpg';

const { Panel } = Collapse;

const StyledPortrait = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 15px;
`;

export const Kasia = () => (
    <StyledParagraph>
        <p>
            <strong>Kasia Wieja</strong> – po pierwsze: Oblubienica Jezusa, po drugie: żona męża
            mieszkającego od trzech lat w niebie, po trzecie: mama dwóch super dziewczynek (7 i 13
            lat), po czwarte: cała reszta - filolog polski prowadzący od 9 lat Skrzydlaty Domek -
            artystyczny zakątek dla przedszkolaków w Rybniku, od 3 lat prezes Fundacj Niebo na
            Ziemi.
        </p>
        <StyledPortrait src={kasia} alt="Kasia z córkami" />
        <p>
            Poniżej mała odsłona mojej osoby w wywiadzie przeprowadzonym za mną przez Monikę Kogut,
            autorkę bloga <em>Piękna Dziewczyna</em>.
        </p>
        <Collapse>
            <Panel header="kliknij aby przeczytać wywiad" key="1">
                <Interview />
            </Panel>
        </Collapse>
    </StyledParagraph>
);
