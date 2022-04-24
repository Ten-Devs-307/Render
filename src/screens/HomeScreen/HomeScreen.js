import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
	const navigation = useNavigation();

	const onUserPress = () => {
		// console.warn("Start Up");
		navigation.navigate("UserProfile");
	};

	return (
		<View style={styles.root}>
			<Text>HomeScreen</Text>
			<CustomButton text="User Profile" onPress={onUserPress} />
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		paddingHorizontal: 20,
	},
});

export default HomeScreen;
