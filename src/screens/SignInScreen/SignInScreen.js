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
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

const baseUrl = "http://www.renderjobs.com/api";

export default function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navigation = useNavigation();

	const onChangeEmailHandler = (email) => {
		setEmail(email);
	};
	const onChangePasswordHandler = (password) => {
		setPassword(password);
	};

	const onSubmitFormHandler = async (event) => {
		if (!email.trim() || !password.trim()) {
			alert("Name or Email is invalid");
			return;
		}
		setIsLoading(true);
		try {
			const response = await axios.post(
				`${baseUrl}/login/`,
				{
					email,
					password,
				},
				{ headers: { "Content-Type": "application/json" } }
			);
			if (response.status === 200 || response.status === 201) {
				alert("Logged in Successfully");
				setIsLoading(false);
				setEmail("");
				setPassword("");
				navigation.navigate("HomeScreen");
			} else {
				throw new Error(response.status);
			}
		} catch (error) {
			alert("Login failed");
			setIsLoading(false);
		}
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View>
				<View style={styles.wrapper}>
					{isLoading ? (
						<Text style={styles.formHeading}> Logging in User </Text>
					) : (
						<Text style={styles.formHeading}>Login user</Text>
					)}
				</View>
				<View style={styles.wrapper}>
					<TextInput
						placeholder="Email"
						placeholderTextColor="#ffffff"
						style={styles.input}
						value={email}
						editable={!isLoading}
						onChangeText={onChangeEmailHandler}
					/>
				</View>
				<View style={styles.wrapper}>
					<TextInput
						placeholder="Password"
						placeholderTextColor="#ffffff"
						style={styles.input}
						value={password}
						editable={!isLoading}
						secureTextEntry={true}
						onChangeText={onChangePasswordHandler}
					/>
				</View>
				<View>
					<Button
						title="Login"
						onPress={onSubmitFormHandler}
						style={styles.submitButton}
						disabled={isLoading}
					/>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#252526",
		alignItems: "center",
		justifyContent: "center",
		marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
	},
	formHeading: {
		color: "#ffffff",
	},
	wrapper: {
		marginBottom: 10,
	},
	input: {
		borderWidth: 2,
		borderColor: "grey",
		minWidth: 200,
		textAlignVertical: "center",
		paddingLeft: 10,
		borderRadius: 20,
		color: "#ffffff",
	},
	submitButton: {
		backgroundColor: "gray",
		padding: 100,
	},
});
