import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Dimensions,
} from "react-native";
import React from "react";
const { width } = Dimensions.get("screen");

const ListJobs = ({ type, onPress, location, name, charge }) => {
	const profile_img =
		"https://cdn.pixabay.com/photo/2020/05/26/15/42/eagle-5223559_960_720.jpg";

	const onJobsPress = () => {
		navigation.navigate("JobDetails");
	};
	return (
		<TouchableOpacity onPress={onJobsPress}>
			<View style={styles.card}>
				<View style={{ flexDirection: "row", justifyContent: "center" }}>
					<Image source={{ uri: profile_img }} style={styles.profileImage} />
					<View style={{ marginLeft: 30, marginVertical: 15 }}>
						<Text style={styles.service_name}>{name}</Text>
						<Text style={styles.service_location}>{location}</Text>
					</View>
				</View>
				<View>
					<Text style={styles.service_charge}>GHC{charge}/h</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: 90,
		backgroundColor: "white",
		elevation: 10,
		width: width - 40,
		marginLeft: 20,
		marginTop: 10,
		padding: 15,
		borderRadius: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.68,
		elevation: 11,
	},
	profileImage: {
		height: 50,
		width: 50,
		borderRadius: 25,
	},
	service_name: {
		fontSize: 16,
		fontWeight: "bold",
		color: "black",
	},
	service_location: {
		marginTop: 5,
		fontSize: 14,
		color: "grey",
		fontWeight: "bold",
	},
	service_charge: {
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default ListJobs;
