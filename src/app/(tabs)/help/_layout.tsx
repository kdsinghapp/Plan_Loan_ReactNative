// HelpStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
 
import HelpScreen from '.';
import ChatScreen from './chat';
import HelpFeedbackScreen from './feedback';
import FAQScreen from './faq';
import HowToUseScreen from './how-to-use';

const Stack = createStackNavigator();

export default function HelpStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HelpIndex" component={HelpScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Feedback" component={HelpFeedbackScreen} />
      <Stack.Screen name="HowToUse" component={HowToUseScreen} />
      <Stack.Screen name="Faq" component={FAQScreen} />
    </Stack.Navigator>
  );
}
