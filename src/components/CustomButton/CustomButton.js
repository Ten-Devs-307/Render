import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Pressable,
	TouchableOpacity,
} from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
// import { TouchableOpacity } from 'react-native-web';

const CustomButton = ({
	onPress,
	text,
	type = "PRIMARY",
	bgColor,
	fgColor,
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				styles.container,
				styles[`container_${type}`],
				bgColor ? { backgroundColor: bgColor } : {},
			]}
		>
			<Text
				style={[
					styles.text,
					styles[`text_${type}`],
					fgColor ? { color: fgColor } : {},
				]}
			>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		// width: "10%",
		paddingVertical: 10,
		paddingHorizontal: 5,
		marginVertical: 5,
		borderRadius: 1,
	},

	container_PRIMARY: {
		backgroundColor: "rgba(0,0,255,0.8)",
		borderRadius: 15,
	},

	container_SECONDARY: {
		borderColor: "#3B71F3",
		borderWidth: 2,
		borderRadius: 15,
	},

	container_TERTIARY: {
		borderRadius: 15,
	},

	text: {
		// fontWeight: "bold",
		fontSize: SIZES.h4,
		color: COLORS.secondary,
		fontFamily: "Poppins_bold",
		textAlign: "center",
	},

	text_SECONDARY: {
		color: "#3B71F3",
	},

	text_TERTIARY: {
		color: "gray",
	},
});

export default CustomButton;
