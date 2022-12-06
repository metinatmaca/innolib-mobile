import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from 'contexts/AuthContext'

const HomeScreen = () => {
	const navigation = useNavigation()
	const { activeRoute } = useContext(AuthContext)
	return (
		<View
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
		>
			<Text>Home Screen</Text>
			<TouchableOpacity
				onPress={() => navigation.navigate(activeRoute.deneme)}
			>
				<Text>Press me</Text>
			</TouchableOpacity>
		</View>
	)
}

export default HomeScreen
