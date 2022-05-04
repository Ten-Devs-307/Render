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
import { COLORS, SIZES } from "../../constants/theme";
import StartUpScreen from "../StartUpScreen";

const slides = [
	{
		id: 1,
		title: "Discover best places",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
		image: require("../../../assets/images/slides/open1.png"),
	},
	{
		id: 2,
		title: "Choose from places",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
		image: require("../../../assets/images/slides/open2.png"),
	},
	{
		id: 3,
		title: "Find best places",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
		image: require("../../../assets/images/slides/open3.png"),
	},
];

const OnBoardScreen = () => {
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
			<AppIntroSlider
				data={slides}
				renderItem={({ item }) => {
					return (
						<View style={styles.root}>
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
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		padding: 15,
		// paddingTop: 100,
	},
	image: {
		width: SIZES.width,
		height: 250,
		marginBottom: 20,
		padding: 10,
	},
	head: {
		fontSize: SIZES.h1,
		color: COLORS.title,
		fontWeight: "bold",
		marginBottom: 10,
	},
	desc: {
		fontSize: SIZES.h4,
		color: COLORS.title,
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
	},
});

export default OnBoardScreen;

// const OnBoardScreen() {
//    const navigation = useNavigation();
//    return (
//       <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
//          <StatusBar translucent backgroundColor='rgba(0,0,0,0)'/>
//          <Image source={require('../../../assets/images/get-things-done.png')} style={StyleSheet.image}/>
//          <View style={styles.indicatorContainer}>
//             <View style={styles.indicator}></View>
//             <View style={styles.indicator}></View>
//             <View style={[styles.indicator,styles.indicatorActive]}></View>
//          </View>
//          <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
//             <View>
//                <Text style={styles.title}>Welcome to</Text>
//                <Text style={styles.title}>Render</Text>
//             </View>
//          </View>
//          <View style={{marginTop:10, paddingHorizontal:20}}>
//             <Text style={styles.subTitle}>
//                Get things done with Render!
//             </Text>
//             <Text style={styles.subTitle1}>
//                With just a few clicks you can find the best service for you
//             </Text>
//          </View>
//          <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 40 }}>
//             <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
//             <View style={styles.btn}>
//                <Text style={{color:'white'}}>Get Started</Text>
//                </View>
//             </TouchableOpacity>
//          </View>
//       </SafeAreaView>
//    );
// };

// const styles = StyleSheet.create({
//    image: {
//       height: 420,
//       width: '100%',
//       borderBottomRightRadius: 100,
//    },
//    indicatorContainer: {
//       height: 20,
//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignItems: 'center'
//    },
//    indicator: {
//       height: 3,
//       width: 30,
//       backgroundColor: 'grey',
//       marginHorizontal: 5,
//       borderRadius: 5,
//    },
//    indicatorActive: {
//       backgroundColor: 'black',
//    },
//    title: {
//       fontSize: 30,
//       fontWeight: 'bold',
//    },
//    subTitle: {
//       fontSize: 20,
//       color: 'grey',
//       marginBottom:5,
//    },
//    subTitle1: {
//       fontSize: 15,
//       color: 'grey',
//    },
//    btn: {
//       backgroundColor: 'black',
//       marginHorizontal: 20,
//       borderRadius: 15,
//       height: 60,
//       justifyContent: 'center',
//       alignItems: 'center',
//    }
// })
