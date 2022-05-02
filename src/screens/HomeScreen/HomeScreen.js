import { View, Text, StyleSheet, SafeAreaView,StatusBar,Image,ScrollView,TextInput,Dimensions, Pressable } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import ListItem from "../../components/ListItem";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('screen');
const HomeScreen = () => {
	const ListServices = () => {
		const ServicesList = [
			{ title: "Laundry Services" },
			{ title: "Barbering Services" },
			{ title: "Cooking Services" },
		];
		return <ScrollView horizontal showsHorizontalScrollIndicator={false}>
			{ServicesList.map((option, index) =>
				<ListItem type="agent" key={index} name={option.title} image={{ uri: profile_img }} city='Accra'/>
			)}
		</ScrollView>;
	};

	const ListCategories = () => {
		const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
		const CategoriesList = ["Recommended", "Popular", "Nearest"];
		return <View style={{marginTop: 15, flexDirection:'row', justifyContent: "space-between", paddingHorizontal: 30}}>
			{CategoriesList.map((option, index) =>
				<Pressable onPress={() => setSelectedCategoryIndex(index)} key={index}>
				<Text key={index} style={[styles.categoryListText, (index==selectedCategoryIndex && styles.activeCategoryListText),]}>
					{option}
					</Text>
					</Pressable>
			)}
		</View>;
	};

	const navigation = useNavigation();

	const onUserPress = () => {
		navigation.navigate("UserProfile");
	};

	const profile_img = "https://cdn.pixabay.com/photo/2020/05/26/15/42/eagle-5223559_960_720.jpg";

	return (
		<SafeAreaView style={{backgroundColor:'#fff',}}>
			<StatusBar translucent={false} backgroundColor='white' barStyle='dark-content' />
			<View style={styles.header}>
				<View>
					<Text style={{color:'grey'}}>
						Location
					</Text>
					<Text style={{ color: 'dark', fontSize:20, fontWeight:'bold'}}>
						Accra
					</Text>
				</View>
				<Pressable onPress={onUserPress}>
					<Image source={{ uri: profile_img }} style={styles.profileImage} />
				</Pressable>
			</View>
			<ScrollView>
				<View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:20}}>
					<View style={styles.searchInputContainer}>
						<Icon name='search' size={25} color={'grey'}/>
						<TextInput placeholder="Search address, City, Location, Agent name..." /> 
					</View>
					<View style={styles.sortButton}>
						<Icon name='tune' size={25} color={'white'} />
					</View>
				</View>
				<ListServices />
				<ListCategories/>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	header: {
		paddingVertical: 20,
		flexDirection: 'row',
		justifyContent: 'space-between', 
		paddingHorizontal: 20,
	},
	profileImage: {
		height: 50,
		width: 50,
		borderRadius: 25,
	},
	searchInputContainer: {
		flexDirection: 'row',
		height: 50,
		backgroundColor: '#f5f5f5',
		flex: 1,
		borderRadius: 10,
		paddingHorizontal: 20,
		alignItems: 'center',
	},
	sortButton: {
		backgroundColor: 'black',
		height: 50,
		width: 50,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
	},
	categoryListText: {
		fontSize: 16,
		fontWeight: 'bold',
		paddingHorizontal: 5,
		color: 'grey',
	},
	activeCategoryListText: {
		color: 'black',
		borderBottomWidth: 1,
		paddingBottom: 5,
	}
	// agentListContainer: {
	// 	flexDirection: 'row',
	// 	justifyContent: 'space-between',
	// 	marginTop: 20,
	// 	paddingHorizontal: 20,
	// },
	// agentCard: {
	// 	height: 200,
	// 	width: width / 2 - 30,
	// 	backgroundColor: 'white',
	// 	alignItems: 'center', 
	// 	borderRadius: 15,
	// 	paddingTop: 10,
	// 	marginBottom: 10,
	// 	paddingHorizontal: 10,
	// 	shadowColor: "#000",
	// 	shadowOpacity: 0.43,
	// 	shadowRadius: 5.51,
	// 	elevation: 10,
	// },
	// agentsCardImage: {
	// 	height: 140,
	// 	borderRadius: 10,
	// 	width: '100%',
	// },
	// card:{
	// 	height: 250,
	// 	backgroundColor: 'white',
	// 	elevation: 10,
	// 	width: width - 40,
	// 	marginRight: 20,
	// 	padding: 15,
	// 	borderRadius: 20,
	// },
	// cardImage: {
	// 	width: '100%',
	// 	height: 130,
	// 	borderRadius:15,
	// },
	// facility: {
		
	// }


});

export default HomeScreen;
