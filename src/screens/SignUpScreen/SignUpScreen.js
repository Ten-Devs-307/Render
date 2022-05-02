import { View, Text, StyleSheet, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import React,{useContext, useState} from 'react'
import Logo from '../../../assets/images/Render.png';
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import {useNavigation} from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
const SignUpScreen = () => {
  const [email, setEmail] = useState(null);
  const [password1, setPassword1] = useState(null);
  const [password2, setPassword2] = useState(null);


	const onLoginPress = () => {
		navigation.navigate("SignIn");
	};

//   const {isLoading, register} = useContext(AuthContext);
//   const val = useContext(AuthContext);
	const val = "This is a trial";

  return (
    <View style={styles.root}>
      {/* <Spinner visible={isLoading}/> */}
      <Image source={Logo} style={[styles.logo]}
          resizeMode="contain" />


      <Text style={styles.header} >Create an account.</Text>
      <Text>{val}</Text>
      <Text style={styles.label} >Email</Text>
      <CustomInput placeholder='' value={email} onChangeText={text => setEmail(text)} />

      <Text style={styles.label} >Password</Text>
      <CustomInput placeholder='' secureTextEntry={true} value={password1} onChangeText={text => setPassword1(text)}/>

      <Text style={styles.label} >Re-enter Password</Text>
      <CustomInput placeholder='' secureTextEntry={true} value={password2} onChangeText={text => setPassword2(text)}/>


      <CustomButton
        text='Sign Up'
        // onPress={() => {
        // register(email, password1, password2);
      // }}
      />
      <Text style={styles.text} >By signing up, you agree to our Terms and Service and Privacy Policy.</Text>
         <Text style={styles.text} >Have an account?
         <TouchableOpacity>
           <Text style={styles.login}  onPress={onLoginPress} > Log In</Text>
         </TouchableOpacity>
         </Text>


    </View>
  );
};

const styles = StyleSheet.create({
	root: {
		// alignItems: 'center',
		justifyContent: "center",
		flex: 1,
		padding: 20,
	},
	label: {
		// alignItems: '',
		fontSize: 18,
	},
	text: {
		fontSize: 18,
		alignSelf: "center",
		color: "#000",
	},
	login: {
		fontWeight: "bold",
		fontSize: 18,
		marginLeft: 2,
	},
	logo: {
		width: "80%",
		maxWidth: 300,
		maxHeight: 200,
		alignSelf: "center",
		marginBottom: 30,
	},
	header: {
		fontSize: 26,
		marginBottom: 50,
		fontWeight: "700",
		// alignSelf: 'center'
	},
});

export default SignUpScreen;
