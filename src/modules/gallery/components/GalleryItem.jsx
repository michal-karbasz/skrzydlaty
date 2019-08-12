import React, { useContext } from 'react';
import styled from 'styled-components';

import { colors } from '../../../commons/config';
import { AppContext } from '../../../appContext';

const Image = styled.img`
    width: ${props => (props.big ? '600px' : '240px')}
    height: ${props => (props.big ? '600px' : '160px')};
    border-radius: 2%;
    margin-bottom: 15px;
`;

export const GalleryItem = props => {
    const [_, setState] = useContext(AppContext);
    return (
        <Image
            src={props.source.photo}
            onClick={() =>
                setState(state => ({
                    ...state,
                    isModalVisible: !state.isModalVisible,
                    imageClicked: props.source.number,
                }))
            }
        />
    );
};
