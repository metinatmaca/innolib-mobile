import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AuthContext } from 'contexts/AuthContext'

const DenemeScreen = () => {
	const { setAccessGranted } = useContext(AuthContext)
	return (
		<View style={styles.container}>
			<Text>DenemeScreen</Text>
			<TouchableOpacity onPress={() => setAccessGranted(false)}>
				<Text>Çıkış Yap</Text>
			</TouchableOpacity>
		</View>
	)
}

export default DenemeScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
