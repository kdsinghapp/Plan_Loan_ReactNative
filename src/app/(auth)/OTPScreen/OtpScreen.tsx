import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
 
 import { SafeAreaView } from 'react-native-safe-area-context';
 import { styles } from './style';
import { useOtpVerification } from './useOTPVerivication';
import CustomHeader from '../../../components/CustomHeader';
import CustomButton from '../../../components/CustomButton';
import strings from '../../../Languages';
 

export default function OtpScreen() {
  const {
    value,
    isLoading,
    errorMessage,
    ref,
    props,
    getCellOnLayoutHandler,
    handleChangeText,
    handleVerifyOTP,
    navigation,
    type
  } = useOtpVerification()
  return (
    <SafeAreaView edges={['top']}
      style={{ flex: 1, backgroundColor: "white" }}

    >
               <StatusBar barStyle="dark-content" />
      
      <View style={styles.container}>
        
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <CustomBackHeader menuIcon={imageIndex.back} label={"Back"} /> */}
            <CustomHeader   />

          <View style={styles.headerSection}>
            <Text allowFontScaling={false} style={styles.txtHeading}>{strings?.checkGmail} </Text>
            <Text  allowFontScaling={false} style={styles.txtDes}>{strings?.pleasePut}
            </Text>
          </View>

          <View style={styles.otpFieldContainer}>
            <CodeField
            allowFontScaling={false}
              ref={ref}
              {...props}
              value={value}
              onChangeText={handleChangeText}
              cellCount={4}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <View key={index} style={styles.cellWrapper}>
                  <Text
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}
                  >
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
          </View>
          <Image  source ={(require("../../../assets/images/home/otp.png"))}  style={{ top:40, width: 300,height:300,  alignSelf: 'center', marginBottom: 30 }} />

        </ScrollView>

        <CustomButton
          title={strings?.submit}
          // onPress={() => {
             
          //   navigation.navigate("CreatePassword")


         
          // }
          // }
          onPress={handleVerifyOTP}
          style={styles.submitButton}
        />

      </View>
    </SafeAreaView>
  );
}