import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SplashScreen = () => {
	return (
		<View stytle={styles.root}>
			<Text>SplashScreen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		justifyContent: "center",
		alignContent: "center",
		flex: 1,
	},
});

export default SplashScreen;
