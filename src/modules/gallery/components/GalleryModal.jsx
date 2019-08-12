import React, { useContext } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import styled from 'styled-components';

import { AppContext } from '../../../appContext.js';
import { pictures } from './index.js';

const handleCancel = setState =>
    setState(state => ({ ...state, isModalVisible: !state.isModalVisible }));

export const GalleryModal = () => {
    const [state, setState] = useContext(AppContext);

    return (
        <ReactBnbGallery
            show={state.isModalVisible}
            photos={pictures}
            activePhotoIndex={state.imageClicked - 1}
            onClose={() => handleCancel(setState)}
        />
    );
};
