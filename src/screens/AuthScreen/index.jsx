import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AUTHROUTES } from 'constants/AuthRoutes'
import colors from 'assets/colors'

const AuthScreen = () => {
	const navigation = useNavigation()
	const handleLogin = () => {
		navigation.navigate(AUTHROUTES.login)
	}

	const handleSignup = () => {
		navigation.navigate(AUTHROUTES.signup)
	}

	return (
		<View style={styles.container}>
			<Image
				source={require('assets/images/logo.png')}
				style={styles.logo}
			/>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={handleLogin}
				>
					<Text style={styles.buttonText}>Giriş Yap</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, styles.signupButton]}
					onPress={handleSignup}
				>
					<Text style={[styles.buttonText, styles.signupText]}>
						Üye Ol
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default AuthScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.backgroundPurple,
	},
	logo: {
		width: 300,
		height: 200,
		resizeMode: 'contain',
	},
	buttonContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
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
	buttonText: {
		fontSize: 14,
		fontWeight: 'bold',
	},
	signupButton: {
		backgroundColor: 'rgba(105,54,245,0.5)',
		borderWidth: 1,
		borderColor: 'white',
	},
	signupText: {
		color: 'white',
	},
})
