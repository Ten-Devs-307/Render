import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const profile_img =
	"https://cdn.pixabay.com/photo/2020/05/26/15/42/eagle-5223559_960_720.jpg";

const UserProfile = () => {
	return (
		<View style={styles.root}>
			{/* Agent profile */}
			<Image style={styles.image} source={{ uri: profile_img }} />

			{/* Profile Name */}
			<Text style={styles.profile_name}>Mike Owusu</Text>

			{/* Profile Title */}
			<Text style={styles.profile_title}>Personal Shopper</Text>

			{/* Profile Details */}
			<View style={styles.profile_display}>
				<View style={styles.profile_details}>
					<AntDesign name="mail" size={25} color="black" />
					<FontAwesome name="phone" size={25} color="black" />
					<Entypo name="location" size={25} color="black" />
				</View>
				<View style={styles.profile_details}>
					<Text style={styles.profile_det}>mikeowusu@gmail.com</Text>
					<Text style={styles.profile_det}>0274439452</Text>
					<Text style={styles.profile_det}>Legon, Accra</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		// padding: 20,
	},
	// styling the image
	image: {
		width: 150,
		height: 150,
		borderRadius: 1000,
	},
	profile_name: {
		fontSize: 26,
		marginTop: 20,
		fontWeight: "bold",
	},
	profile_title: {
		fontSize: 24,
		marginTop: 10,
		marginBottom: 20,
		fontWeight: "400",
	},
	profile_display: {
		// flex: 1,
		flexDirection: "row",
		alignContent: "center",
		justifyContent: "center",
	},
	profile_details: {
		flexDirection: "column",
		marginBottom: 20,
		// alignItems: "center",
		// justifyContent: "center",
	},
	profile_det: {
		// fontSize: 22,
		marginBottom: 15,
		marginLeft: 15,
	},
});

export default UserProfile;
