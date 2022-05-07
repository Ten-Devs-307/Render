import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
} from "react-native";
import React, { useContext, useState } from "react";
import Logo from "../../../assets/images/render.png";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";
import { COLORS } from "../../constants/theme";
import { Touchable } from "react-native-web";
const SignUpScreen = () => {
	// const [email, setEmail] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [name, setName] = useState(null);

	const navigation = useNavigation();

	const onLoginPress = () => {
		navigation.navigate("SignIn");
	};

	//   const {isLoading, register} = useContext(AuthContext);
	const {register} = useContext(AuthContext);
	const val = "This is a trial";
	

	return (
		<View style={styles.root}>
			{/* <Spinner visible={isLoading}/> */}
			<Image source={Logo} style={[styles.logo]} resizeMode="contain" />

			<Text style={styles.header}>Create an account.</Text>
			<Text>{val}</Text>
			<Text style={styles.label}>Email</Text>
			<CustomInput
				placeholder=""
				value={email}
				onChangeText={(text) => setEmail(text)}
			/>
			
			<Text style={styles.label}>Name</Text>
			<CustomInput
				placeholder=""
				value={name}
				onChangeText={(text) => setName(text)}
			/>

			<Text style={styles.label}>Password</Text>
			<CustomInput
				placeholder=""
				secureTextEntry={true}
				value={password}
				onChangeText={(text) => setPassword(text)}
			/>

			{/* <Text style={styles.label}>Re-enter Password</Text>
			<CustomInput
				placeholder=""
				secureTextEntry={true}
				value={password2}
				onChangeText={(text) => setPassword2(text)}
			/> */}
			<Text style={styles.text}>
				By signing up, you agree to our Terms and Service and Privacy Policy.
			</Text>
			<CustomButton
				text="Sign Up"
				onPress={() => {
				register(email, name, password);
				}}
			/>
			<TouchableOpacity>
				<Text style={styles.text} onPress={onLoginPress}>
					Have an account? Log In{" "}
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
		padding: 20,
		marginBottom: 70,
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
	// login: {
	// 	fontWeight: "bold",
	// 	color: COLORS.primary,
	// 	fontSize: 18,
	// },
	logo: {
		width: "80%",
		maxWidth: 300,
		maxHeight: 200,
		alignSelf: "center",
	},
	header: {
		fontSize: 26,
		marginBottom: 10,
		fontWeight: "700",
		// alignSelf: 'center'
	},
});

export default SignUpScreen;
