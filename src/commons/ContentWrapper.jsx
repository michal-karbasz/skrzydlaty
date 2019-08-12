import React from 'react';
import { Row, Col } from 'antd';

export const ContentWrapper = ChildComponent => (
    <>
        <Row type="flex" align="middle" justify="center">
            <Col xs={22} sm={16} xxl={14}>
                <ChildComponent />
            </Col>
        </Row>
    </>
);
