import React, { createContext, useContext } from 'react';

export const AuthContext = createContext()
const Authprovider = ({children}) => {
    // const [user, setUser] = useContext()
    // const [loading, setLoading] = useContext(true);

    const userInfo = {}
    return (
        <AuthContext.Provider value={userInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default Authprovider;