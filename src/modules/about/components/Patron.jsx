import React from 'react';
import styled from 'styled-components';

import { Row, Col } from 'antd';
import { StyledParagraph } from '../../../commons/StyledParagraph';

import logo from '../../../assets/skrzydlate_logo.jpeg';
const Prayer = styled.blockquote`
    /* text-align: 'center'; */
`;

const StyledLogo = styled.img`
    width: 100%;
    height: auto;
`;

export const Patron = () => (
    <StyledParagraph>
        <h3>ŚWIĘTA RODZINA Z NAZARETU</h3>
        <p>
            Patrząc na życie Świętej Rodziny urzeka prostota, pokora, bliskość, pokój serca...słowem
            Miłość do Boga i do siebie wzajemnie. To wszystko za czym tęskni każdy z nas, każda
            rodzina. Skrzydlaty Domek przytula się zatem od Maryi, Jezusa i Józefa, by przypominać
            sobie, dzieciom i ich rodzinom, że nasze szczęście i oparcie znajdziemy jedynie w Bogu.
            Dzieci ze Skrzydlatego każdego dnia modlą się słowami Jana Pawła II w intencji świętości
            rodzin:
        </p>
        <Row type="flex" jusitfy="center">
            <Col offset={2} xs={20} lg={12}>
                <Prayer>
                    „Boże, od którego pochodzi wszelkie ojcostwo na niebie i na ziemi, Ojcze, który
                    jesteś Miłością i Życiem, spraw, aby każda ludzka rodzina na ziemi przez Twego
                    Syna, Jezusa Chrystusa, „narodzonego z Niewiasty", i przez Ducha Świętego,
                    stawała się prawdziwym przybytkiem życia i miłości dla coraz to nowych pokoleń.
                    Spraw, aby Twoja łaska kierowała myśli i uczynki małżonków ku dobru ich własnych
                    rodzin i wszystkich rodzin na świecie. Spraw, aby młode pokolenie znajdowało w
                    rodzinach mocne oparcie dla swego człowieczeństwa i jego rozwoju w prawdzie i
                    miłości. Spraw, aby miłość umacniana łaską Sakramentu Małżeństwa okazywała się
                    mocniejsza od wszelkich słabości i kryzysów, przez jakie nieraz przechodzą nasze
                    rodziny. Spraw wreszcie – błagamy Cię o to za pośrednictwem Świętej Rodziny z
                    Nazaretu – ażeby Kościół wśród wszystkich narodów ziemi mógł owocnie spełniać
                    swe posłannictwo w rodzinach i poprzez rodziny. Przez Chrystusa Pana Naszego,
                    który jest Drogą, Prawdą i Życiem na wieki wieków. Amen."
                </Prayer>
            </Col>
            <Col offset={1} xs={23} lg={9}>
                <StyledLogo src={logo} alt="ilustracja Świętej Rodziny - logo przedszkola" />
            </Col>
        </Row>
    </StyledParagraph>
);
