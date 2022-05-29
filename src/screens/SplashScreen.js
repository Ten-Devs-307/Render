import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

const SplashScreen = () => {
	return (
		<SafeAreaView style={styles.root}>
			<View>
				<Text>SplashScreen</Text>
				<Text>SplashScreen</Text>
				<Text>SplashScreen</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default SplashScreen;
