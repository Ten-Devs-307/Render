import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import UserProfile, { Home } from "../screens";
import JobsScreen from "../screens/JobsScreen";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Search" component={Home} />
			<Tab.Screen name="Bookmark" component={JobsScreen} />
			<Tab.Screen name="UserProfile" component={UserProfile} />
		</Tab.Navigator>
	);
};

export default Tabs;
