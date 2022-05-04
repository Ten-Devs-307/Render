import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	useWindowDimensions,
} from "react-native";
import React, { useState, useContext } from "react";
import Logo from "../../../assets/images/Render.png";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { SIZES, COLORS } from "../../constants/theme";
import { useFonts } from "expo-font";

const SignInScreen = () => {
	const [loaded] = useFonts({
		Poppins_black: require("../../../assets/fonts/Poppins-Black.ttf"),
		Poppins_blacki: require("../../../assets/fonts/Poppins-BlackItalic.ttf"),
		Poppins_bold: require("../../../assets/fonts/Poppins-Bold.ttf"),
		Poppins_light: require("../../../assets/fonts/Poppins-Light.ttf"),
		Poppins_regular: require("../../../assets/fonts/Poppins-Regular.ttf"),
	});

	const navigation = useNavigation();

	const onSignInPress = () => {
		navigation.navigate("HomeScreen");
	};

	const onSignUpPress = () => {
		navigation.navigate("SignUp");
	};
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	//   const val = useContext(AuthContext);
	const val = "This is a trial";

	return (
		<View style={styles.root}>
			<Image source={Logo} style={[styles.logo]} resizeMode="contain" />
			<Text style={styles.header}>Welcome back!</Text>
			<Text>{val}</Text>
			<Text style={styles.label}>Email</Text>
			<CustomInput
				placeholder=""
				onChangeText={(text) => setEmail(text)}
				value={email}
			/>

			<Text style={styles.label}>Password</Text>
			<CustomInput
				placeholder=""
				secureTextEntry={true}
				onChangeText={(text) => setPassword(text)}
				value={password}
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
		fontSize: SIZES.h3,
		fontFamily: "Poppins_regular",
	},
	text: {
		fontSize: SIZES.h4,
		fontFamily: "Poppins_regular",
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
		fontSize: SIZES.h1,
		marginBottom: 30,
		fontFamily: "Poppins_bold",
		color: COLORS.primary,
		// fontWeight: "700",
		// alignSelf: 'center'
	},
});

export default SignInScreen;
