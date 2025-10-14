import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './style';
import CustomHeader from '../../../components/CustomHeader';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import { useCreateNewPassword } from './useCreateNewPassword';
 

export default function CreatePassword() {
  const {
    password,
    confirmPassword,
    passwordError,
    confirmPasswordError,
    isLoading,
    handlePassText,
    handleCPassText,
    handleSetPassword,
    navigation
  } = useCreateNewPassword()

  return (
    
      <SafeAreaView style={styles.container}>
         {/* {isLoading && <Loading />} */}
        <ScrollView showsVerticalScrollIndicator={false}>
                     <CustomHeader   />
<View style={{
  marginHorizontal:14
}}>
          <View style={styles.headerContainer}>
            <Text  allowFontScaling={false}   style={styles.title}>Create New Password</Text>
            <Text  allowFontScaling={false}   style={styles.description}>Your new password must be different from previous used passwords.</Text>
          </View>

          <View style={styles.formContainer}>
                        <Text  allowFontScaling={false}   style={{
                          color:"#49454F" ,
                          fontSize:14,
                          fontWeight:"600"
                        }}>New Password</Text>

            <CustomInput
              placeholder={"New Password"}
              // leftIcon={<Icon source={imageIndex.lock} size={20} colorIcon="#A59F9F" />}
              // value={password}
              // onChangeText={handlePassText}
              secureTextEntryToggle
            />
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
    <Text  allowFontScaling={false}   style={{
                          color:"#49454F" ,
                          fontSize:14,
                          fontWeight:"600" ,
                          marginTop:18
                        }}>Confirm Password</Text>
            <CustomInput
              placeholder={"Confirm Password"}
              // leftIcon={<Icon source={imageIndex.lock} size={20} colorIcon="#A59F9F" />}
              value={confirmPassword}
              onChangeText={handleCPassText}
              secureTextEntryToggle
            />
            {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
          </View>
          </View>
        </ScrollView>
<View style={{
  marginHorizontal:14
}}>
          <CustomButton title={"Save"} onPress={handleSetPassword} />

  
</View>
      </SafeAreaView>
   );
}
