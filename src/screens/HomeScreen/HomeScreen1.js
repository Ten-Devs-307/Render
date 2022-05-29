import { View, Text, StyleSheet, SafeAreaView,StatusBar,Image,ScrollView,TextInput,Dimensions, Pressable, Button, LogBox } from "react-native";
import React, {useContext, useState, useEffect} from "react";
import CustomButton from "../../components/CustomButton";
import ListItem from "../../components/ListItem";
import { useNavigation } from "@react-navigation/native";
import JobCategoriesList from "../../components/job-categories/JobCategoriesList";
import catData from "../../../assets/data/categoryList";
import nearestServices from "../../../assets/data/nearest";
import popularServices from "../../../assets/data/popular";
import recommendedServices from "../../../assets/data/recommended";
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('screen');

import { AuthContext } from "../../context/AuthContext";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
const HomeScreen = () => {
	const navigation = useNavigation();
	const { logout } = useContext(AuthContext)
	// const [selectedCatName, setSelectedCatName] = useState('Recommended')
	// const [selectedCatID, setSelectedCatID] = useState(1)

	useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

	// variable declarations
    const [selectedCatID, setSelectedCat] = useState(1)
    const [selectedCatName, setSelectedCatName] = useState('All')
    const [liked, setLiked] = useState(false)
    const [selectedItemID, setSelectedItemID] = useState()

    // if an item is liked
    const isLiked = (item) => {
        setLiked(!liked)
        setSelectedItemID(item.id)
        //console.log(liked)
    }

    // if an item is liked or not
    const toggleIsLiked = (item) => {
        if (selectedItemID === item.id && liked) {
            return (
                <MaterialIcons name='favorite' size={20} style={{color: '#4580ff'}}/>
            )
        } else {
            return (
                <MaterialIcons name='favorite-outline' size={20} style={{color: '#4580ff'}}/>
            )
        }

    }

    // set the selected item category for comparison
    const setNewCategory = (item) => {
        setSelectedCat(item.id)
        setSelectedCatName(item.category)
    }

    // display the correct category data
    const renderSelectedCategoryData = () => {
        if (selectedCatID === 1) {
            return (
                <View>
                    <Text style={styles.textAboveCard}>Today's Pick</Text>
                    <View>
                        <FlatList 
                        data={todaysPickData}
                        renderItem={renderTodaysPickData}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View>
                        <View style={[styles.textAboveCard, 
                            {flexDirection: 'row', 
                            alignItems: 'center', 
                            borderBottomWidth: 2, 
                            borderBottomColor: '#4580ff',
                            width: 110
                            }]}>
                            <Text style={{fontFamily: 'MontserratMedium', fontSize: 12, color: '#4580ff', marginRight: 10, marginTop: 30}}>Filtered by : </Text>
                            <Text style={{fontSize: 18, marginTop: 30}}>{selectedCatName}</Text>
                        </View>
                        <FlatList 
                        numColumns={2}
                        data={allData}
                        renderItem={renderAllData}
                        keyExtractor={(item) => item.id}
                        />
                    </View>
                </View>
            )
        }else if (selectedCatID === 2) {
            return (
                <View>
                    {/* <View style={[styles.textAboveCard, 
                        {flexDirection: 'row', 
                        alignItems: 'center',
                        borderBottomWidth: 2, 
                        borderBottomColor: '#4580ff',
                        width: 132
                        }]}>
                        <Text style={{fontFamily: 'MontserratMedium', fontSize: 12, color: '#4580ff', marginRight: 10}}>Filtered by : </Text>
                        <Text style={{fontSize: 18}}>{selectedCatName}</Text>
                    </View> */}
                    <FlatList 
                    numColumns={2}
                    data={shoeData}
                    renderItem={renderAllData}
                    keyExtractor={(item) => item.id}
                    />
                </View>
            )   
        }else if (selectedCatID === 3) {
            return (
               <View>
                   <View style={[styles.textAboveCard, 
                    {flexDirection: 'row', 
                    alignItems: 'center',
                    borderBottomWidth: 2, 
                    borderBottomColor: '#4580ff',
                    width: 132
                    }]}>
                       <Text style={{fontFamily: 'MontserratMedium', fontSize: 12, color: '#4580ff', marginRight: 10}}>Filtered by : </Text>
                       <Text style={{fontSize: 18}}>{selectedCatName}</Text>
                   </View>
                   <FlatList 
                   numColumns={2}
                   data={shirtData}
                   renderItem={renderAllData}
                   keyExtractor={(item) => item.id}
                   />
               </View>
            )   
        }else if (selectedCatID === 4) {
            return (
               <View>
                   <View style={[styles.textAboveCard, 
                    {flexDirection: 'row', 
                    alignItems: 'center',
                    borderBottomWidth: 2, 
                    borderBottomColor: '#4580ff',
                    width: 155
                    }]}>
                       <Text style={{fontFamily: 'MontserratMedium', fontSize: 12, color: '#4580ff', marginRight: 10}}>Filtered by : </Text>
                       <Text style={{fontSize: 18}}>{selectedCatName}</Text>
                   </View>
                   <FlatList 
                   numColumns={2}
                   data={glassData}
                   renderItem={renderAllData}
                   keyExtractor={(item) => item.id}
                   />
               </View>
            )   
        }else if (selectedCatID === 5) {
            return (
               <View>
                   <View style={[styles.textAboveCard, 
                    {flexDirection: 'row', 
                    alignItems: 'center',
                    borderBottomWidth: 2, 
                    borderBottomColor: '#4580ff',
                    width: 121
                    }]}>
                       <Text style={{fontFamily: 'MontserratMedium', fontSize: 12, color: '#4580ff', marginRight: 10}}>Filtered by : </Text>
                       <Text style={{fontSize: 18}}>{selectedCatName}</Text>
                   </View>
                   <FlatList 
                   numColumns={2}
                   data={capData}
                   renderItem={renderAllData}
                   keyExtractor={(item) => item.id}
                   />
               </View>
            )   
        }
    }


    // correct look on the selected category text
    const renderCategoryData = ({item}) => {
        return (
            <TouchableOpacity onPress={() => setNewCategory(item)} activeOpacity={0.6}>
                <View style={[
                    item.id === selectedCatID ? styles.selectedCategory : styles.unselectedCategory,
                    {marginLeft: item.id === 1 ? 0 : 20}]}>
                    <Text style={[
                        item.id === selectedCatID ? styles.selectedCategoryDataText : styles.unselectedCategoryDataText
                    ]}>{item.category}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    // display data for today's pick
    const renderTodaysPickData = ({item}) => {
        return (
            <View style={[styles.todaysPickItemsCard, {marginLeft: item.id === 1 ? 20 : 15}]}>
                <View style={styles.favoriteIcon}>
                    <TouchableOpacity onPress={() => isLiked(item)}>
                        {toggleIsLiked(item)}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', {item})}>
                    <View>
                        <Image source={item.image} style={styles.imageSize}/>
                    </View>
                    <Text style={styles.todaysPickName}>{item.name}</Text>
                </TouchableOpacity>
                <View style={styles.todaysPickPriceWrapper}>
                    <Text style={{fontSize: 16, color: 'white'}}>$ {item.price}</Text>
                </View>
            </View>
        )
    }

    // display data for all categories
    const renderAllData = ({item}) => {
        return (
            <View style={styles.allItemsCard}>
                <View style={styles.favoriteIcon}>
                    <TouchableOpacity onPress={() => isLiked(item)}>
                        {toggleIsLiked(item)}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', {item})}>
                    <Image source={item.image} style={styles.imageSize}/>
                    <Text style={styles.todaysPickName}>{item.name}</Text>
                </TouchableOpacity>
                <View style={styles.todaysPickPriceWrapper}>
                    <Text style={{fontSize: 16, color: 'white'}}>$ {item.price}</Text>
                </View>
            </View>
        )
    }
	

	const JobCard = () => {
		return <View styles={{marginBottom:100}}>
			<View style={styles.jobCard}>
				<View style={{flexDirection:'row',justifyContent:'center'}}>
					<Image source={{ uri: profile_img }} style={styles.profileImage} />
					<View style={{ marginLeft: 30, marginVertical: 15,}}>
						<Text style={styles.service_name}>Cleaner</Text>
						<Text style={styles.service_location}>Dome</Text>
					</View>
				</View>
				<View>
					<Text style={styles.service_charge}>$25/h</Text>
				</View>
		</View>
		</View>;
	};

	// const ListServices = () => {
	// 	const ServicesList = [
	// 		{ title: "Laundry Services" },
	// 		{ title: "Barbering Services" },
	// 		{ title: "Cooking Services" },
	// 	];return <ScrollView horizontal showsHorizontalScrollIndicator={false}>
	// 		{ServicesList.map((option, index) =>
	// 			<ListItem type="agent" key={index} name={option.title} image={{ uri: profile_img }} city='Accra'/>
	// 		)}
	// 	</ScrollView>;
		
	// };

	const setSelectedCategory = (item) => {
		setSelectedCatID(item.id)
		setSelectedCatName(item.name)
	}


	const renderCategoryListData = ({item}) => {
		return (
			<TouchableOpacity onPress={() => setSelectedCategory(item)} activeOpacity={0.6}>
				<View style={{ marginTop: 15, flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 20 }}>
					<Text style={[styles.categoryListText, (item.id === setSelectedCatID ? styles.activeCategoryListText : styles.inactiveCategoryListText),]}>
						{item.name}
					</Text>
				</View>
			</TouchableOpacity>
		)
	}; 

	const renderAllCategoryListData = ({item}) => {
		return (
			<View styles={{marginBottom:100}}>
			<View style={styles.jobCard}>
				<View style={{flexDirection:'row',justifyContent:'center'}}>
					<Image source={{ uri: profile_img }} style={styles.profileImage} />
					<View style={{ marginLeft: 30, marginVertical: 15,}}>
						<Text style={styles.service_name}>{item.name}</Text>
						<Text style={styles.service_location}>{item.id}</Text>
					</View>
				</View>
				<View>
					<Text style={styles.service_charge}>$25/h</Text>
				</View>
		</View>
		</View>
		);
	};

	const renderCategoryList = () => {
		if (selectedCatID === 1) {
			return(
				<View>
					<View>
						<Text>
							{selectedCatName}
						</Text>
					</View>
				<FlatList
					data={recommendedServices}
					renderItem={renderAllCategoryListData}
					keyExtractor={(item) => item.id}
					numColumns={1}
					/>
				</View>
			)
		}
		else if (selectedCatID === 2) {
			return (
				<View>
					<View>
						<Text>
							{selectedCatName}
						</Text>
					</View>
				<FlatList
					data={popularServices}
					renderItem={renderAllCategoryListData}
					keyExtractor={(item) => item.id}
					numColumns={1}
					/>
				</View>
			)
		}
		else if (selectedCatID === 3) {
			return (
				<View>
					<View>
						<Text>
							{selectedCatName}
						</Text>
					</View>
			<FlatList
				data={nearestServices}
				renderItem={renderAllCategoryListData}
				keyExtractor={(item) => item.id}
				numColumns={1}
				/>
				</View>
			)
		}

	}

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
					<Text style={{ color: '#000', fontSize:20, fontWeight:'bold'}}>
						Accra
					</Text>
				</View>
				<Pressable onPress={onUserPress}>
					{/* <Image source={{ uri: profile_img }} style={styles.profileImage} /> */}
					<Icon name='menu' size={35} color={'grey'}/>
				</Pressable>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:20}}>
					<View style={styles.searchInputContainer}>
						<Icon name='search' size={25} color={'grey'}/>
						<TextInput placeholder="Search address, City, Location, Agent name..." /> 
					</View>
					<Pressable
					onPress={logout}>
						<View style={styles.sortButton}>
							<Icon name='tune' size={25} color={'white'}/>
						</View>
					</Pressable>
				</View>
				{/* <ListServices /> */}
				<JobCategoriesList />
				
				<View style={{ marginTop: 20 }}>
					<FlatList
						data={catData}
						renderItem={renderCategoryListData}
						keyExtractor={(item) => item.id}
						numColumns={2}
						showsHorizontalScrollIndicator={false}
					/>
				</View>
				<ScrollView
				bounces={true}
            showsVerticalScrollIndicator={false}>
					{renderCategoryList()}
				</ScrollView>
				{/* <ListCategories /> */}
				{/* <JobCard /> */}
				<View style={{marginTop:200}}>
				</View>
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
	},
	inactiveCategoryListText: {
		color: 'grey',
	},
	jobCard: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 90,
		backgroundColor: 'white',
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
	jobcardImage: {
		width: '100%',
		height: 130,
		borderRadius:15,
	},
	service_name: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'black',
	},
	service_location: {
		marginTop: 5,
		fontSize: 14,
		color: 'grey',
		fontWeight:'bold',
	},
	service_charge:{
		fontSize: 16,
		fontWeight: 'bold',
	},




	// try
	container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white'
    },
    menuWrapper: {
        marginVertical: 30,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchCart: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchWrapper: {
        flexDirection: 'row',
        backgroundColor: 'gray',
        width: '82%',
        height: 50,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#f2f2f2'
    },
    cartWrapper: {
        backgroundColor: 'gray',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#4580ff'
    },
    unselectedCategory: {
        width: 75,
        height: 35,
        marginTop: 20,
        borderColor: '#4580ff',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    selectedCategory: {
        width: 75,
        height: 35,
        marginTop: 20,
        backgroundColor: '#4580ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    unselectedCategoryDataText: {
        fontFamily: 'MontserratMedium',
        color: '#4580ff',
        fontSize: 12
    },
    selectedCategoryDataText: {
        fontFamily: 'MontserratMedium',
        color: '#f2f2f2',
        fontSize: 12
    },
    categoryWrapper: {
        marginHorizontal: 20,
    },
    imageSize: {
        resizeMode: 'contain', 
        height: 100, 
        width: 160, 
        marginTop: 33,
    },
    textAboveCard: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 18,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 20
    },
    todaysPickItemsCard: {
        height: 260,
        width: 170,
        backgroundColor: '#f2f2f2',
        marginLeft: 15,
        marginRight: 5,
        borderRadius: 20,
        paddingTop: 15,
        position: 'relative'
    },
    allItemsCard: {
        height: 260,
        width: 170,
        backgroundColor: '#f2f2f2',
        marginLeft: 20,
        marginBottom: 20,
        borderRadius: 20,
        paddingTop: 15,
        position: 'relative'
    },
    favoriteIcon: {
        alignItems: 'center', 
        justifyContent: 'center',
        marginRight: 20, 
        marginBottom: 10,
        backgroundColor: "white",
        position: 'absolute',
        left: '75%',
        top: 8,
        width: 34,
        height: 34,
        borderColor: '#4580ff',
        //borderWidth: 1,
        borderRadius: 20,
        zIndex: 1
    },
    todaysPickName: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 13,
        marginHorizontal: 10,
        marginTop: 30,
        marginBottom: 10,
        color: '#757575'
    },
    todaysPickPriceWrapper: {
        backgroundColor: '#4580ff',
        width: 100,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom: 40,
        position: 'absolute',
        top: 215
    },

});

export default HomeScreen;
