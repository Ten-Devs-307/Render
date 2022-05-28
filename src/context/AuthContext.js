import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import { API_URL } from '../components/configurations/config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  
  const register = (email, name, password) => {
    setIsLoading(false);
    axios.post(`${API_URL}/sign-up/`,
        { email, 
          name, 
          password,},
      {
        headers:
          { 'Content-Type': 'application/json' }
      }
        ).then(res => {
          let userInfo = res.data;
          setUserInfo(userInfo);
          AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
          setIsLoading(false); 
          
      }).catch(
        e => {
          alert('Unable to register. Try again later.');
          setIsLoading(false);
          console.log(`${e}`);
          }
        );
  };
  
  const login = (username, password) => {
    setIsLoading(true);
    axios.post(`${API_URL}/login/`, {
      username,
      password,
    }, { headers: { 'Content-Type': 'application/json' }}
    ).then(res => {
      let userInfo = res.data;
      setUserInfo(userInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      setIsLoading(false);
      // console.log(userInfo);
    }).catch(e => {
      alert('Login failed. Try Again');
      setIsLoading(false);
      console.log(`${e}`);
    });
  };

  const logout = () => {
    setIsLoading(true);
    axios.post(
      `${API_URL}/logout/`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${userInfo.token}`,
        }
      }
    ).then(res => {
      setUserInfo({});
      AsyncStorage.removeItem('userInfo');
      setIsLoading(false);
    }).catch(e => {
      alert('Logout failed. Try Again');
      setIsLoading(false);
      console.log(`${e}`);
    });
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }
      setSplashLoading(false);
    }
    catch (e) {
      setSplashLoading(false);
      console.log(`${e}`);
    }
  }
  
   return(
      <AuthContext.Provider value={{register,login,logout,userInfo, isLoading, splashLoading}}>
         {children}
      </AuthContext.Provider>
   );
}