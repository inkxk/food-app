import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import colors from './assets/colors/colors';
import { Ionicons } from '@expo/vector-icons';

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
        <Text style={{ fontFamily: 'Montserrat_400Regular', color: colors.secondary }}>Montserrat_400Regular</Text>
        <Text style={{ fontFamily: 'Montserrat_500Medium', color: colors.primary }}>Montserrat_500Medium</Text>
        <Text style={{ fontFamily: 'Montserrat_600SemiBold', color: colors.price }}>Montserrat_600SemiBold</Text>
        <Text style={{ fontFamily: 'Montserrat_700Bold', color: colors.textDark }}>Montserrat_700Bold</Text>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
