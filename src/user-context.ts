import React from 'react';

export type userObject= {
    user: string,
    setUser: Function
}

export const UserContext: React.Context<userObject> = React.createContext<userObject>({user:"Toto", setUser: () => {return;}})