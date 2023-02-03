import { SafeAreaView, StatusBar } from 'react-native';
import { useCallback } from'react';
import Home from './src/screens/Home';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mocks from './src/mocks/cesta'
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [loadFonts] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  const onLayoutRootView = useCallback(async () => {
    if (loadFonts) {
      await SplashScreen.hideAsync();
    }
  }, [loadFonts]);
 
  if (!loadFonts) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView}>
    <StatusBar/>      
    <Home {...mocks}/>
    </SafeAreaView>
  );
}


