import React, {FunctionComponent} from 'react';
import {LogBox, Text,} from 'react-native';
import 'react-native-gesture-handler';
 import { TextInput } from 'react-native';
import 'react-native-reanimated';
import AuthStack  from   './src/app/(auth)/AuthStack'
// "react-native-maps": "^1.26.14",
// 

LogBox.ignoreAllLogs(); 
(Text as any).defaultProps = (Text as any).defaultProps || {};

(Text as any).defaultProps.allowFontScaling = false;
 
(TextInput as any).defaultProps = (TextInput as any).defaultProps || {};

(TextInput as any).defaultProps.allowFontScaling = false;
    
(TextInput as any).defaultProps.underlineColorAndroid = "transparent";

 
const App: FunctionComponent<any> = () => <AuthStack />;

export default App;
 