import {
	View,
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
	Ionicons,
	FontAwesome,
	Feather,
	MaterialIcons,
} from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";
import CustomButton from "../components/CustomButton";

function JobDetails({route, navigation}) {
	// const navigation = useNavigation();
	const { job } = route.params;
	const onBackPress = () => {
		navigation.navigate("HomeScreen");
	};

	return (
		<SafeAreaView style={{ backgroundColor: "#F8EDED" }}>
			<View style={styles.main}>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						marginBottom: "10%",
					}}
				>
					<Ionicons
						name="chevron-back"
						size={30}
						color="black"
						onPress={onBackPress}
					/>
					<View
						style={{ flexDirection: "row", justifyContent: "center", flex: 1 }}
					>
						<Text style={{ fontWeight: "bold", fontSize: 20 }}>job detail</Text>
					</View>
				</View>
				<Text style={{ marginBottom: "2%", fontWeight: "bold" }}>
					labourer job
				</Text>
				<Text style={{ marginBottom: "10%" }}>Job ID:{job.job_id}</Text>
				<View style={styles.profile}>
					<View style={styles.profile_pic}></View>
					<View
						style={{ flex: 1, height: "100%", justifyContent: "space-between" }}
					>
						<View
							style={{ flexDirection: "row", justifyContent: "space-between" }}
						>
							<View style={{ marginBottom: "3%" }}>
								<Text style={{ marginBottom: "10%" }}>Agent</Text>
								<Text>Mike Owusu</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								marginTop: 20,
								alignContent: "flex-end",
							}}
						>
							<FontAwesome
								name="phone"
								size={30}
								color="black"
								style={{ backgroundColor: "#A9A5A5", marginRight: 20 }}
							/>
							<Feather
								name="message-circle"
								size={30}
								color="black"
								style={{ backgroundColor: "#A9A5A5" }}
							/>
						</View>
					</View>
				</View>
				<View style={{ flexDirection: "row", marginBottom: 15 }}>
					<Text style={{ marginRight: 20, fontWeight: "bold" }}>
						Job Location
					</Text>
					<Text>Pineapple strret,Accra</Text>
				</View>
				<Text style={{ fontSize: 20, fontWeight: "bold" }}>Job Details</Text>
				<View style={styles.job_detail}>
					<Text>whhekrjlskj fkj asdkfj a;lskdfj a;slkdfj asdlkfjs adf;</Text>
				</View>
				<View style={styles.duration}>
					<MaterialIcons
						name="pending-actions"
						size={24}
						color="black"
						style={{ marginLeft: 10 }}
					/>
					<Text>Duration of job -</Text>
					<Text style={{ marginRight: 20 }}>2 days</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						margin: 5,
					}}
				>
					<Text>Total payment:</Text>
					<Text style={{ marginRight: 20 }}>$30</Text>
				</View>
				<View style={{ width: "50%", alignSelf: "flex-end", height: "15%" }}>
					<CustomButton text={"Apply"} />
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	main: {
		justifyContent: "space-evenly",
		margin: 20,
	},
	profile_pic: {
		height: "100%",
		width: "40%",
		backgroundColor: "#A9A5A5",
		marginRight: "4%",
	},
	contact: {},
	profile: {
		flexDirection: "row",
		justifyContent: "space-between",
		height: "20%",
		marginBottom: 20,
	},
	duration: {
		height: "5%%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#C4C4C4",
		borderRadius: 5,
	},
	job_detail: {
		height: "25%",
	},
});

export default JobDetails;