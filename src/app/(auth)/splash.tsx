// screens/SplashScreen.js
import React, { useEffect } from 'react';
import { Image, SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { loadLanguage } from '../../Languages';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      // Navigate to onboarding screen
      navigation.replace('Onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);
    useEffect(() => {
      const initLang = async () => {
        await loadLanguage();
       };
      initLang();
    }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.topSpacer} />
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E3A8A', // bg-blue-900 equivalent
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  topSpacer: {
    height: 200, // adjust as needed (mb-80 in Tailwind)
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 200, // adjust as needed (mb-96 in Tailwind)
  },
  logo: {
    width: 240, // w-60
    height: 240, // h-60
  },
});

export default SplashScreen;
