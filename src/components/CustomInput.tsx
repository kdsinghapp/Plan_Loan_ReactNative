import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Text,
  Image
} from 'react-native';
 
interface CustomInputProps extends TextInputProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  secureTextEntryToggle?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  type?: string;
  onpress?: any,
  date?: string,
  placeholder:any
}

const CustomInput: React.FC<CustomInputProps> = ({
  leftIcon,
  secureTextEntryToggle = false,
  containerStyle,
  type = "input",
  onpress,
  date,
  rightIcon,
  placeholder,
editable,
  ...rest
}) => {
  const [hidePassword, setHidePassword] = useState(secureTextEntryToggle);

  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

      {type == "date" ?
        <TouchableOpacity onPress={onpress} style={{ width: '93%',}}>
          <Text allowFontScaling={false}   style={[styles.input, { width: '100%' }]}>{date}</Text>
        </TouchableOpacity>
        :
        
        <TextInput
        allowFontScaling={false}
 placeholder={placeholder}
 editable={editable}
          style={styles.input}
          placeholderTextColor="#49454F"
          secureTextEntry={hidePassword} 
        
          {...rest}
        />
      }
      
      {secureTextEntryToggle && (
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          {/* <Icon
            source={hidePassword ? imageIndex.hide : imageIndex.hide}
            size={20}
            colorIcon="#A59F9F"
          /> */}
          {hidePassword     ?       <Image  
          
          style={{
            height:15,
            width:15,
            resizeMode:"cover"
          }}
          source ={(require("../assets/images/home/hidePass.png"))}/>

 :   <Image  
 
   style={{
            height:15,
            width:15,
            resizeMode:"cover"
          }}
 source ={(require("../assets/images/home/hidePass.png"))}/>
}
        </TouchableOpacity>
      )}
      
      {rightIcon && <View style={styles.leftIcon}>{rightIcon}</View>}
 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
     paddingHorizontal: 15,
    height: 60,
    marginTop: 8,
     borderColor:"#EAEAEA",
 width:"100%"  ,borderWidth:1 ,
 borderRadius:8
  },
  leftIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: 14,
 
  },
});

export default CustomInput;
