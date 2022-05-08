import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const CustomInput = ({ value, setValue, placeholder,secureTextEntry, editable}) => {
	return (
		<View style={styles.container}>
			<TextInput 
            value = {value}
            onChangeText = {setValue}
            placeholder= {placeholder} 
            style={styles.input}
				secureTextEntry={secureTextEntry}
				editable={tue}
             />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// backgroundColor: "white",
		width: "100%",
		borderColor: "#000",
		// borderRadius: 5,
		borderBottomWidth: 2,
		// paddingHorizontal: 10,
		paddingVertical: 5,
		marginBottom: 30,
		marginVertical: 10,
	
	},
	input: {
		fontSize: 20,
		color: '#000',
	},
});

export default CustomInput;
