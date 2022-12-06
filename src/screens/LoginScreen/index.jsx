import {
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import colors from 'assets/colors'
import { TextInput } from 'react-native-paper'
import Button from 'components/atom/Button'
import { AuthContext } from 'contexts/AuthContext'
import { AUTHROUTES } from 'constants/AuthRoutes'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
	const passwordRef = useRef()
	const { setAccessGranted } = useContext(AuthContext)
	const navigation = useNavigation()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [hidePassword, setHidePassword] = useState(true)
	const [isPasswordFocused, setIsPasswordFocused] = useState(false)
	const [errorState, setErrorState] = useState({
		email: false,
		password: false,
	})

	const handleEmailChange = (e) => {
		setEmail(e)
		if (e.length > 0) {
			setErrorState({ ...errorState, email: false })
		} else {
			setErrorState({ ...errorState, email: true })
		}
	}

	const handleEmailEndEditing = (e) => {
		if (e.nativeEvent.text.length > 0) {
			setErrorState({ ...errorState, email: false })
		} else {
			setErrorState({ ...errorState, email: true })
		}
	}

	const handlePasswordChange = (e) => {
		setPassword(e)
		if (e.length > 0) {
			setErrorState({ ...errorState, password: false })
		} else {
			setErrorState({ ...errorState, password: true })
		}
	}

	const handlePasswordEndEditing = (e) => {
		if (e.nativeEvent.text.length > 0) {
			setErrorState({ ...errorState, password: false })
		} else {
			setErrorState({ ...errorState, password: true })
		}
	}

	const navigateToSignup = () => {
		navigation.navigate(AUTHROUTES.signup)
	}

	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			>
				<Text style={styles.titleTop}>Welcome,</Text>
				<Text style={styles.titleBottom}>Glad to see you!</Text>
				<View style={styles.labelContainer}>
					<Text style={styles.label}>Email:</Text>
				</View>
				<TextInput
					value={email}
					onChangeText={handleEmailChange}
					style={styles.inputEmail}
					mode={'flat'}
					placeholder={'Email'}
					error={errorState.email}
					activeUnderlineColor={'#8b13a1'}
					textColor={'black'}
					dense
					autoCapitalize='none'
					autoComplete='off'
					autoCorrect={false}
					autoFocus
					clearButtonMode='while-editing'
					enablesReturnKeyAutomatically
					keyboardType='email-address'
					onEndEditing={handleEmailEndEditing}
					returnKeyType='next'
					textContentType='emailAddress'
					onSubmitEditing={() => passwordRef.current.focus()}
					blurOnSubmit={false}
				/>
				<View style={styles.labelContainer}>
					<Text style={styles.label}>Password:</Text>
				</View>
				<TextInput
					ref={passwordRef}
					value={password}
					onChangeText={handlePasswordChange}
					style={styles.inputPassword}
					mode={'flat'}
					placeholder={'Password'}
					error={errorState.password}
					activeUnderlineColor={'#8b13a1'}
					textColor={'black'}
					dense
					autoCapitalize='none'
					autoComplete='off'
					autoCorrect={false}
					clearButtonMode='while-editing'
					enablesReturnKeyAutomatically
					onEndEditing={handlePasswordEndEditing}
					returnKeyType='done'
					textContentType='password'
					secureTextEntry={hidePassword}
					onFocus={() => setIsPasswordFocused(true)}
					onBlur={() => setIsPasswordFocused(false)}
					right={
						isPasswordFocused && (
							<TextInput.Icon
								icon={hidePassword ? 'eye' : 'eye-off'}
								onPress={() => setHidePassword(!hidePassword)}
							/>
						)
					}
				/>
				<View style={styles.forgotPasswordContainer}>
					<TouchableOpacity>
						<Text style={styles.forgotPasswordText}>
							Forgot Password?
						</Text>
					</TouchableOpacity>
				</View>
				<Button
					onPress={() => {
						setAccessGranted(true)
					}}
					disabled={!email || !password}
					style={styles.loginButton}
				>
					<Text style={styles.buttonText}>Login</Text>
				</Button>
				<View style={styles.bottomButtonContainer}>
					<TouchableOpacity
						style={styles.bottomButtonTextContainer}
						onPress={navigateToSignup}
					>
						<Text style={styles.bottomButtonText}>
							Don't have an account?{' '}
						</Text>
						<Text style={styles.bottomButtonTextBold}>
							Sign Up Now
						</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	)
}

export default LoginScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.backgroundPurple,
	},
	titleTop: {
		fontSize: 38,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		marginBottom: 10,
	},
	titleBottom: {
		fontSize: 37,
		fontWeight: '300',
		color: 'white',
		textAlign: 'center',
		marginBottom: 50,
	},
	inputEmail: {
		width: 300,
		margin: 10,
		backgroundColor: 'rgba(255, 255, 255, 0.6)',
	},
	inputPassword: {
		width: 300,
		margin: 10,
		backgroundColor: 'rgba(255,255,255,0.6)',
	},
	buttonText: {
		fontSize: 14,
		fontWeight: 'bold',
	},
	forgotPasswordContainer: {
		width: 300,
		alignItems: 'flex-end',
		margin: 10,
	},
	forgotPasswordText: {
		color: '#eee',
	},
	label: {
		color: 'white',
		fontSize: 14,
		fontWeight: 'bold',
		marginTop: 10,
	},
	labelContainer: {
		width: 300,
		alignItems: 'flex-start',
	},
	loginButton: {
		marginTop: 50,
	},
	bottomButtonContainer: {
		position: 'absolute',
		bottom: 20,
		width: '100%',
		alignItems: 'center',
	},
	bottomButtonText: {
		color: '#eee',
		fontSize: 14,
	},
	bottomButtonTextBold: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 14,
	},
	bottomButtonTextContainer: {
		flexDirection: 'row',
	},
})
