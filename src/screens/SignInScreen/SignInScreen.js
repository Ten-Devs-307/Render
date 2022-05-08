import axios from "axios";
import { BASE_URL } from '../../components/configurations/config';

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



export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

	const navigation = useNavigation();

  const onChangeUsernameHandler = (email) => {
    setUsername(email);
  };
  const onChangePasswordHandler = (password) => {
    setPassword(password);
  };

  const onSubmitFormHandler = async (event) => {
    if (!username.trim() || !password.trim()) {
      alert("Username or Password is invalid");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/login/`, {
			username,
			password,
		},
		{headers: {'Content-Type': 'application/json'}}
		 );
      if (response.status === 200 || response.status === 201) {
        alert('Logged in Successfully');
        setIsLoading(false);
        setUsername('');
        setPassword('');
        navigation.navigate("HomeScreen");
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      alert('Login failed');
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
            value={username}
            editable={!isLoading}
            onChangeText={onChangeUsernameHandler}
				  />
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
