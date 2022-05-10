import axios from "axios";
import { API_URL } from '../../components/configurations/config';

import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	ScrollView,
	View,
	Platform,
	TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { SIZES, COLORS } from "../../constants/theme";
import { useFonts } from "expo-font";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
// import Logo from "../../../assets/images/render.png";

const SignInScreen = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navigation = useNavigation();

	const [loaded] = useFonts({
		Poppins_black: require("../../../assets/fonts/Poppins-Black.ttf"),
		Poppins_blacki: require("../../../assets/fonts/Poppins-BlackItalic.ttf"),
		Poppins_bold: require("../../../assets/fonts/Poppins-Bold.ttf"),
		Poppins_light: require("../../../assets/fonts/Poppins-Light.ttf"),
		Poppins_regular: require("../../../assets/fonts/Poppins-Regular.ttf"),
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

  const onSubmitFormHandler = async (event) => {
    if (!username.trim() || !password.trim()) {
      alert("Username or Password is invalid");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_URL}/login/`, {
			username,
			password,
		},
		{headers: {'Content-Type': 'application/json'}}
		 );
      if (response.status === 200 || response.status === 201) {
        alert('Logged in Successfully');
        setIsLoading(false);
        setUsername('');
        setPassword('');
        navigation.navigate("HomeScreen");
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      alert('Login failed');
      setIsLoading(false);
    }
  };

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.header}>
				{/* <Image source={Logo} style={[styles.logo]} resizeMode="contain" /> */}
				{isLoading ? (
					<Text style={styles.formHeading}> Logging in User </Text>
				) : (
					<Text style={styles.formHeading}>Welcome, Sign in</Text>
				)}
			</View>
			<View style={styles.wrapper}>
				<TextInput
					placeholder="Email"
					placeholderTextColor="#000"
					style={styles.input}
					value={username}
					editable={!isLoading}
					onChangeText={onChangeUsernameHandler}
				/>
			</View>
			<View style={styles.wrapper}>
				<TextInput
					placeholder="Password"
					placeholderTextColor="#000"
					style={styles.input}
					value={password}
					editable={!isLoading}
					secureTextEntry={true}
					onChangeText={onChangePasswordHandler}
				/>
			</View>
			<View>
				<CustomButton
					text="Login"
					onPress={onSubmitFormHandler}
					style={styles.submitButton}
					disabled={isLoading}
				/>
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
		// fontWeight: "700",
		// alignSelf: 'center'
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
