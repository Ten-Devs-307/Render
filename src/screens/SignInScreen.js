<<<<<<< Updated upstream:src/screens/SignInScreen/SignInScreen.js
import React, { useState, useContext } from "react";
=======
import axios from "axios";
import { API_URL } from "../components/configurations/config";

import React, { useState } from "react";
>>>>>>> Stashed changes:src/screens/SignInScreen.js
import {
	StyleSheet,
	Text,
	TextInput,
	ScrollView,
	View,
	Platform,
	TouchableOpacity,
	Button
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { SIZES, COLORS } from "../constants/theme";
import { useFonts } from "expo-font";
<<<<<<< Updated upstream:src/screens/SignInScreen/SignInScreen.js
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import Spinner from "react-native-loading-spinner-overlay/lib";


import { AuthContext } from "../../context/AuthContext";
=======
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
// import Logo from "../../../assets/images/render.png";
>>>>>>> Stashed changes:src/screens/SignInScreen.js

const SignInScreen = () => {
	const [userInfo, setUserInfo] = useState({});
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);

	const {login, isLoading} = useContext(AuthContext)

	const navigation = useNavigation();

	const [loaded] = useFonts({
		Poppins_black: require("../../assets/fonts/Poppins-Black.ttf"),
		Poppins_blacki: require("../../assets/fonts/Poppins-BlackItalic.ttf"),
		Poppins_bold: require("../../assets/fonts/Poppins-Bold.ttf"),
		Poppins_light: require("../../assets/fonts/Poppins-Light.ttf"),
		Poppins_regular: require("../../assets/fonts/Poppins-Regular.ttf"),
	});

	const onSignUpPress = () => {
		navigation.navigate("SignUp");
	};

	const onChangeUsernameHandler = (email) => {
		setUsername(email);
	};
	const onChangePasswordHandler = (password) => {
		setPassword(password);
	};
<<<<<<< Updated upstream:src/screens/SignInScreen/SignInScreen.js
	
=======

	const onSubmitFormHandler = async (event) => {
		if (!username.trim() || !password.trim()) {
			alert("Username or Password is invalid");
			return;
		}
		setIsLoading(true);
		try {
			const response = await axios.post(
				`${API_URL}/login/`,
				{
					username,
					password,
				},
				{ headers: { "Content-Type": "application/json" } }
			);
			if (response.status === 200 || response.status === 201) {
				alert("Logged in Successfully");
				setIsLoading(false);
				setUsername("");
				setPassword("");
				navigation.navigate("HomeScreen");
			} else {
				throw new Error(response.status);
			}
		} catch (error) {
			alert("Login failed");
			setIsLoading(false);
		}
	};

>>>>>>> Stashed changes:src/screens/SignInScreen.js
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Spinner visible={ isLoading}/>
			<View style={styles.header}>
				<Text style={styles.formHeading}>Welcome, Sign in</Text>
			</View>
			<View style={styles.wrapper}>
				<TextInput
					placeholder="Email"
					placeholderTextColor="#000"
					style={styles.input}
					value={username}
					onChangeText={text => setUsername(text)}
				/>
			</View>
			<View style={styles.wrapper}>
				<TextInput
					placeholder="Password"
					placeholderTextColor="#000"
					style={styles.input}
					value={password}
					secureTextEntry={true}
					onChangeText={text => setPassword(text)}
				/>
			</View>
			<View>
				{/* <CustomButton
					text="Login"
					onPress={login(username, password)}
					style={styles.submitButton}
				/> */}
				{/* I commented out the custom button because it was giving errors.. */}
					<Button title="Login" onPress={() => login(username,password)} style={styles.submitButton}/>
				<TouchableOpacity onPress={onSignUpPress}>
					<Text style={styles.text}>
						Don't have an account?
						<Text style={styles.signin}> Sign Up</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: "center",
		justifyContent: "center",
		marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
		padding: 10,
	},
	header: {
		fontSize: SIZES.h1,
		marginBottom: 30,
		fontFamily: "Poppins_bold",
		color: COLORS.primary,
		justifyContent: "center",
		alignItems: "center",
		fontWeight: "bold",
	},
	formHeading: {
		color: "#000",
		fontSize: SIZES.h3,
	},
	wrapper: {
		// backgroundColor: "white",
		width: "100%",
		borderColor: "#000",
		// borderRadius: 5,
		borderBottomWidth: 2,
		// paddingHorizontal: 10,
		paddingVertical: 5,
		marginBottom: 30,
		marginVertical: 10,
	},
	input: {
		fontSize: SIZES.h3,
		color: "#000",
	},
	submitButton: {
		backgroundColor: "gray",
		padding: 100,
	},
	text: {
		fontSize: SIZES.h4,
		alignSelf: "center",
		color: "#000",
		marginTop: 10,
	},
	signin: {
		fontWeight: "bold",
	},
});

export default SignInScreen;
