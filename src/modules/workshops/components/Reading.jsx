import React from 'react';
import styled from 'styled-components';
import { List, Icon } from 'antd';

import { StyledParagraph } from '../../../commons/StyledParagraph';
import { colors } from '../../../commons/config';

const workshopsInfo = [
    'niewielkie grupy - 6 do 12 uczestników',
    'fachowa kadra, doświadczona w pracy grupowej z dziećmi',
    'doradztwo rozwojowe',
    'pierwsze zajęcia bezpłatne',
    'dodatkowe materiały edukacyjne i warsztatowe w cenie',
    'atrakcyjna cena - 550 zł za semestr (do stycznia) , 1100 zł za cały rok',
    'miejsce warsztatów: ul. Raciborska 36 w Rybniku',
];

const Message = styled.h3`
    padding: 5px;
`;

const SectionHeader = styled.h4`
    margin-top: 15px;
`;

const AnimatedArrow = styled(Icon)`
    @keyframes pointDown {
        100% {
            transform: translate(0, 20%);
        }
    };
    animation pointDown 0.5s infinite alternate;
`;

export const Reading = () => (
    <StyledParagraph>
        <Message>
            Rekrutacja już trwa. Zajęcia obejmują dwa semestry szkolne. Zapraszamy dzieci w wieku
            szkolnym do 4-7 lat.
        </Message>
        <p>
            Pełne zabaw i ćwiczeń Warsztaty Nauki Czytania w oparciu o metodę czytania sylabami
            Jagody Cieszyńskiej przygotowujące do nauki w szkole. Zapewniamy fachową kadrę,
            doradztwo rozwojowe oraz dodatkowe materiały edukacyjne.
        </p>
        <SectionHeader>NAUKA CZYTANIA SYLABAMI</SectionHeader>
        <p>
            Pierwsze kroki w nauce czytania (dzieci poznają samogłoski, sylaby, pierwsze słowa aż do
            umiejętności samodzielnego odczytywania prostych tekstów).
        </p>
        <SectionHeader>O WARSZTATACH</SectionHeader>
        <span>
            Warsztaty to cykl kilkunastu spotkań w semestrze, odbywających się raz w tygodniu (1,5
            h).
        </span>
        <List
            dataSource={workshopsInfo}
            size="small"
            header=" "
            renderItem={item => (
                <List.Item>
                    <Icon type="heart" theme="twoTone" twoToneColor={colors.secondary} />
                    {` ${item}`}
                </List.Item>
            )}
        />
        <SectionHeader>ZAPISY I KONTAKT</SectionHeader>
        <AnimatedArrow type="arrow-down" />
    </StyledParagraph>
);
