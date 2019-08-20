import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import { StyledParagraph } from '../../../commons/StyledParagraph';
import groupPic from '../../../assets/gallery/8.JPG';
import { breakpoints } from '../../../commons/config';

const StyledImg = styled.img`
width: 99%
height: auto;
border-radius: 5px;
${breakpoints.xl} {
    width: 90%;
}
`;

const StyledCol = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Groups = () => (
    <StyledParagraph>
        <Row>
            <Col xs={24} xl={12}>
                <p>
                    W związku z tym, że w otaczającym nas świecie coraz bardziej niepokoi zjawisko
                    pomieszania ról, gdzie chłopcy bezrefleksyjnie stają się dziewczynkami a
                    chłopczyce rosną jak grzyby po deszczu, postanowiliśmy w naszym domowym
                    przedszkolu ogłosić następujący podział grup:
                </p>
                <p>
                    <strong>RYCERZE </strong> – to grupa chłopców dla których Bóg, Ojczyzna i Honor,
                    to wartości które będą zgłębiać, podejmując edukację w Skrzydlatym Domku. Ich
                    patronem na drodze wiary będzie Święty Józef.
                </p>
                <p>
                    <strong>KSIĘŻNICZKI</strong>- to grupa dziewczynek, które z pomocą Maryi będą
                    zgłębiać istotę swego dziewczęcego powołania.
                </p>
            </Col>
            <StyledCol xs={24} xl={12}>
                <StyledImg src={groupPic} alt="ciocia Kasia i dzieci" />
            </StyledCol>
        </Row>
    </StyledParagraph>
);
