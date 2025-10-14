import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '.';
import ExploreScreen from './explore';
import NotificationsScreen from './notifications';
import LoanScreen from './loan';
import HelpScreen from './help';
import ProfileScreen from './profile';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? route.name;
        const isFocused = state.index === index;

        const icons: any = {
          Home: require('../../assets/images/navbar/home.png'),
          Loan: require('../../assets/images/navbar/Loan.png'),
          Help: require('../../assets/images/navbar/help.png'),
          Notifications: require('../../assets/images/navbar/profile.png'),
         };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[styles.tabItem, isFocused && styles.activeTab]}
            activeOpacity={0.7}
          >
            <Image
              source={icons[route.name]}
              style={[styles.icon, { tintColor: isFocused ? 'white' : '#374151' }]}
            />
            {isFocused && <Text style={styles.label}>{label}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="Loan" component={LoanScreen} options={{ tabBarLabel: 'Loan' }} />
      <Tab.Screen name="Help" component={HelpScreen} options={{ tabBarLabel: 'Need Help' }} />
      <Tab.Screen name="Notifications" component={ProfileScreen} options={{ tabBarLabel: 'Prfolfe' }} />
      {/* <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ tabBarLabel: 'Prfolfe' }} /> */}
      {/* <Tab.Screen name="Explore" component={ExploreScreen} options={{ tabBarLabel: '' }} /> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
        flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 20,
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderTopColor: '#E5E7EB', 
      marginBottom:11,
  },
  tabItem: {
    flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 2,
      paddingVertical: 8,
      borderRadius: 24,
      backgroundColor: 'transparent',
 
  },
  activeTab: {
  backgroundColor: '#334155',
  width:120 ,alignItems:"center" ,
  justifyContent:"center" ,
  height:43
 
  },
  icon: {
  width: 20,
      height: 20,
  },
  label: {
     color: 'white',
      fontSize: 14,
      fontWeight: '600',
      marginLeft: 8,
  },
});
