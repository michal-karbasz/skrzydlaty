import React from 'react';
import { Table } from 'antd';

import { StyledParagraph } from '../../../commons/StyledParagraph';

const prices = [
    { key: '1', hours: '7.30 - 14.00', fee: '700 zł (bez posiłku*)' },
    { key: '2', hours: ' 7.30 - 16.00', fee: '900 zł (bez posiłku*)' },
];

const columns = [
    { title: 'godziny', key: 'hours', dataIndex: 'hours' },
    { title: 'opłata', key: 'fee', dataIndex: 'fee' },
];

export const Pricing = () => (
    <StyledParagraph>
        <p>
            Do każdej rodziny podchodzimy indywidualnie, biorąc pod uwagę sytuację finansową i
            życiową. W przypadku braku możliwości zapłacenia pełnego czesnego za pobyt dziecka,
            istnieje możliwość zaangażowania się rodziców w funkcjonowanie Skrzydlatego Domku, na
            przykład w postaci współprowadzenia zajęć dla dzieci, pomocy w prowadzeniu księgowości
            fundacji, pracach marketingowych, porządkowych i konserwatorskich itp. Bieżące potrzeby
            w miarę upływu czasu zmieniają się, więc najlepiej proszę kontaktować się osobiście.
        </p>
        <p>
            Biorąc pod uwagę fakt, że możemy przyjąć maksymalnie 12 dzieci, z którymi pracujemy
            warsztatowo (zajęcia matematyczne, przyrodnicze, plastyczne, sensoplastyczne, czytania
            metodą sylabową), wykorzystując przy tym wiele ciekawych pomysłów i materiałów,
            miesięczny koszt pobytu dziecka w Skrzydlatym Domku wynosi:
        </p>
        <Table
            dataSource={prices}
            columns={columns}
            pagination={false}
            header={() => <p>Opłaty:</p>}
            footer={() => <p>* POSIŁKI dzieci mogą przynosić przygotowane przez rodziców.</p>}
        />
        <p>
            Istnieje również możliwość przyprowadzenia przedszkolaka w niepełnym wymiarze (cenę
            ustalam indywidualnie). Dzieci mogą te uczestniczyć w warsztatach 1,5 godzinnych: cena
            40 zł.
        </p>
        <p>Istnieje także możliwość zamówienia cateringu (cena 10 zł zupka + drugie danie).</p>
    </StyledParagraph>
);
