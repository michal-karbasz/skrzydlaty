import React from 'react';
import { List, Icon } from 'antd';

import { StyledParagraph } from '../../../commons/StyledParagraph';
import { CommentsWrapper } from '../../../modules/kindergarden/CommentsWrapper';
import { colors } from '../../../commons/config';

const advantages = [
    'pielęgnujemy zwyczaje i tradycje polskie, co daje dzieciom poczucie bezpieczeństwa, tożsamości i przynależności do chrześcijaństwa',
    'dbamy o zdrowe żywienie: pieczemy chleb, robimy przetwory, sałatki',
    'dzieci zachęcane są do współpracy: zbierają orzechy, zamiatają liście, karmią kota',
    'wykorzystujemy życiowe sytuacje do nauki, tak by dzieci poznawały świat empirycznie',
    'dużo czytamy',
];

export const Atmosphere = () => (
    <StyledParagraph>
        <p>
            Skrzydlaty Domek to oaza bezpieczeństwa, piękna i harmonii. Artystyczny wystrój wnętrza,
            subtelna kolorystyka, uwrażliwiająca muzyka tworzą osobliwy klimat. Skrzydlatą, zbliżoną
            do domowej, atmosferę zbudowaliśmy wraz z mężem 8 lat temu z myślą o stworzeniu
            wyjątkowego i przyjaznego miejsca dla naszych dzieci. Z czasem postanowiliśmy podzielić
            się tym miejscem (parterem naszego domu) z innymi rodzinami i tak, ku wielkiej naszej
            radości, powstało DOMOWE PRZEDSZKOLE.
        </p>
        <List
            dataSource={advantages}
            // bordered={true}
            size="small"
            header="nasze atuty:"
            renderItem={item => (
                <List.Item>
                    <Icon type="heart" theme="twoTone" twoToneColor={colors.secondary} />
                    {` ${item}`}
                </List.Item>
            )}
        />
        <CommentsWrapper />
    </StyledParagraph>
);
