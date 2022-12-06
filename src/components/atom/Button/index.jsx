import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = (props) => {
	return (
		<TouchableOpacity
			style={[
				props?.disabled ? styles.disabledButton : styles.activeButton,
				props?.style,
			]}
			onPress={props?.onPress}
			disabled={props?.disabled}
		>
			{props?.children}
		</TouchableOpacity>
	)
}

export default Button

const styles = StyleSheet.create({
	activeButton: {
		backgroundColor: 'white',
		width: 300,
		height: 50,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 10,
		shadowColor: '#171717',
		shadowOffset: { width: -4, height: 6 },
		shadowOpacity: 0.5,
		shadowRadius: 10,
	},
	disabledButton: {
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		width: 300,
		height: 50,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 10,
		shadowColor: '#171717',
		shadowOffset: { width: -4, height: 6 },
		shadowOpacity: 0.5,
		shadowRadius: 10,
	},
})
