import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Row, Col } from 'antd';

import { colors } from './config.js';
import { Hero } from './containers/Hero';
import { Nav } from './containers/Nav';
import { CommentsWrapper } from './containers/CommentsWrapper';

const AppWrapper = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Delius', sans-serif;
`;

const Sider = styled(Layout.Sider)`
    height: 100vh;
`;

const Footer = styled(Layout.Footer)`
    max-height: 200px;
    border-top: 1px dashed ${colors.borders};
`;

const contactContainerHeight = document.querySelectorAll('.contact');

function Root() {
    const [activeLink, handleTabSelection] = useState(undefined);

    return (
        <AppWrapper>
            <Layout>
                <Sider>
                    <Nav />
                </Sider>
                <Layout>
                    <Layout.Content>
                        <Hero activeLink />
                    </Layout.Content>
                    <Footer>
                        Opinie rodziców
                        <Row type="flex" justify="center">
                            <Col lg={18}>
                                <CommentsWrapper />
                            </Col>
                        </Row>
                    </Footer>
                </Layout>
            </Layout>
        </AppWrapper>
    );
}

export default Root;
