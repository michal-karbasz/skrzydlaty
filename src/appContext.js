import React, { useState } from 'react';

export const AppContext = React.createContext([{}, () => {}]);

export const AppContextProvider = props => {
    const [state, setState] = useState({});

    return <AppContext.Provider value={[state, setState]}>{props.children}</AppContext.Provider>;
};
