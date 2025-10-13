// navigation/AuthStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './splash';
import OnboardingScreen from './onboarding';
import LoginScreen from './login';
import CreateProfileScreen from './create-profile';
import RegisterScreen from './register';
import UploadCameraScreen from './upload-camera';
import UploadGalleryScreen from './upload-gallery-new';
import OTPScreen from './otp';
import ForgotPasswordScreen from './forgot-password';
import ChangePasswordScreen from '../(tabs)/settings/change-password';
import { NavigationContainer } from '@react-navigation/native';
 

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />
      <Stack.Screen name="UploadCamera" component={UploadCameraScreen} />
      <Stack.Screen name="UploadGallery" component={UploadGalleryScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}
      {/* <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} /> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}
