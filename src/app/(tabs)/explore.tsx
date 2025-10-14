import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = require('../../components/Navbar').default;

export default function ExploreScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            // Navigate to login screen
            navigation.replace('Login'); 
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 24, paddingVertical: 32 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#111827', marginBottom: 16 }}>
            Explore
          </Text>
          <Text style={{ fontSize: 16, color: '#4B5563', marginBottom: 24 }}>
            This is an example page showing how to use the navbar component.
          </Text>

          <View style={{ backgroundColor: '#DBEAFE', borderRadius: 16, padding: 16, marginBottom: 24 }}>
            <Text style={{ color: '#1E40AF', fontWeight: '600', marginBottom: 8 }}>
              How to use the Navbar:
            </Text>
            <Text style={{ color: '#1E40AF', fontSize: 14 }}>
              1. Import the Navbar component{'\n'}
              2. Add it at the bottom of your screen{'\n'}
              3. Pass the handleLogout function as a prop{'\n'}
              4. The navbar will automatically highlight the current screen
            </Text>
          </View>

          <View style={{ backgroundColor: '#F9FAFB', borderRadius: 16, padding: 16 }}>
            <Text style={{ color: '#111827', fontWeight: '600', marginBottom: 8 }}>
              Available Navigation:
            </Text>
            <Text style={{ color: '#4B5563', fontSize: 14 }}>
              • Home - Navigate to home screen{'\n'}
              • Finance ($) - Coming soon{'\n'}
              • Chat (💬) - Coming soon{'\n'}
              • Profile (👤) - Logout functionality
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <Navbar onLogout={handleLogout} />
    </SafeAreaView>
  );
}
