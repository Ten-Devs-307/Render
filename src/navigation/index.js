import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import StartUpScreen from "../screens/StartUpScreen";
import UserProfile from "../screens/UserProfile/UserProfile";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: true }}>
				{/* <Stack.Screen name="StartUp" component={StartUpScreen} /> */}
				<Stack.Screen name="UserProfile" component={UserProfile} />
				<Stack.Screen name="SignIn" component={SignInScreen} />
				<Stack.Screen name="SignUp" component={SignUpScreen} />

				{/* <Text>Hello World</Text> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
