import React from 'react';
import { Tabs } from 'antd';

import { History } from './components/History';
import { Kasia } from './components/Kasia';
import { Patron } from './components/Patron';
import { Foundation } from './components/Foundation';

const { TabPane } = Tabs;

export const About = () => (
    <section>
        <Tabs>
            <TabPane tab="skrzydlata historia" key="1">
                <History />
            </TabPane>
            <TabPane tab="ciocia Kasia" key="2">
                <Kasia />
            </TabPane>
            <TabPane tab="patron" key="3">
                <Patron />
            </TabPane>
            <TabPane tab="fundacja" key="4">
                <Foundation />
            </TabPane>
        </Tabs>
    </section>
);
