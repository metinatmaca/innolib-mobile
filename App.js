import { AuthProvider } from 'contexts/AuthContext';
import NavigationScreen from 'screens/NavigationScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import i18next from 'services/i18n';
import { I18nextProvider } from 'react-i18next';

const App = () => {
    return (
        <I18nextProvider i18n={i18next}>
            <AuthProvider>
                <PaperProvider>
                    <NavigationScreen />
                </PaperProvider>
            </AuthProvider>
        </I18nextProvider>
    );
}

export default App;
