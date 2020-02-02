import React, { useReducer } from 'react';

export default (reducer: any, actions: any, defaultValues: any) => {
  interface Props {
    // Come here yooooooo!!!
    children: any;
  }
  const Context = React.createContext(defaultValues);

  const Provider = ({ children }: Props): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, defaultValues);

    const boundActions: any = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
