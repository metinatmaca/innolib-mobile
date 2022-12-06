import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	useWindowDimensions,
} from 'react-native'
import React, { useContext } from 'react'
import i18next, { t } from 'i18next'
import languages from 'constants/Languages'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from 'contexts/AuthContext'

const LanguageScreen = () => {
	const navigation = useNavigation()
	const { activeRoute } = useContext(AuthContext)
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>
				{t('languagePicker.chooseLanguage')}
			</Text>
			<FlatList
				data={languages}
				renderItem={({ item }) => (
					<TouchableOpacity
						key={item.value}
						onPress={() => {
							i18next
								.changeLanguage(item.value)
								.then(() => {
									navigation.reset({
										index: 0,
										routes: [
											{
												name:
													activeRoute?.home ??
													activeRoute?.auth,
											},
										],
									})
								})
								.catch((err) => {
									console.log(err)
								})
						}}
						style={styles.listItem}
					>
						<Text style={styles.listItemText}>{item.label}</Text>
					</TouchableOpacity>
				)}
				style={[
					styles.list,
					{
						maxHeight: Math.min(
							100 * languages.length,
							useWindowDimensions().height * 0.7
						),
					},
				]}
				contentContainerStyle={styles.listContentContainer}
			/>
		</SafeAreaView>
	)
}

export default LanguageScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.backgroundPurple,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'white',
		position: 'absolute',
		top: 80,
		left: 'auto',
		right: 'auto',
	},
	list: {
		width: '90%',
	},
	listContentContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	listItem: {
		marginVertical: 20,
	},
	listItemText: {
		fontSize: 35,
		color: 'white',
	},
})
