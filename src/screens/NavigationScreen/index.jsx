import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AUTHROUTES } from 'constants/AuthRoutes'
import { USERROUTES } from 'constants/UserRoutes'
import { AuthContext } from 'contexts/AuthContext'
import { useContext } from 'react'
import AuthScreen from 'screens/AuthScreen'
import DenemeScreen from 'screens/DenemeScreen'
import HomeScreen from 'screens/HomeScreen'
import LanguageScreen from 'screens/LanguageScreen'
import LoginScreen from 'screens/LoginScreen'
import SignupScreen from 'screens/SignupScreen'

const Stack = createStackNavigator()
const AuthStack = createStackNavigator()

const NavigationScreen = () => {
	const { accessGranted } = useContext(AuthContext)
	if (accessGranted)
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name={USERROUTES.home}
						component={HomeScreen}
					/>
					<Stack.Screen
						name={USERROUTES.deneme}
						component={DenemeScreen}
					/>
					<Stack.Screen
						name={USERROUTES.language}
						component={LanguageScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		)
	else
		return (
			<NavigationContainer>
				<AuthStack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<AuthStack.Screen
						name={AUTHROUTES.auth}
						component={AuthScreen}
					/>
					<AuthStack.Screen
						name={AUTHROUTES.login}
						component={LoginScreen}
					/>
					<AuthStack.Screen
						name={AUTHROUTES.signup}
						component={SignupScreen}
					/>
					<AuthStack.Screen
						name={AUTHROUTES.language}
						component={LanguageScreen}
					/>
				</AuthStack.Navigator>
			</NavigationContainer>
		)
}

export default NavigationScreen
