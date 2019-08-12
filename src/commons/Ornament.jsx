import React from 'react';
import styled from 'styled-components';

import ornament from '../assets/border_ornament_horizontal.jpeg';

const OrnamentSeparator = styled.div`
    background: url(${ornament}) center;
    background-size: contain;
    height: 25px;
    width: ${props => (props.width ? props.width : '100%')};
`;

export const Ornament = props => <OrnamentSeparator width={props.width} />;
