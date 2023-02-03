import { SafeAreaView, StatusBar, View } from 'react-native';
import Home from './src/screens/Home';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
  const [loadFonts] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  if(!loadFonts){
    return null;
  }
  return (
    <SafeAreaView>
    <StatusBar/>      
    <Home />
    </SafeAreaView>
  );
}


