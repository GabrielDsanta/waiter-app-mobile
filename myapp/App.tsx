import { NativeBaseProvider } from 'native-base'
import { useFonts } from 'expo-font';

export default function App() {
  useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-500': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Bold.otf')
  })


  return (
    <NativeBaseProvider>

    </NativeBaseProvider>
  );
}
