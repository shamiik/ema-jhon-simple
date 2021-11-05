import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const { children } = props;
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;