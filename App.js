import { AuthProvider } from 'contexts/AuthContext';
import NavigationScreen from 'screens/NavigationScreen';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
    return (
        <AuthProvider>
            <PaperProvider>
                <NavigationScreen />
            </PaperProvider>
        </AuthProvider>
    );
}

export default App;
