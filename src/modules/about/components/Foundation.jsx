import React from 'react';
import styled from 'styled-components';

import { fonts } from '../../../commons/config';
import { StyledParagraph } from '../../../commons/StyledParagraph';

const Account = styled.p`
    margin-top: 20px;
    font-size: ${fonts.small};
`;
export const Foundation = () => (
    <StyledParagraph>
        <p>
            W 2017 roku z pomocą przyjaciół założyłam Fundację Niebo na Ziemi, pod skrzydłami której
            schronił się Skrzydlaty Domek. Fundacji patronuje Święta Rodzina z Nazaretu, która jest
            naszym punktem odniesienia w pracy z dziećmi i ich rodzicami.
        </p>
        <p>
            Fundacja dodaje Bożych skrzydeł rodzinie poprzez prowadzenie domowego przedszkola,
            organizowanie warsztatów artystycznych, urodzinek dla dzieci oraz różnego rodzaju
            konferencji wpierających rodziny w trudzie wychowania dzieci. I pomyśleć, że to wszystko
            dzieje się pod dachem naszego domu, który każdego dnia ma pragnienie, by wzbijać się ku
            Niebu, które istnieje naprawdę.
        </p>
        <Account>
            Numer konta bankowego Fundacja Niebo na Ziemi:
            <span> 69 1600 1462 1875 9953 2000 0001</span>
        </Account>
    </StyledParagraph>
);
