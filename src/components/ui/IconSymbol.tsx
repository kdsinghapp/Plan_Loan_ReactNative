import React from 'react';
import { Image, StyleProp, ViewStyle } from 'react-native';

export type IconSymbolName = 'home' | 'search' | 'heart' | 'star';

interface IconSymbolProps {
  name: IconSymbolName;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

export const IconSymbol: React.FC<IconSymbolProps> = ({
  name,
  size = 24,
  style,
}) => {
  const icons: Record<IconSymbolName, any> = {
    home: require('../../assets/images/home/amount-repaid.png'),
    search:require('../../assets/images/home/amount-repaid.png'),
    heart: require('../../assets/images/home/amount-repaid.png'),
    star: require('../../assets/images/home/amount-repaid.png'),
  };

  return (
    <Image
      source={icons[name]}
      style={[{ width: 11, height: 11 }]}
      resizeMode="contain"
    />
  );
};
