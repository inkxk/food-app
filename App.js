import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Montserrat_400Regular' }}>Montserrat_400Regular</Text>
        <Text style={{ fontFamily: 'Montserrat_500Medium' }}>Montserrat_500Medium</Text>
        <Text style={{ fontFamily: 'Montserrat_600SemiBold' }}>Montserrat_600SemiBold</Text>
        <Text style={{ fontFamily: 'Montserrat_700Bold' }}>Montserrat_700Bold</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
