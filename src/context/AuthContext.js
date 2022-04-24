import React,{createContext} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

   const register = () => {
   }
   return(
      <AuthContext.Provider value="Hello this is a trial">
         {children}
      </AuthContext.Provider>
   );
}