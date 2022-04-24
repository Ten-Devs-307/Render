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

import { AuthContext } from "../../context/AuthContext";

// const {height} = useWindowDimensions();

const SignInScreen = () => {
	const navigation = useNavigation();

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	// const value = useContext(AuthContext);

	const onSignUpPress = () => {
		// console.warn("Sign Up");
		navigation.navigate("SignUp");
	};

	const onSignInPress = () => {
		// console.warn("Start Up");
		navigation.navigate("HomeScreen");
	};

	const onForgotPasswordPress = () => {
		// console.warn("Start Up");
		navigation.navigate("ForgotPassword");
	};

	return (
		<View style={styles.root}>
			<Image source={Logo} style={[styles.logo]} resizeMode="contain" />

			{/* {height: height * 0.3} */}

			<Text style={styles.header}>Welcome back!</Text>

			{/* <Text>{value}</Text> */}
			<Text style={styles.label}>Email</Text>
			<CustomInput
				placeholder=""
				value={email}
				onChangeText={(text) => setEmail(text)}
			/>

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
			<TouchableOpacity onPress={onForgotPasswordPress}>
				<Text style={styles.forgot_password}>Forgot Password</Text>
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
	forgot_password: {
		color: "#00d000",
		alignSelf: "center",
		paddingTop: 10,
		fontSize: 16,
	},
});

export default SignInScreen;
