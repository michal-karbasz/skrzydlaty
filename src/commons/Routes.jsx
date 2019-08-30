import React from 'react';

import { Route } from 'react-router-dom';

import { Hero } from '../modules/hero/Hero';
import { menuItems } from './menuItems';
import { ContentWrapper } from './ContentWrapper';
import { MenuWrapper } from '../modules/hero/MenuWrapper';
import { ResultWrapper } from '../modules/subscribe/components/Result';

export const Routes = () => (
    <>
        <Route render={props => <MenuWrapper {...props} pop="true" />} />
        <Route exact path="/" component={Hero} />
        {Object.values(menuItems).map(({ name, component }) => {
            const Wrapper = ContentWrapper(component);

            return <Route key={name} path={`/${name}`} component={() => Wrapper} />;
        })}
        <Route path={`/result`} component={ResultWrapper} />
    </>
);
