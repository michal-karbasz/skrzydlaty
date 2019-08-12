import React, { useContext } from 'react';
import styled from 'styled-components';
import { Row } from 'antd';

import { menuItems } from '../../commons/menuItems.js';
import { MenuItem } from './components/MenuItem';
import { AppContext } from '../../appContext.js';

const StyledRow = styled(Row)`
    margin: 30px 0 30px 0;
    flex-direction: 'row';
`;

export const MenuWrapper = props => {
    const [state] = useContext(AppContext);
    return (
        <StyledRow type="flex" align="middle" justify="center">
            {Object.values(menuItems).map(({ name, icon }, i) => (
                <MenuItem
                    key={name}
                    name={name}
                    icon={icon}
                    big={props.big}
                    pop={props.pop ? `${2 + i / 3}s` : '0.5s'}
                    activeLink={state.activeLink}
                />
            ))}
        </StyledRow>
    );
};
