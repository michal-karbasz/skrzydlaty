import React from 'react';
import styled from 'styled-components';
import { Carousel, Comment, Rate, Row } from 'antd';

import { comments } from '../../data/comments';
import { colors } from '../../commons/config';

const StyledHeader = styled.h4`
    margin-top: 50px;
`;
const StyledContent = styled.p`
    margin-bottom: 5px;
`;

const StyledCarousel = styled(Carousel)`
    &&&& {
        .slick-dots-bottom button {
            background: ${colors.primary};
            height: 15px;
            width: 35px;
            border-radius: 5px;
            margin-left: 5px;
        }
        .slick-active button {
            background: ${colors.primary};
        }
    }
`;

export const CommentsWrapper = () => (
    <>
        <StyledHeader>opinie rodziców</StyledHeader>
        <Row type="flex" justify="center">
            <Rate disabled defaultValue={5} />
        </Row>
        <StyledCarousel dots easing effect="fade">
            {comments.map(({ author, date, content }) => (
                <Comment
                    key={author}
                    author={author}
                    content={<StyledContent>{content}</StyledContent>}
                    datetime={date}
                />
            ))}
        </StyledCarousel>
    </>
);
