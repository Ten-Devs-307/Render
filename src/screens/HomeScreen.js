import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	StatusBar,
	Image,
	ScrollView,
	TextInput,
	Dimensions,
	Pressable,
} from "react-native";
import React, { useContext } from "react";
import CustomButton from "../components/CustomButton";
import ListItem from "../components/ListItem";
import { useNavigation } from "@react-navigation/native";
import JobCategoriesList from "../components/job-categories/JobCategoriesList";
import Jobs from "../components/jobs/Jobs";
import Icon from "react-native-vector-icons/MaterialIcons";
const { width } = Dimensions.get("screen");

import { AuthContext } from "../context/AuthContext";
const HomeScreen = () => {
	const { logout } = useContext(AuthContext);
	const navigation = useNavigation();

	const ListServices = () => {
		const ServicesList = [
			{ title: "Laundry Services" },
			{ title: "Barbering Services" },
			{ title: "Cooking Services" },
		];
		return (
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{ServicesList.map((option, index) => (
					<ListItem
						type="agent"
						key={index}
						name={option.title}
						image={{ uri: profile_img }}
						city="Accra"
					/>
				))}
			</ScrollView>
		);
	};

	const ListCategories = () => {
		const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
		const CategoriesList = ["Jobs"];
		return (
			<View
				style={{
					marginTop: 15,
					flexDirection: "row",
					justifyContent: "space-between",
					paddingHorizontal: 30,
				}}
			>
				{CategoriesList.map((option, index) => (
					<Pressable
						onPress={() => setSelectedCategoryIndex(index)}
						key={index}
					>
						<Text
							key={index}
							style={[
								styles.categoryListText,
								index == selectedCategoryIndex && styles.activeCategoryListText,
							]}
						>
							{option}
						</Text>
					</Pressable>
				))}
			</View>
		);
	};


	const onUserPress = () => {
		navigation.navigate("JobDetails");
	};

	const profile_img =
		"https://cdn.pixabay.com/photo/2020/05/26/15/42/eagle-5223559_960_720.jpg";

	return (
		<SafeAreaView style={{ backgroundColor: "#fff" }}>
			<StatusBar
				translucent={false}
				backgroundColor="white"
				barStyle="dark-content"
			/>
			<View style={styles.header}>
				<View>
					<Text style={{ color: "grey" }}>Location</Text>
					<Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>
						Accra
					</Text>
				</View>
				<Pressable onPress={onUserPress}>
					{/* <Image source={{ uri: profile_img }} style={styles.profileImage} /> */}
					<Icon name="menu" size={35} color={"grey"} />
				</Pressable>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						paddingHorizontal: 20,
					}}
				>
					<View style={styles.searchInputContainer}>
						<Icon name="search" size={25} color={"grey"} />
						<TextInput placeholder="Search address, City, Location, Agent name..." />
					</View>
					<Pressable onPress={logout}>
						<View style={styles.sortButton}>
							<Icon name="tune" size={25} color={"white"} />
						</View>
					</Pressable>
				</View>
				{/* <ListServices /> */}
				<JobCategoriesList />
				<ListCategories />
				<Jobs />
				{/* <Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card /> */}
				<View style={{ marginTop: 100 }}></View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	header: {
		paddingVertical: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
	},
	searchInputContainer: {
		flexDirection: "row",
		height: 50,
		backgroundColor: "#f5f5f5",
		flex: 1,
		borderRadius: 10,
		paddingHorizontal: 20,
		alignItems: "center",
	},
	sortButton: {
		backgroundColor: "black",
		height: 50,
		width: 50,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 10,
	},
	categoryListText: {
		fontSize: 16,
		fontWeight: "bold",
		paddingHorizontal: 5,
		color: "grey",
	},
	activeCategoryListText: {
		color: "black",
		borderBottomWidth: 1,
		paddingBottom: 5,
	},
	cardImage: {
		width: "100%",
		height: 130,
		borderRadius: 15,
	},
	
});

export default HomeScreen;
