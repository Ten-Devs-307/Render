import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../../assets/images/Render.png";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react/cjs/react.production.min";
// import { AuthContext } from "../../context/AuthContext";

const SignInScreen = () => {
	const navigation = useNavigation();


	const onSignUpPress = () => {
		navigation.navigate("SignUp");
	};

  const onSignInPress = () => {
    navigation.navigate('StartUp');
  };
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const val = useContext(AuthContext);

  return (
    <View style={styles.root}>
      
      <Image source={Logo} style={[styles.logo]}
          resizeMode="contain" />
      <Text style={styles.header} >Welcome back!</Text>
      <Text>{val}</Text>
      <Text style={styles.label} >Email</Text>
      <CustomInput placeholder='' onChangeText={text => setEmail(text)} value={email}/>

      <Text style={styles.label} >Password</Text>
      <CustomInput placeholder='' secureTextEntry={true} onChangeText={text => setPassword(text)} value={password}/>
      <CustomButton text='Sign In' onPress={onSignInPress} />
       
       <TouchableOpacity onPress={onSignUpPress} >
         <Text style={styles.text} >Don't have an account? <Text style={styles.signin}>Sign Up</Text></Text>
       </TouchableOpacity>

			<Text style={styles.label}>Password</Text>
			<CustomInput
				placeholder=""
				secureTextEntry={true}
				value={password}
				onChangeText={(text) => setPassword(text)}
			/>
			<CustomButton text="Sign In" onPress={onSignInPress} />

			<TouchableOpacity onPress={onSignUpPress}>
				<Text style={styles.text}>
					Don't have an account? <Text style={styles.signin}>Sign Up</Text>
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		// alignItems: 'center',
		justifyContent: "center",
		flex: 1,
		paddingHorizontal: 20,
	},
	label: {
		// alignItems: '',
		fontSize: 18,
	},
	text: {
		fontSize: 16,
		paddingTop: 20,
		alignSelf: "center",
		color: "#000",
	},
	signin: {
		fontWeight: "bold",
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
		marginBottom: 30,
		fontWeight: "700",
		// alignSelf: 'center'
	},
});

export default SignInScreen;
