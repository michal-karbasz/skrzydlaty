import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../../appContext';
import { GalleryItem } from './components/GalleryItem';
import { GalleryModal } from './components/GalleryModal';
import { pictures } from './components/index';

const StyledSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 50px;
`;

export const GalleryWrapper = () => {
    const [state] = useContext(AppContext);
    return (
        <StyledSection>
            {pictures.thumbs.map((source, i) => (
                <GalleryItem key={source.number} source={source} title={i} />
            ))}
            <GalleryModal source={state.imageClicked} />
        </StyledSection>
    );
};
