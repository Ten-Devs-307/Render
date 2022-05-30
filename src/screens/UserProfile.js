import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import axios from "axios";
import { AuthContext } from "../context/AuthContext";

import { API_URL } from "../components/configurations/config";

const profile_img =
	"https://cdn.pixabay.com/photo/2020/05/26/15/42/eagle-5223559_960_720.jpg";

const UserProfile = () => {
	const { userInfo } = useContext(AuthContext);
	const [userData, setUserData] = useState([]);

	useEffect(async () => {
		axios.get(`${API_URL}/user-profile/`,
		{
	     headers:
			{
				'Content-Type': 'application/json',
				'Authorization': `Token ${userInfo.token}`}
			}).then(res => {
				let userObject = res.data;
				setUserData(userObject);
				console.log(userObject)
				return userData;
			}).catch(e => {
				console.log(e);
			});
	}, []);

	// const getUserDetailsWithFetch = async () => {
	// 	axios.get(`${API_URL}/user-profile/`,
	// 	{
	//      headers:
	// 		{
	// 			'Content-Type': 'application/json',
	// 			'Authorization': `Token ${userInfo.token}`}
	// 		}).then(res => {
	// 			let userObject = res.data;
	// 			setUserData(userObject);
	// 			return userData;
	// 		}).catch(e => {
	// 			console.log(e);
	// 		});
	// };

	return (
		<View style={styles.root}>
			{/* Agent profile */}
			<Image style={styles.image} source={{ uri: profile_img }} />

			{/* Profile Name */}
			<View style={styles.prof_name_grp}>
				<Text style={styles.profile_name}>Stigar</Text>
				<MaterialCommunityIcons name="check-decagram" size={20} color="black" />
			</View>

			{/* Profile Title */}
			<Text style={styles.profile_title}>Personal Shopper</Text>

			{/* Tasks Completed and Rating */}
			<View style={styles.tasks_complete}>
				<Text style={{ color: "black", fontSize: 20 }}>15 Tasks Completed</Text>
				<Text style={{ fontSize: 30, fontWeight: "bold" }}> | </Text>
				<View style={styles.star}>
					<FontAwesome name="star" size={24} color="black" />
					<FontAwesome name="star" size={24} color="black" />
					<FontAwesome name="star" size={24} color="black" />
				</View>
			</View>

			{/* Profile Details */}
			<View style={styles.profile_display}>
				<View style={styles.profile_details}>
					<AntDesign
						style={{ marginRight: 15 }}
						name="mail"
						size={20}
						color="black"
					/>
					<Text style={styles.profile_det}></Text>
				</View>
				<View style={styles.profile_details}>
					<FontAwesome
						style={{ marginRight: 15 }}
						name="phone"
						size={20}
						color="black"
					/>
					<Text style={styles.profile_det}>0274439452</Text>
				</View>
				<View style={styles.profile_details}>
					<Entypo
						style={{ marginRight: 15 }}
						name="location"
						size={20}
						color="black"
					/>
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
	prof_name_grp: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 25,
	},
	profile_name: {
		fontSize: 26,
		// marginTop: 20,
		fontWeight: "bold",
		marginRight: 5,
	},
	profile_title: {
		fontSize: 20,
		marginTop: 10,
		marginBottom: 15,
		fontWeight: "400",
	},
	profile_display: {
		// flex: 1,
		flexDirection: "column",
		alignContent: "center",
		justifyContent: "center",
	},
	profile_details: {
		flexDirection: "row",
		marginBottom: 10,
		// alignItems: "center",
		// justifyContent: "center",
	},
	profile_det: {
		fontSize: 18,
	},
	tasks_complete: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 25,
	},
	star: {
		flexDirection: "row",
	},
});

export default UserProfile;
