import axios from "axios";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	ScrollView,
	View,
	Button,
	Platform,
	TextInput,
	TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
// import Logo from "../../../assets/images/render.png";
// import Logo from "../../../assets/images/render.png";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { SIZES, COLORS } from "../../constants/theme";
import { useFonts } from "expo-font";

const baseUrl = "http://www.renderjobs.com/api";

const SignUpScreen = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
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

	const onLoginPress = () => {
		navigation.navigate("SignIn");
	};

	const onChangeNameHandler = (name) => {
		setName(name);
	};

	const onChangeEmailHandler = (email) => {
		setEmail(email);
	};
	const onChangePasswordHandler = (password) => {
		setPassword(password);
	};

	const onSubmitFormHandler = async (event) => {
		if (!name.trim() || !email.trim() || !password.trim()) {
			alert("Name or Email or password is invalid");
			return;
		}
		setIsLoading(true);
		try {
			const response = await axios.post(
				`${baseUrl}/sign-up/`,
				{
					email,
					name,
					password,
				},
				{ headers: { "Content-Type": "application/json" } }
			);
			if (response.status === 200 || response.status === 201) {
				alert("Your account has been created successfully");
				setIsLoading(false);
				setName("");
				setEmail("");
				setPassword("");
				navigation.navigate("SignIn");
			} else {
				throw new Error(response.status);
			}
		} catch (error) {
			alert("Registration failed");
			setIsLoading(false);
		}
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View>
				<View style={styles.header}>
					{isLoading ? (
						<Text style={styles.formHeading}> Creating user account </Text>
					) : (
						<Text style={styles.formHeading}>Create a new account</Text>
					)}
				</View>
				<View style={styles.wrapper}>
					<TextInput
						placeholder="Email"
						placeholderTextColor="#000"
						style={styles.input}
						value={email}
						editable={!isLoading}
						onChangeText={onChangeEmailHandler}
					/>
				</View>
				<View style={styles.wrapper}>
					<TextInput
						placeholder="Full Name"
						placeholderTextColor="#000"
						style={styles.input}
						value={name}
						editable={!isLoading}
						onChangeText={onChangeNameHandler}
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
						text="Register"
						onPress={onSubmitFormHandler}
						style={styles.submitButton}
						disabled={isLoading}
					/>
				</View>
				<Text style={styles.text}>
					By signing up, you agree to our Terms and Service and Privacy Policy.
				</Text>
				<TouchableOpacity onPress={onLoginPress}>
					<Text style={styles.text}>Have an account? Log In{""}</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
		padding: 15,
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
		// color: "#000",
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
});

export default SignUpScreen;
