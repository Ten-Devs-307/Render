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
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { SIZES, COLORS } from "../constants/theme";
import { useFonts } from "expo-font";
import SelectDropdown from "react-native-select-dropdown";

import { AuthContext } from "../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay/lib";

const SignUpScreen = () => {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [number, setNumber] = useState(null);
	const [role, setRole] = useState('');

	const { register, isLoading } = useContext(AuthContext);

	const navigation = useNavigation();

	const [loaded] = useFonts({
		Poppins_black: require("../../assets/fonts/Poppins-Black.ttf"),
		Poppins_blacki: require("../../assets/fonts/Poppins-BlackItalic.ttf"),
		Poppins_bold: require("../../assets/fonts/Poppins-Bold.ttf"),
		Poppins_light: require("../../assets/fonts/Poppins-Light.ttf"),
		Poppins_regular: require("../../assets/fonts/Poppins-Regular.ttf"),
	});

	const clientType = ["Labourer", "Customer"];

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
			<Spinner visible={isLoading} />
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
						onChangeText={(text) => setEmail(text)}
					/>
				</View>
				<View style={styles.wrapper}>
					<TextInput
						placeholder="Full Name"
						placeholderTextColor="#000"
						style={styles.input}
						value={name}
						onChangeText={(text) => setName(text)}
					/>
				</View>
				<View style={styles.wrapper}>
					<TextInput
						placeholder="Password"
						placeholderTextColor="#000"
						style={styles.input}
						value={password}
						secureTextEntry={true}
						onChangeText={(text) => setPassword(text)}
					/>
				</View>

				{/* Select Role */}

				<View
					style={{
						flexDirection: "row",
						// justifyContent: "center",
						flex: -1,
						alignItems: "center",
						marginBottom: 15,
					}}
				>
					<Text style={{ fontSize: SIZES.h3, marginRight: 15 }}>
						Select your role
					</Text>
					<SelectDropdown
						style={{ width: "50%", borderColor: "#000" }}
						data={clientType}
						onSelect={(selectedItem, index) => {
							// console.log(selectedItem, index);
							setRole(selectedItem);
							console.log('your role is: '+role);
						}}
						buttonTextAfterSelection={(selectedItem, index) => {
							// text represented after item is selected
							// if data array is an array of objects then return selectedItem.property to render after item is selected
							return selectedItem;
						}}
						rowTextForSelection={(item, index) => {
							// text represented for each item in dropdown
							// if data array is an array of objects then return item.property to represent item in dropdown
							return item;
						}}
					/>
				</View>

				{/* Phone Number */}
				<View style={styles.wrapper}>
					<TextInput
						placeholder="Phone Number"
						placeholderTextColor="#000"
						style={styles.input}
						value={number}
						onChangeText={(number) => setNumber(number)}
						maxLength={10}
					/>
				</View>

				{/* Custom Button */}
				<View>
					{/* <CustomButton
						text="Register"
						onPress={register(email, name, password)}
						style={styles.submitButton}
					/> */}
					{/* I commented out the custom button because it was giving errors.. */}
					<Button
						title="Register"
						onPress={() => register(email, name, password)}
						style={styles.submitButton}
					/>
				</View>
				<Text style={styles.text}>
					By signing up, you agree to our Terms and Service and Privacy Policy.
				</Text>
				<TouchableOpacity onPress={onLoginPress}>
					<Text style={styles.text}>
						Have an account?
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
