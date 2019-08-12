import React from 'react';

import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import { Hero } from '../modules/hero/Hero';
import { menuItems } from './menuItems';
import { ContentWrapper } from './ContentWrapper';
import { MenuWrapper } from '../modules/hero/MenuWrapper';
import { ResultWrapper } from '../modules/subscribe/components/Result';

export const Routes = () => (
    <>
        <AnimatedSwitch
            atEnter={{ opacity: 0.1 }}
            atLeave={{ opacity: 0.1 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
        >
            <Route exact path="/" component={Hero} />
            <Route component={MenuWrapper} />
        </AnimatedSwitch>
        {Object.values(menuItems).map(({ name, component }) => {
            const Wrapper = ContentWrapper(component);

            return <Route key={name} path={`/${name}`} component={() => Wrapper} />;
        })}
        <Route path={`/result`} component={ResultWrapper} />
    </>
);
