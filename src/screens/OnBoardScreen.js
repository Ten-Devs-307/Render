import {
	View,
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { COLORS, SIZES } from "../constants/theme";
import { useFonts } from "expo-font";
// import * as Font from "expo-font";
import StartUpScreen from "./StartUpScreen";

const slides = [
	{
		id: 1,
		title: "Platform For Job Seekers And Hirers",
		description:
			"Your one stop platform to explore available jobs or find a perfect candidate for a task.",
		image: require("../../assets/images/slides/onboard1.png"),
	},
	{
		id: 2,
		title: "Available Jobs Near You",
		description:
			"Filter your search according to your preference to discover available jobs near you.",
		image: require("../../assets/images/slides/onboard2.png"),
	},
	{
		id: 3,
		title: "Post Jobs",
		description:
			"Upload and broadcast jobs to millions of labourers on our platform with just a single click.",
		image: require("../../assets/images/slides/onboard3.png"),
	},
	{
		id: 4,
		title: "Receive Payment",
		description:
			"Receive payments and cashout anytime anywhere from your online wallet after completing a job",
		image: require("../../assets/images/slides/onboard4.png"),
	},
];

const OnBoardScreen = () => {
	const [loaded] = useFonts({
		Poppins_black: require("../../assets/fonts/Poppins-Black.ttf"),
		Poppins_blacki: require("../../assets/fonts/Poppins-BlackItalic.ttf"),
		Poppins_bold: require("../../assets/fonts/Poppins-Bold.ttf"),
		Poppins_light: require("../../assets/fonts/Poppins-Light.ttf"),
		Poppins_regular: require("../../assets/fonts/Poppins-Regular.ttf"),
	});

	const [showHomePage, setShowHomePage] = useState(false);

	const navigation = useNavigation();

	const onDone = () => {
		// console.warn("Sign Up");
		navigation.navigate("StartUp");
	};

	const buttonLabel = (label) => {
		return (
			<View style={styles.buttonview}>
				<Text style={styles.buttonlabel}>{label}</Text>
			</View>
		);
	};

	if (!showHomePage) {
		return (
			<SafeAreaView style={styles.root}>
				<AppIntroSlider
					data={slides}
					renderItem={({ item }) => {
						return (
							<View style={styles.container}>
								<Image
									style={styles.image}
									source={item.image}
									resizeMode="contain"
								/>
								<Text style={styles.head}>{item.title}</Text>
								<Text style={styles.desc}>{item.description}</Text>
							</View>
						);
					}}
					activeDotStyle={{ backgroundColor: COLORS.primary, width: 30 }}
					showSkipButton
					renderNextButton={() => buttonLabel("Next")}
					renderSkipButton={() => buttonLabel("Skip")}
					renderDoneButton={() => buttonLabel("Done")}
					onDone={onDone}
				/>
			</SafeAreaView>
		);
	}

	return (
		<View>
			<StartUpScreen />
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	container: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 10,
	},
	image: {
		width: SIZES.width,
		height: 250,
		marginBottom: 20,
		padding: 20,
	},
	head: {
		fontSize: SIZES.h1,
		color: COLORS.primary,
		fontWeight: "bold",
		// fontFamily: "Poppins_bold",
		// marginBottom: 5,
		textAlign: "center",
		padding: 5,
	},
	desc: {
		fontSize: SIZES.h3,
		color: COLORS.title,
		fontFamily: "Poppins_light",
		textAlign: "center",
		padding: 5,
	},
	buttonview: {
		padding: 12,
	},
	buttonlabel: {
		color: COLORS.title,
		fontWeight: "700",
		fontSize: SIZES.h3,
		// fontFamily: "Poppins_bold",
	},
});

export default OnBoardScreen;
