import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import { BASE_URL } from '../components/configurations/config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //  const [userInfo, setUserInfo] = useState({});
  //  const [isLoading, setIsLoading] = useState(false);

  //  const register =  (name, email, password) => {
  //   setIsLoading(true);

    // axios
    //   .post(`${BASE_URL}/sign-up`, {
  //       email,
  //       password,
  //     })
  //     .then(res => {
  //       let userInfo = res.data;
  //       setUserInfo(userInfo);
  //       AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
  //       setIsLoading(false);
  //       console.log(userInfo);
  //     })
  //     .catch(e => {
  //       console.log(`register error ${e}`);
  //       setIsLoading(false);
  //     });
  // }; 
  const register = (email, name, password) => {
    axios.post(`${BASE_URL}/sign-up/`,
        { email, 
          name, 
          password,},
      {
        headers:
          { 'Content-Type': 'application/json' }
      }
        ).then(res => {
        let userInfo = res.data;
        console.log(userInfo);
          
      }).catch(
        e => {
          console.log(`${e}`);
          
          }
        );
  };
  
  const login = (email, password) => {
    axios.post(`${BASE_URL}/login/`, {
      email,
      password,
    }, { headers: { 'Content-Type': 'application/json' }}
    ).then(res => {
      let userInfo = res.data;
      console.log(userInfo);
    }).catch(e => {
      console.log(`${e}`);
    });
  };
  
   return(
      <AuthContext.Provider value={{register,login}}>
         {children}
      </AuthContext.Provider>
   );
}