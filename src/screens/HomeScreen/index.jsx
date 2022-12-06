import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { USERROUTES } from 'constants/UserRoutes'

const HomeScreen = () => {
	const navigation = useNavigation()
	return (
		<View
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
		>
			<Text>Home Screen</Text>
			<TouchableOpacity
				onPress={() => navigation.navigate(USERROUTES.deneme)}
			>
				<Text>Press me</Text>
			</TouchableOpacity>
		</View>
	)
}

export default HomeScreen
