import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import OnBoardScreen from "../screens/OnBoardScreen/OnBoardScreen";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";
import StartUpScreen from "../screens/StartUpScreen";
import UserProfile from "../screens/UserProfile/UserProfile";
import HomeScreen from "../screens/HomeScreen";
import JobDetails from "../screens/JobDetails";
import SplashScreen from "../screens/SplashScreen/SplashScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				// initialRouteName={OnBoardScreen}
			>
				{/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
				<Stack.Screen name="OnBoard" component={OnBoardScreen} />
				<Stack.Screen name="StartUp" component={StartUpScreen} />
				<Stack.Screen name="SignIn" component={SignInScreen} />
				<Stack.Screen name="SignUp" component={SignUpScreen} />
				<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
				<Stack.Screen name="UserProfile" component={UserProfile} />
				<Stack.Screen name="JobDetails" component={JobDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
