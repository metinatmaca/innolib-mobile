import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { t } from 'i18next'
import { useNavigation } from '@react-navigation/native'
import { USERROUTES } from 'constants/UserRoutes'
import { AUTHROUTES } from 'constants/AuthRoutes'
import { AuthContext } from 'contexts/AuthContext'

const LanguagePicker = (props) => {
	const navigation = useNavigation()
	const { activeRoute } = useContext(AuthContext)
	return (
		<TouchableOpacity
			style={[styles.container, props?.style]}
			onPress={() =>
				activeRoute === 'user'
					? navigation.navigate(USERROUTES.language)
					: navigation.navigate(AUTHROUTES.language)
			}
		>
			<Text style={styles.text}>
				{t('languagePicker.changeLanguage')}
			</Text>
			<Icon
				size={24}
				name='public'
				color='#ddd'
			/>
		</TouchableOpacity>
	)
}

export default LanguagePicker

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 60,
		right: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#ddd',
		fontSize: 12,
		marginRight: 5,
	},
})
