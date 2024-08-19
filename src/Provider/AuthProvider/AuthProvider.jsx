import { createContext } from "react";



export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const data = {
        name: 'bdn'
    }

    
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
};

export default AuthProvider;