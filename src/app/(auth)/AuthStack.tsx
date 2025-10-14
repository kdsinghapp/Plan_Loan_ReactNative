// navigation/AuthStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './splash';
import OnboardingScreen from './onboarding';
 import CreateProfileScreen from './create-profile';
import RegisterScreen from './register';
import UploadCameraScreen from './upload-camera';
import UploadGalleryScreen from './upload-gallery-new';
 
import ChangePasswordScreen from '../(tabs)/settings/change-password';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './login';
import PasswordReset from './PasswordReset/PasswordReset';
import OtpScreen from './OTPScreen/OtpScreen';
import CreatePassword from './CreateNewPassword/CreateNewPassword';
import TabLayout from '../(tabs)/_layout';
import NotificationsScreen from '../(tabs)/notifications';
 

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="TabLayout" component={TabLayout} /> */}
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
     <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={PasswordReset} />  
 <Stack.Screen name="OTP" component={OtpScreen} />
  <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />

 
  <Stack.Screen name="CreatePassword" component={CreatePassword} />  
  <Stack.Screen name="TabLayout" component={TabLayout} />

 
      {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} /> */}
      {/* <Stack.Screen name="Register" component={RegisterScreen} />
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
