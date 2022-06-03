import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import { API_URL } from '../components/configurations/config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [userProfile, setUserProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);
  const [isLabourer, setIsLabourer] = useState(false);
  
  const register = (email, name, password,role) => {
    setIsLoading(false);
    if (role === 'Customer') {
      setIsCustomer(true);
      axios.post(`${API_URL}/sign-up/`,
        { email, 
          name, 
          password,
          is_customer: isCustomer,
          is_labourer: isLabourer,
        },
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
    }
    else if (role === 'Labourer') {
      setIsLabourer(true);
      axios.post(`${API_URL}/register-labourer/`,
        { email, 
          name, 
          password,
          is_customer: isCustomer,
          is_labourer: isLabourer,
        },
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
    }
    
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

  getUserprofile = () => {
    axios.get(`${API_URL}/user-profile/`,
		{
	     headers:
			{
				'Content-Type': 'application/json',
				'Authorization': `Token ${userInfo.token}`}
			}).then(res => {
				let userObject = res.data;
				setUserProfile({userObject});
				console.log(userData)
			}).catch(e => {
				console.log(e);
			});
  }

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      let userProfile = await AsyncStorage.getItem('userProfile');
      userInfo = JSON.parse(userInfo);
      userProfile = JSON.parse(userProfile);

      if (userInfo) {
        setUserInfo(userInfo);
        setUserProfile(userProfile);
      }
      setSplashLoading(false);
    }
    catch (e) {
      setSplashLoading(false);
      console.log(`${e}`);
    }
  }
  
   return(
      <AuthContext.Provider value={{register,login,logout,userInfo, isLoading, splashLoading, userProfile}}>
         {children}
      </AuthContext.Provider>
   );
}