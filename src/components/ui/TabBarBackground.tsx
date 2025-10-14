import React from 'react';
import { StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';

export default function TabBarBackground() {
  return (
    <BlurView
      style={StyleSheet.absoluteFill}
      blurType="light"       // options: 'xlight', 'light', 'dark'
      blurAmount={10}        // intensity
      reducedTransparencyFallbackColor="white" // fallback color if blur not supported
    />
  );
}
