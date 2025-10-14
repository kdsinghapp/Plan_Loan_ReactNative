import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
 
type AlignType = 'left' | 'center' | 'right';

interface CustomButtonProps {
  title: string;
  txtcolor?: string;
  bgColor?: string[]; // ✅ Now supports gradient array
  leftIcon?: React.ReactNode;
  alignItm?: AlignType;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  height?: number;
  onPress?: (event: GestureResponderEvent) => void;
  disable?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  txtcolor = '#000000',
  bgColor = ['#00FF85', '#2AB673'], // ✅ default gradient
  leftIcon,
  alignItm = 'center',
  style,
  textStyle,
  height = 60,
  onPress,
  disable = false,
}) => {
  const alignment: Record<AlignType, 'flex-start' | 'center' | 'flex-end'> = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disable} style={[styles.button, style]}>
         <View style={[styles.content, { justifyContent: alignment[alignItm] }]}>
          {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
         <View style={[styles.content, { justifyContent: alignment[alignItm] }]}>
  {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
  <Text allowFontScaling={false} style={[styles.text, { color: "white" }, textStyle]}>
    {title}
  </Text>
</View>

        </View>
  
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor:"#1E3A8A" ,
    height:53 ,
    borderRadius:10 ,
    justifyContent:"center" ,
    alignItems:"center"
  },
  gradient: {
     justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center', // center horizontally
  width: '100%',
  position: 'relative', // allow absolute positioning if needed
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight:"800" ,textAlign:"center"
   },
});

export default CustomButton;
