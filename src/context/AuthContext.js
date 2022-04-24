import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import { BASE_URL } from '../components/configurations/config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [userInfo, setUserInfo] = useState({});

   const register =  (name, email, password) => {
   //  setIsLoading(true);

    axios
      .post(`${BASE_URL}/sign-up`, {
        name,
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
      //   AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
      //   setIsLoading(false);
      });
  }; 
   return(
      <AuthContext.Provider value={{register}}>
         {children}
      </AuthContext.Provider>
   );
}