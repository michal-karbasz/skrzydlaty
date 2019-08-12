import React from 'react';
import { Tabs } from 'antd';

import { Arts } from './components/Arts';
import { Reading } from './components/Reading';

const { TabPane } = Tabs;

export const WorkshopsWrapper = () => (
    <section>
        <Tabs tabPosition="top">
            <TabPane tab="nauka czytania" key="1">
                <Reading />
            </TabPane>
            <TabPane tab="sensoplastyka" key="2">
                <Arts />
            </TabPane>
        </Tabs>
    </section>
);
