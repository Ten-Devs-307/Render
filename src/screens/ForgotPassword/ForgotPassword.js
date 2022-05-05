import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	Image,
	TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import Logo from "../../../assets/images/render.png";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";

const ForgotPassword = () => {
	const navigation = useNavigation();

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	// const value = useContext(AuthContext);

	const onSignUpPress = () => {
		// console.warn("Sign Up");
		navigation.navigate("SignUp");
	};

	return (
		// <ScrollView style={styles.root}>
		<View style={styles.root}>
			{/* {height: height * 0.3} */}
			<Text style={styles.header}>Forgot Password?</Text>
			<Text style={styles.label}>
				Please enter your email to reset password.
			</Text>
			{/* <Text>{val}</Text> */}
			<Text style={styles.labels}>Email</Text>
			<CustomInput
				placeholder=""
				value={email}
				onChangeText={(text) => setEmail(text)}
			/>

			<CustomButton text="Send" />
		</View>
		// </ScrollView>
	);
};

const styles = StyleSheet.create({
	root: {
		justifyContent: "center",
		flex: 1,
		paddingHorizontal: 20,
	},
	label: {
		// alignItems: '',
		fontSize: 20,
		alignSelf: "center",
		marginBottom: 15,
	},
	labels: {
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
		fontSize: 35,
		marginBottom: 50,
		fontWeight: "700",
		alignSelf: "center",
	},
});

export default ForgotPassword;
