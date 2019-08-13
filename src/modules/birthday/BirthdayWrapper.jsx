import React from 'react';
import { List, Icon, Collapse } from 'antd';
import styled from 'styled-components';

import { colors } from '../../commons/config.js';
import { StyledParagraph } from '../../commons/StyledParagraph';

const birthdayInfo = {
    basic: [
        '2 godzinną zabawę według wybranego scenariusza',
        'opiekę instruktorów (liczba animatorów dostosowana jest do liczby oraz wieku uczestników)',
        'kompletną dekorację (talerzyki, kubeczki, balony, serpentyny itp)',
        'materiały i narzędzia konieczne do zrealizowania warsztatów',
    ],
    extras: ['zaproszenia – 2,00 zł/sztuka'],
    price: ['do 10 osób - 350 zł', 'za każde kolejne dziecko dopłata 25 zł.'],
    terms: [
        '1. Termin artystycznych urodzin należy rezerwować minimum tydzień przed planowanym dniem imprezy.',
        '2. Wstępnej rezerwacji można dokonać telefonicznie lub osobiście.',
        '3. Podczas rezerwacji należy podać planowaną liczbę gości oraz tematykę urodzin.',
        '4. Ostateczną liczbę gości należy zgłosić najpóźniej na 4 dni przed terminem urodzin artystycznych.',
        '5. Warunkiem dokonania rezerwacji jest wpłata zadatku w wysokości 100zł',
        '6. Wpłacony zadatek jest bezzwrotny.',
        '7. Rodzice/Opiekunowie przywożą dziecko na wyznaczoną godzinę i zostawiają w        umówionym miejscu pod opieką animatorów/instruktorów.',
        '8. Podczas urodzinek 3 godzinnych robimy maksymalnie dwie rzeczy kreatywne.',
    ],
};

const CustomList = styled(List)`
    && {
        margin-bottom: 30px;
    }
`;

const StyledH3 = styled.h3`
    margin-bottom: 30px;
`;

const Gallery = styled.iframe`
    width: 476px;
    height: 476px;
    border: none;
    overflow: hidden;
    margin-bottom: 30px;
`;

export const BirthdayWrapper = () => (
    <StyledParagraph>
        <h3>ARTYSTYCZNE URODZINY W SKRZYDLATYM</h3>
        <h4>Propozycje artystyczne:</h4>
        <p>
            <strong>Sensoplastyka</strong> - warsztaty kreatywnego brudzenia się. Eksperymenty z
            mieszaniem barwników, tworzenie prac plastycznych z użyciem puchnących farb z
            naturalnych składników, malowanie palcami, zabawa w poszukiwanie skarbów w pojemnikach z
            owsianką, malowanie olejem, dywany sensoryczne, domowa plastelina, domowy piasek...
        </p>
        <p>
            <strong>Teatr</strong> - warsztaty teatralne z udziałem bohaterów literatury dziecięcej.
            Możliwość rozwijania wyobraźni i zabawy twórczej poprzez tworzenie kukiełek, magnesów i
            innych akcesoriów związanych z bohaterami książek.
        </p>
        <p>
            <strong>Plastyka</strong> - swoboda, czerpanie radości z procesu tworzenia i
            wykorzystywanie różnych technik plastycznych, np. malowanie na folii, malowanie palcami,
            odciskanie lub babranie się w glinie rzeźbiarskiej, wydrapywanki, malowanie na szkle
            itp.
        </p>
        <CustomList
            dataSource={birthdayInfo.basic}
            size="small"
            header="Zapewniamy:"
            renderItem={item => (
                <List.Item>
                    <Icon type="heart" theme="twoTone" twoToneColor={colors.heartPink} />
                    {` ${item}`}
                </List.Item>
            )}
        />
        <CustomList
            dataSource={birthdayInfo.extras}
            size="small"
            header="Opcje dodatkowe:"
            footer="* Tort, poczęstunek i napoje zapewniają opiekunowie dzieci."
            renderItem={item => (
                <List.Item>
                    <Icon type="heart" theme="twoTone" twoToneColor={colors.secondary} />
                    {` ${item}`}
                </List.Item>
            )}
        />
        <CustomList
            dataSource={birthdayInfo.price}
            size="small"
            header="Cena:"
            renderItem={item => (
                <List.Item>
                    <Icon type="heart" theme="twoTone" twoToneColor={colors.complementary} />
                    {` ${item}`}
                </List.Item>
            )}
        />
        <StyledH3>JESTEŚMY TAKŻE OTWARCI NA SPEŁNIENIE ARTYSTYCZNYCH MARZEŃ SOLENIZANTA</StyledH3>
        <Gallery
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fskrzydlaty.domek.rybnik%2Fvideos%2F855366474799005%2F&show_text=0&width=476"
            scrolling="no"
            frameborder="0"
            allowFullScreen={true}
        />
        <Collapse defaultActiveKey={['1']}>
            <Collapse.Panel header="Regulamin urodzin artystycznych:" key="1">
                <List
                    dataSource={birthdayInfo.terms}
                    size="small"
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </Collapse.Panel>
        </Collapse>
    </StyledParagraph>
);
