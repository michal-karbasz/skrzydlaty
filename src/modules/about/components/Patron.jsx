import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import logo from '../../../assets/skrzydlate_logo.jpeg';
import { breakpoints } from '../../../commons/config';
import { StyledParagraph } from '../../../commons/StyledParagraph';

const StyledLogo = styled.img`
    width: 50%;
    max-width: 210px;
    height: auto;
    ${breakpoints.md} {
        width: 33%;
        margin: 15px 0;
    }
`;

const StyledCol = styled(Col)`
    display: flex;
    justify-content: center;
`;

const StyledHeader = styled.h3`
    margin-top: 10px;
`;

export const Patron = () => (
    <StyledParagraph>
        <StyledHeader>ŚWIĘTA RODZINA Z NAZARETU</StyledHeader>
        <Row type="flex">
            <StyledCol xs={24} lg={12}>
                <p>
                    Patrząc na życie Świętej Rodziny urzeka prostota, pokora, bliskość, pokój
                    serca...słowem Miłość do Boga i do siebie wzajemnie. To wszystko za czym tęskni
                    każdy z nas, każda rodzina. Skrzydlaty Domek przytula się zatem od Maryi, Jezusa
                    i Józefa, by przypominać sobie, dzieciom i ich rodzinom, że nasze szczęście i
                    oparcie znajdziemy jedynie w Bogu. Dzieci ze Skrzydlatego każdego dnia modlą się
                    słowami Jana Pawła II w intencji świętości rodzin.
                </p>
            </StyledCol>
            <StyledCol xs={24} lg={12}>
                <StyledLogo src={logo} alt="ilustracja Świętej Rodziny - logo przedszkola" />
            </StyledCol>
        </Row>
    </StyledParagraph>
);
