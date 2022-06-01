import { View, Text } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import OnBoardScreen from "../screens/OnBoardScreen";
import ForgotPassword from "../screens/ForgotPassword";
import StartUpScreen from "../screens/StartUpScreen";
import UserProfile from "../screens/UserProfile";
import HomeScreen from "../screens/HomeScreen";
import JobDetails from "../screens/JobDetails";
import SplashScreen from "../screens/SplashScreen";

import { AuthContext } from "../context/AuthContext";
const Stack = createNativeStackNavigator();

const Navigation = () => {
	const { userInfo } = useContext(AuthContext);
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{userInfo.token ? (
					<>
						<Stack.Screen name="HomeScreen" component={HomeScreen} />
						<Stack.Screen name="UserProfile" component={UserProfile} />
						<Stack.Screen name="JobDetails" component={JobDetails} />
					</>
				) : (
					<>
						{/* <Stack.Screen name="OnBoard" component={OnBoardScreen} /> */}
						{/* <Stack.Screen name="StartUp" component={StartUpScreen} /> */}
						{/* <Stack.Screen name="SignIn" component={SignInScreen} /> */}
						<Stack.Screen name="SignUp" component={SignUpScreen} />
						<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
