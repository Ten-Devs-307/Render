import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";

const ForgotPassword = () => {
	return (
		<View style={styles.root}>
			<Text>ForgotPassword</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		// alignItems: 'center',
		justifyContent: "center",
		flex: 1,
		alignItems: "center",
		// paddingHorizontal: 20,
	},
});

export default ForgotPassword;
