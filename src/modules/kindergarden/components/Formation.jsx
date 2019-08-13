import React from 'react';
import styled from 'styled-components';
import { List, Collapse } from 'antd';

import { StyledParagraph } from '../../../commons/StyledParagraph';

const StyledCollapse = styled(Collapse)`
    && {
        margin: 30px 0;
    }
`;

const data = [
    {
        title: 'KSZTAŁCENIE POPRZEZ SZTUKĘ',
        content:
            '„Kształcenie- poprzez- Sztukę, może być szczególnie ważne    nawet nie dlatego, że przysparza artystów, ile że przysparza lepszych ludzi” Poprzez    bogactwo i różnorodność działań z zakresu plastyki, Sensoplastyki (R), teatru, muzyki    oraz bajkoterapii wpływamy na wiele aspektów rozwoju dzieci',
    },
    {
        title: 'PRZYGOTOWANIE DZIECI DO SZKOŁY',
        content:
            '          Skrzydlaty Domek poprzez organizowanie warsztatów            artystycznych wspiera rodziców w przygotowaniu dzieci do szkoły. Wsparcie „zerówkowe” jest możliwe tylko w sytuacji, kiedy rodzice zdecydują się kształcić swoje dziecko poza systemem, co w praktyce oznacza niezapisywanie dziecka do publicznej placówki i wzięcia odpowiedzialności za edukację dziecka. By wziąć dziecko na tak zwana edukację domową Ustawa z 14 grudnia 2016 r. - Prawo oświatowe (Dz.U. z 2017 r. poz. 59) – art. 37. potrzebna jest zgoda Poradni Pedagogiczno-Psychologicznej oraz oświadczenie rodziców o zapewnieniu dziecku warunków umożliwiających realizację podstawy programowej obowiązującej na danym etapie edukacyjnym. Pod skrzydlatym dachem dzieci z edukacji domowej uczą się czytać metodą sylabową, poznają świat cyfr, figur, pracując na materiałach montessoriańskich; zgłębiają świat przyrody, uczestnicząc w wielu ciekawych eksperymentach i wycieczkach.',
    },
    {
        title: 'SPOSÓB MÓWIENIA DO DZIECI',
        content:
            '„Nasz sposób mówienia do dzieci staje się ich wewnętrznym            głosem” (Peggy O’Mara) -nazywamy emocje, sytuacje, zadajemy pytania, jasno stawiamy granice - pomagamy dzieciom, by radziły sobie z własnymi uczuciami - zachęcamy do współpracy - zachęcamy do samodzielności',
    },
    {
        title: 'WSPÓŁPRACA Z RODZICAMI',
        content:
            'Wspieramy rodziców w wychowaniu dzieci. Organizujemy spotkania,konferencje. Istnieje wypożyczenia lub zakupienia fachowej literatury.',
    },
    {
        title: 'EKOLOGICZNE ZABAWKI',
        content:
            'W Skrzydlatym Domku przeważają zabawki z drewna, surowców roślinnych lub kartonu.',
    },
    {
        title: 'WYCHODZIMY ZE SCHEMATÓW',
        content:
            'Nowatorskie metody pracy takie jak: metoda dobrego startu M.Bogdanowicz, ruchu rozwijającego W.Sherborn, elementy pedagogiki M.Montessori, edukacja matematyczna Gruszczyk- Kulczyńskiej, nauka czytania według Jagody Cieszyńskiej i inne przełamują nudę i rutynę. Codzienna praca odpowiednio dobranymi metodami skutkuje praktycznymi sukcesami naszych podopiecznych. Ponadto organizujemy wiele wycieczek krajoznawczych, lekcji muzealnych, bibliotecznych, wyjść do kina i teatru.',
    },
];

export const Formation = () => (
    <StyledParagraph>
        <h4>ZIARENKA W NAZARECIE</h4>
        <p>
            Jezus przez 30 lat przebywał w Nazarecie, w bliskości swoich rodziców - Maryi i Józefa.
            Jako małe Boże ziarenko pięknie wzrastał na chwałę Boga i ludzi. W atmosferze pokoju i
            miłości uczył się dawać i przyjmować Miłość. Z czasem Ziarno stało się silnym drzewem,
            gotowym na to, by każdy bliźni znalazł schronienie w jego gałęziach. Z czasem Jezus stał
            się gotowy, by wypłynąć na głębię życia...
        </p>
        <p>
            I tak sobie myślę, że wielka nauka płynie dla nas - rodziców, opiekunów, wychowawców
            dzieci w w wieku przedszkolnym - z przyglądania się życiu Świętej Rodziny. Nasze dzieci,
            małe Boże ziarenka, do wzrostu w sferze duchowej, intelektualnej i emocjonalnej
            potrzebują przede wszystkim rodziców oraz wsparcia tylko takich miejsc, które będą
            wspierać (nie podważać) autorytet rodzicielski.
        </p>
        <p>
            Charyzmatem Skrzydlatego Domku jest zatem stworzenie małego Nazaretu (naszym atutem jest
            domowa atmosfera i panująca życzliwość), zachwyt otaczającym światem ( stąd różnorodność
            zajęć dla dzieci ) żywa współpraca z rodzicami, która jest konieczna do pięknego wzrostu
            ziarna oraz modlitwa, która scala wszystkie nasze działania w piękną całość.
        </p>
        <h4>Inspirując się życiem Świętej Rodziny z Nazaretu, pragniemy:</h4>
        <p>
            1. Wspierać dzieci duchowo, intelektualnie i emocjonalnie w wieku od 2,5 lat do 5 lat w
            oparciu o naukę Kościoła Katolickiego (działamy pod patronatem parafii pw. Św. Józefa w
            Rybniku, mamy błogosławieństwo biskupa pomocniczego archidiecezji katowickiej Grzegorza
            Olszowskiego oraz kapłanów ze Wspólnoty Świętej Rodziny z Łomianek) Dzięki żywej
            współpracy z rodzicami , domowej atmosferze, pracy w małych grupach, modlitwie oraz
            zabawie będziemy chcieli by dzieci - małe ziarenka - wydały plon obfity.
        </p>
        <p>
            2. Wspierać rodziców Poprzez indywidualne spotkania oraz organizowanie konferencji i
            warsztatów podejmujących ważne zagadnienia wychowawcze.
        </p>

        <StyledCollapse>
            <Collapse.Panel header="szczegółowy program nauczania" key="1">
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={({ title, content }) => (
                        <List.Item>
                            <List.Item.Meta title={title} description={content} />
                        </List.Item>
                    )}
                />
            </Collapse.Panel>
        </StyledCollapse>
    </StyledParagraph>
);
