import React from 'react';
import styled from 'styled-components';

import { StyledParagraph } from '../../../commons/StyledParagraph';
import groupPic from '../../../assets/gallery/8.jpg';

const StyledImg = styled.img`
width: 100%
height: auto;
`;

export const Groups = () => (
    <StyledParagraph>
        <p>
            W związku z tym, że w otaczającym nas świecie coraz bardziej niepokoi zjawisko
            pomieszania ról, gdzie chłopcy bezrefleksyjnie stają się dziewczynkami a chłopczyce
            rosną jak grzyby po deszczu, postanowiliśmy w naszym domowym przedszkolu ogłosić
            następujący podział grup:
        </p>
        <p>
            <strong>RYCERZE </strong> – to grupa chłopców dla których Bóg, Ojczyzna i Honor, to
            wartości które będą zgłębiać, podejmując edukację w Skrzydlatym Domku. Ich patronem na
            drodze wiary będzie Święty Józef.
        </p>
        <p>
            <strong>KSIĘŻNICZKI</strong>- to grupa dziewczynek, które z pomocą Maryi będą zgłębiać
            istotę swego dziewczęcego powołania.
        </p>
        <StyledImg src={groupPic} alt="ciocia Kasia i dzieci" />
    </StyledParagraph>
);
