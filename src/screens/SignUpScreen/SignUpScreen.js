import axios from "axios";
import React, { useState, useContext } from "react";
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
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { SIZES, COLORS } from "../../constants/theme";
import { useFonts } from "expo-font";

import { AuthContext } from "../../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay/lib";

const SignUpScreen = () => {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const {register, isLoading} = useContext(AuthContext)

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

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Spinner visible={ isLoading}/>
			<View>
				<View style={styles.header}>
					<Text style={styles.formHeading}>Create a new account</Text>
				</View>
				<View style={styles.wrapper}>
					<TextInput
						placeholder="Email"
						placeholderTextColor="#000"
						style={styles.input}
						value={email}
						onChangeText={text => setEmail(text)}
					/>
				</View>
				<View style={styles.wrapper}>
					<TextInput
						placeholder="Full Name"
						placeholderTextColor="#000"
						style={styles.input}
						value={name}
						onChangeText={text => setName(text)}
					/>
				</View>

				<View style={styles.wrapper}>
					<TextInput
						placeholder="Password"
						placeholderTextColor="#000"
						style={styles.input}
						value={password}
						secureTextEntry={true}
						onChangeText={text=>setPassword(text)}
					/>
				</View>
				<View>
					{/* <CustomButton
						text="Register"
						onPress={register(email, name, password)}
						style={styles.submitButton}
					/> */}
					{/* I commented out the custom button because it was giving errors.. */}
					<Button title="Register" onPress={() => register(email,name,password)} style={styles.submitButton}/>
				</View>
				<Text style={styles.text}>
					By signing up, you agree to our Terms and Service and Privacy Policy.
				</Text>
				<TouchableOpacity onPress={onLoginPress}>
					<Text style={styles.text}>Have an account?
						<Text style={styles.login}>Log In{""}</Text>
					</Text>
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
    justifyContent: "center",
    alignItems: "center",
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
	login: {
		fontWeight: "bold",
	},
});

export default SignUpScreen;
