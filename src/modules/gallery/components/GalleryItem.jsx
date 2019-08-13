import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../../../appContext';
import { breakpoints } from '../../../commons/config';

const Image = styled.img`
    width: 240px;
    height: 160px;
    border-radius: 2%;
    margin: 0 10px 10px 0;

    ${breakpoints.md} {
        width: 180px;
        height: 120px;
    }
    ${breakpoints.xs} {
        width: 120px;
        height: 90px;
        margin: 0 5px 5px 0;
    }
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
