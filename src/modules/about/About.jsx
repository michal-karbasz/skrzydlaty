import React from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';

import { fonts } from '../../commons/config';
import { History } from './components/History';
import { Kasia } from './components/Kasia';
import { Patron } from './components/Patron';
import { StyledParagraph } from '../../commons/StyledParagraph';

const { TabPane } = Tabs;

const Account = styled.p`
    margin-top: 20px;
    font-size: ${fonts.small};
`;

export const About = () => (
    <section>
        <Tabs tabPosition="top">
            <TabPane tab="skrzydlata historia" key="1">
                <History />
            </TabPane>
            <TabPane tab="ciocia Kasia" key="2">
                <StyledParagraph>
                    <Kasia />
                </StyledParagraph>
            </TabPane>
            <TabPane tab="patron" key="3">
                <StyledParagraph>
                    <Patron />
                </StyledParagraph>
            </TabPane>
            <TabPane tab="fundacja" key="4">
                <StyledParagraph>
                    <p>
                        W 2017 roku z pomocą przyjaciół założyłam Fundację Niebo na Ziemi, pod
                        skrzydłami której schronił się Skrzydlaty Domek. Fundacji patronuje Święta
                        Rodzina z Nazaretu, która jest naszym punktem odniesienia w pracy z dziećmi
                        i ich rodzicami. Fundacja dodaje Bożych skrzydeł rodzinie poprzez
                        prowadzenie domowego przedszkola, organizowanie warsztatów artystycznych,
                        urodzinek dla dzieci oraz różnego rodzaju konferencji wpierających rodziny w
                        trudzie wychowania dzieci. I pomyśleć, że to wszystko dzieje się pod dachem
                        naszego domu, który każdego dnia ma pragnienie, by wzbijać się ku Niebu,
                        które istnieje naprawdę.
                    </p>
                    <Account>
                        Numer konta bankowego Fundacja Niebo na Ziemi:
                        <span> 69 1600 1462 1875 9953 2000 0001</span>
                    </Account>
                </StyledParagraph>
            </TabPane>
        </Tabs>
    </section>
);
