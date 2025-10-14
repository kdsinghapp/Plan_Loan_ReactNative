  import React from 'react';
  import { Alert, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
  import { useNavigation } from '@react-navigation/native';

  type NavbarProps = {
    currentScreen: string;
    setCurrentScreen: (screen: string) => void;
    onLogout?: (navigation: any) => void;
  };

  const Navbar: React.FC<NavbarProps> = ({ currentScreen, setCurrentScreen, onLogout }) => {
    const navigation = useNavigation<any>();

    const handleNavigation = (screen: string) => {
      setCurrentScreen(screen);
      navigation.navigate(screen);
    };

    const isActive = (screen: string) => currentScreen === screen;

    const handleLogoutPress = () => {
      if (onLogout) {
        onLogout(navigation);
      } else {
        Alert.alert('Logout', 'Are you sure you want to logout?', [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Logout',
            style: 'destructive',
            onPress: () => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
            },
          },
        ]);
      }
    };

    return (
      <View style={styles.container}>
        {/* Home */}
        <TouchableOpacity
          style={[styles.button, isActive('Home') && styles.activeButton]}
          onPress={() => handleNavigation('Home')}
        >
          <Image
            source={require('../assets/images/navbar/home.png')}
            style={[styles.icon, { tintColor: isActive('Home') ? 'white' : '#374151' }]}
          />
          {isActive('Home') && <Text style={styles.activeText}>首頁</Text>}
        </TouchableOpacity>

        {/* Loan */}
        <TouchableOpacity
          style={[styles.button, isActive('Loan') && styles.activeButton]}
          onPress={() => handleNavigation('Loan')}
        >
          <Image
            source={require('../assets/images/navbar/Loan.png')}
            style={[styles.icon, { tintColor: isActive('Loan') ? 'white' : '#374151' }]}
          />
          {isActive('Loan') && <Text style={styles.activeText}>借貸</Text>}
        </TouchableOpacity>

        {/* Help */}
        <TouchableOpacity
          style={[styles.button, isActive('Help') && styles.activeButton]}
          onPress={() => handleNavigation('Help')}
        >
          <Image
            source={require('../assets/images/navbar/help.png')}
            style={[styles.icon, { tintColor: isActive('Help') ? 'white' : '#374151' }]}
          />
          {isActive('Help') && <Text style={styles.activeText}>支援</Text>}
        </TouchableOpacity>

        {/* Notifications */}
        <TouchableOpacity
          style={[styles.button, isActive('Notifications') && styles.activeButton]}
          onPress={() => handleNavigation('Notifications')}
        >
          <Image
            source={require('../assets/images/navbar/profile.png')}
            style={[styles.icon, { tintColor: isActive('Notifications') ? 'white' : '#374151' }]}
          />
          {isActive('Notifications') && <Text style={styles.activeText}>通知</Text>}
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 12,
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderTopColor: '#E5E7EB',
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 24,
      backgroundColor: 'transparent',
    },
    activeButton: {
      backgroundColor: '#334155',
    },
    icon: {
      width: 20,
      height: 20,
    },
    activeText: {
      color: 'white',
      fontSize: 14,
      fontWeight: '600',
      marginLeft: 8,
    },
  });

  export default Navbar;
