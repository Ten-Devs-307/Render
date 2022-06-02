import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import StartUpScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

//Screen names
const homeName = "SignUpScreen";
const detailsName = "SignInScreen";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function TabsScreen() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName={homeName}
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						let rn = route.name;

						if (rn === homeName) {
							iconName = focused ? "home" : "home-outline";
						} else if (rn === detailsName) {
							iconName = focused ? "list" : "list-outline";
						} else if (rn === settingsName) {
							iconName = focused ? "settings" : "settings-outline";
						}

						// You can return any component that you like here!
						return <Ionicons name={iconName} size={size} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: "tomato",
					inactiveTintColor: "grey",
					labelStyle: { paddingBottom: 10, fontSize: 10 },
					style: { padding: 10, height: 70 },
				}}
			>
				<Tab.Screen name={homeName} component={SignUpScreen} />
				<Tab.Screen name={detailsName} component={SignInScreen} />
				{/* <Tab.Screen name={settingsName} component={SettingsScreen} /> */}
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default TabsScreen;
