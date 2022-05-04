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
import { COLORS, SIZES } from "../../constants/theme";
import { useFonts } from "expo-font";

// const {height} = useWindowDimensions();

const SignInScreen = () => {
	const navigation = useNavigation();

	const [loaded] = useFonts({
		Poppins_black: require("../../../assets/fonts/Poppins-Black.ttf"),
		Poppins_blacki: require("../../../assets/fonts/Poppins-BlackItalic.ttf"),
		Poppins_bold: require("../../../assets/fonts/Poppins-Bold.ttf"),
		Poppins_light: require("../../../assets/fonts/Poppins-Light.ttf"),
		Poppins_regular: require("../../../assets/fonts/Poppins-Regular.ttf"),
	});

	const onSignUpPress = () => {
		// console.warn("Sign Up");
		navigation.navigate("SignUp");
	};

	const onSignInPress = () => {
		// console.warn("Sign In");
		navigation.navigate("SignIn");
	};

	return (
		<View style={styles.root}>
			<Image source={Logo} style={[styles.logo]} resizeMode="contain" />

			{/* {height: height * 0.3} */}

			<Text style={styles.header1}>Get things done with Render!</Text>
			<Text style={styles.header2}>Easy, Convenient and Affordable</Text>
			<Text style={styles.desc}>
				Search and book a labourer with just a click anytime and anywhere.
			</Text>
			<CustomButton text="Log In" onPress={onSignInPress} />
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
	header1: {
		fontSize: SIZES.h1,
		marginBottom: 5,
		// fontWeight: "700",
		fontFamily: "Poppins_bold",
		alignSelf: "center",
		color: COLORS.primary,
	},
	header2: {
		fontSize: SIZES.h3,
		// fontWeight: "500",
		fontFamily: "Poppins_regular",
		textAlign: "center",
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
	desc: {
		fontSize: SIZES.h4,
		padding: 10,
		textAlign: "center",
		fontFamily: "Poppins_light",
		color: "#000",
	},
});

export default SignInScreen;
