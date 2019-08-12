import React from 'react';
import { Tabs } from 'antd';

import { Formation } from './components/Formation';
import { Atmosphere } from './components/Atmosphere';
import { Groups } from './components/Groups';
import { Pricing } from './components/Pricing';
import { Agenda } from './components/Agenda';

const { TabPane } = Tabs;

export const KindergardenMain = () => (
    <section>
        <Tabs tabPosition="top">
            <TabPane tab="atmosfera" key="1">
                <Atmosphere />
            </TabPane>
            <TabPane tab="grupy" key="2">
                <Groups />
            </TabPane>
            <TabPane tab="jak kształcimy" key="3">
                <Formation />
            </TabPane>
            <TabPane tab="cennik" key="4">
                <Pricing />
            </TabPane>
            <TabPane tab="plan dnia" key="5">
                <Agenda />
            </TabPane>
        </Tabs>
    </section>
);
