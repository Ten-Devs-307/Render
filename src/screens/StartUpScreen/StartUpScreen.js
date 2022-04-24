import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	useWindowDimensions,
} from "react-native";
import React from "react";
import Logo from "../../../assets/images/get-things-done.png";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";

// const {height} = useWindowDimensions();

const SignInScreen = () => {
	const navigation = useNavigation();

	const onSignUpPress = () => {
		console.warn("Sign Up");
		navigation.navigate("SignUp");
	};

	const onSignInPress = () => {
		console.warn("Sign In");
		navigation.navigate("SignIn");
	};

	return (
		<View style={styles.root}>
			<Image source={Logo} style={[styles.logo]} resizeMode="contain" />

			{/* {height: height * 0.3} */}

			<Text style={styles.header}>Get things done with Render!</Text>
			<Text style={styles.header1}>Easy, Convenient and Affordable</Text>
			<Text style={styles.header2}>
				Search and book a labourer with just a click anytime and anywhere.
			</Text>

			<CustomButton text="Sign In" onPress={onSignInPress} />
			<CustomButton text="Sign Up" onPress={onSignUpPress} />
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
		marginBottom: 10,
		fontWeight: "700",
		alignSelf: "center",
	},
	header1: {
		fontSize: 20,
		padding: 10,
		fontWeight: "500",
		textAlign: "center",
		color: "#000",
	},
	header2: {
		fontSize: 16,
		padding: 10,
		textAlign: "center",
		color: "#000",
	},
});

export default SignInScreen;
