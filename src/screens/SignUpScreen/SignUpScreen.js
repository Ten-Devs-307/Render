import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	ScrollView,
	useWindowDimensions,
} from "react-native";
import React from "react";
import Logo from "../../../assets/images/Render.png";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";

// const {height} = useWindowDimensions();

const SignUpScreen = () => {
	const navigation = useNavigation();

	const onLoginPress = () => {
		// console.warn("Take me to Sign In");
		navigation.navigate("SignIn");
	};

	return (
		<ScrollView>
			<View style={styles.root}>
				<Image source={Logo} style={[styles.logo]} resizeMode="contain" />
				{/* {height: height * 0.3} */}
				<Text style={styles.header}>Create an account.</Text>
				<Text style={styles.label}>Email</Text>
				<CustomInput placeholder="" />
				<Text style={styles.label}>Password</Text>
				<CustomInput placeholder="" secureTextEntry={true} />
				<Text style={styles.label}>Re-enter Password</Text>
				<CustomInput placeholder="" secureTextEntry={true} />
				<CustomButton text="Sign Up" />
				<Text style={styles.text}>
					By signing up, you agree to our Terms and Service and Privacy Policy.
				</Text>
				<Text style={styles.text}>
					Have an account?
					<TouchableOpacity>
						<Text style={styles.login} onPress={onLoginPress}>
							{" "}
							Log In
						</Text>
					</TouchableOpacity>
				</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	root: {
		justifyContent: "center",
		flex: 1,
		// paddingHorizontal: 20,
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
