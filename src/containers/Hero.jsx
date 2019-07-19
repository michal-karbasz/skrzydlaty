import React from 'react';
import styled from 'styled-components';
import { Carousel, Comment, Icon, Row, Col } from 'antd';

const HeroWrapper = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center
    height: 100%;
`;

const StyledRow = styled(Row)`
    display: flex;
    align-items: center;
    height: 17vh;
`;

const CustomIcon = styled(Icon)`
    font-size: 2em;
`;

export const Hero = props => (
    <HeroWrapper>
        <StyledRow align="middle">
            <Col push={4} span={8} />
            <Col push={4} span={8}>
                <CustomIcon type="home" />
            </Col>
            <Col push={4} span={8} />
        </StyledRow>
        <StyledRow>
            <Col push={4} span={8}>
                <CustomIcon type="heart" />
            </Col>
            <Col push={4} span={8} />
            <Col push={4} span={8}>
                <CustomIcon type="bank" />
            </Col>
        </StyledRow>
        <Row>
            <hr />
        </Row>
        <StyledRow>
            <Col push={4} span={8}>
                <CustomIcon type="bank" />
            </Col>
            <Col push={4} span={8} />
            <Col push={4} span={8}>
                <CustomIcon type="bank" />
            </Col>
        </StyledRow>
        <StyledRow>
            <Col push={4} span={8} />
            <Col push={4} span={8}>
                <CustomIcon type="bank" />
            </Col>
            <Col push={4} span={8} />
        </StyledRow>
    </HeroWrapper>
);
