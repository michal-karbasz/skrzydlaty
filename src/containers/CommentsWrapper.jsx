import React from 'react';
import styled from 'styled-components';
import { Carousel, Comment, Rate, Row, Col } from 'antd';

import { breakpoints } from '../config.js';

const StyledContent = styled.p`
    margin-bottom: 5px;
`;

const comments = [
    {
        author: 'Aleksandra Niewelt',
        date: '11 września 2018',
        content:
            'Cudowne miejsce oraz Boska "Ciocia" Kasia dzięki, której wzrastają nie tylko dzieci, ale również ich rodzice. Dziękujemy :) Gorąco polecamy !!!',
    },
    {
        author: 'Katarzyna Orlik',
        date: '10 listopada 2018',
        content:
            'W Skrzydlatym Domku dzieci uczą się przez zabawę. Kasia właścicielka to cudowna i bardzo ciepła osoba, zawsze uśmiechnięta i niesamowicie pomysłowa. To taki pozytywny wulkan energii.',
    },
];

export const CommentsWrapper = () => (
    <Carousel autoplay autoplaySpeed="75">
        {comments.map(({ author, date, content }) => (
            <Comment
                author={author}
                content={
                    <>
                        <StyledContent>{content}</StyledContent>
                        <Row type="flex" justify="center">
                            <Rate disabled defaultValue={5} />
                        </Row>
                    </>
                }
                datetime={date}
            />
        ))}
    </Carousel>
);
