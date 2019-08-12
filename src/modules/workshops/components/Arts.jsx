import React from 'react';
import styled from 'styled-components';
import { Table } from 'antd';

import { StyledParagraph } from '../../../commons/StyledParagraph';

import poster from '../../../assets/art_workshops.jpg';

const info = [
    { key: '1', info: 'Zajęcia dla:', data: 'dzieci od 3 do 7 lat' },
    { key: '2', info: 'Termin:', data: 'każdy piątek 10.00 - 11.00' },
    { key: '3', info: 'Miejsce:', data: 'Skrzydlaty Domek, Raciborska 36' },
    { key: '4', info: 'Osoba prowadząca:', data: 'Ciocia Kasia' },
    { key: '5', info: 'Więcej informacji:', data: 'cena 35zł, kontakt: skrzydlatydomek@gmail.com' },
];

const columns = [
    { title: ' ', key: 'info', dataIndex: 'info' },
    { title: ' ', key: 'data', dataIndex: 'data' },
];

const Poster = styled.img`
    width: 100%;
    height: auto;
`;

export const Arts = () => (
    <StyledParagraph>
        <p>
            Sensoplastyka to zajęcia rozwojowe, które polegają na wspieraniu samodzielności i
            kreatywności dzieci. Mnogość faktur, kolorów, materiałów, to domena tych zajęć. Naszym
            celem jest pobudzenie wszystkich zmysłów tak, aby dziecko mogło samo na własnej skórze
            poczuć ich oddziaływanie.
        </p>
        <Poster src={poster} alt="plakat dotyczący sensoplastyki" />
        <Table dataSource={info} columns={columns} pagination={false} />
    </StyledParagraph>
);
