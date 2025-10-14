import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
 

export const useOtpVerification = (cellCount: number = 4) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { type, id, email } = route.params || {};

  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const ref = useBlurOnFulfill({ value, cellCount });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });

  const handleChangeText = (text: string) => {
    setValue(text);
    setErrorMessage(text.length < cellCount ? 'Veuillez saisir un code à 4 chiffres.' : '');
  };

  const handleVerifyOTP = async () => {
    if (value.length !== cellCount) {
      setErrorMessage('Veuillez saisir un code à 4 chiffres.');
      return;
    }

    setIsLoading(true);
    try {
      const params = { id, otp: value,email, navigation };
      // await otp_Verify(params, setIsLoading);
    } catch (error) {
      console.error('OTP verification error:', error);
      setErrorMessage('Une erreur s\'est produite. Veuillez réessayer.');
    }
  };

  return {
    value,
    setValue,
    isLoading,
    errorMessage,
    ref,
    props,
    getCellOnLayoutHandler,
    handleChangeText,
    handleVerifyOTP,
    navigation,
    type
  };
};
