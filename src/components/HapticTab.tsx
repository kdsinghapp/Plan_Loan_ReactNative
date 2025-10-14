import React from 'react';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { Pressable } from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const hapticOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export function HapticTab(props: BottomTabBarButtonProps) {
  return (
    <Pressable  
      {...props}
      onPressIn={(ev) => {
        // Haptic feedback (works both on Android and iOS)
        ReactNativeHapticFeedback.trigger('impactLight', hapticOptions);
        props.onPressIn?.(ev);
      }}
    >
      {props.children}
    </Pressable>
  );
}
