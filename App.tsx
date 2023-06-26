import { NativeBaseProvider, StatusBar } from 'native-base'
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';
import { THEME } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
        />

        {fontsLoaded ? <Home /> : <Loading />}
    </NativeBaseProvider>
  );
}
