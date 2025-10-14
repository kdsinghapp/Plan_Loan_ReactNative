import React, { useState } from 'react';
import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface HamburgerMenuProps {
  visible: boolean;
  onClose: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ visible, onClose }) => {
  const navigation = useNavigation<any>();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleNavigation = (route: string) => {
    onClose();
    navigation.navigate(route);
  };

  const handleLogoutPress = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    onClose();
    console.log('Logout confirmed');
    navigation.navigate('Login'); // adjust to your login screen
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      {/* Main Hamburger Menu */}
      <Modal
        visible={visible && !showLogoutModal}
        animationType="fade"
        transparent={true}
        onRequestClose={onClose}
      >
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)' }}>
          <View style={{ width: '80%', backgroundColor: 'white', shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 4, elevation: 10 }}>
            <ScrollView contentContainerStyle={{ paddingTop: 100 }}>
              {/* Profile */}
              <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginBottom: 40 }}>
                <Image
                  source={require('../assets/images/menu/profile-avatar.png')}
                  style={{ width: 80, height: 80, borderRadius: 40, marginRight: 12 }}
                />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginBottom: 4 }}>John Smith</Text>
                  <Text style={{ fontSize: 14, color: 'black' }}>johnsmith@example.com</Text>
                </View>
                <TouchableOpacity onPress={onClose}  >
                  <Text style={{ fontSize: 30, color: 'black' }}>×</Text>
                </TouchableOpacity>
              </View>

              {/* Menu Items */}
              <View style={{ marginLeft: 16 }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12 }} onPress={() => handleNavigation('Home')}>
                  <Image source={require('../assets/images/menu/home.png')} style={{ width: 24, height: 24, marginRight: 12 }} />
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#374151' }}>Home</Text>
                                  {/* <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#374151' }}>首頁</Text> */}

				</TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12 }} onPress={() => handleNavigation('Settings')}>
                  <Image source={require('../assets/images/menu/settings.png')} style={{ width: 24, height: 24, marginRight: 12 }} />
				                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#374151' }}>Settings</Text>

                  {/* <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#374151' }}>設定</Text> */}
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12 }} onPress={() => handleNavigation('HelpFeedback')}>
                  <Image source={require('../assets/images/menu/help.png')} style={{ width: 24, height: 24, marginRight: 12 }} />
                  {/* <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#374151' }}>幫助 & 回饋</Text> */}
                                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#374151' }}>Help & Feedback</Text>

				</TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12 }} onPress={() => handleNavigation('HowToUse')}>
                  <Image source={require('../assets/images/menu/howtouse.png')} style={{ width: 24, height: 24, marginRight: 12 }} />
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#374151' }}>How To Use</Text>
                </TouchableOpacity>
              </View>

              {/* Logout Button */}
              <TouchableOpacity
                onPress={handleLogoutPress}
                style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fee2e2', borderColor: '#f87171', borderWidth: 1, borderRadius: 12, paddingVertical: 12, paddingHorizontal: 16, marginLeft: 16, marginTop: 24, width: '65%' }}
              >
                <Image source={require('../assets/images/menu/logout.png')} style={{ width: 24, height: 24, marginRight: 12 }} />
                <Text style={{ color: '#f87171', fontSize: 16, fontWeight: 'bold' }}>Logout</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Overlay */}
          <TouchableOpacity style={{ flex: 1 }} onPress={onClose} />
        </View>
      </Modal>

      {/* Logout Confirmation */}
      <Modal visible={showLogoutModal} transparent animationType="fade" onRequestClose={handleLogoutCancel}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(38,38,38,0.5)' }}>
          <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 20, width: 300 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#374151', textAlign: 'center', marginBottom: 8 }}>Logout?</Text>
            <Text style={{ fontSize: 14, color: '#6b7280', textAlign: 'center', marginBottom: 20 }}>Are you sure you want to logout from this account?</Text>

            <TouchableOpacity onPress={handleLogoutConfirm}>
              <View style={{ backgroundColor: '#374151', paddingVertical: 12, borderRadius: 12, marginBottom: 12, alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Yes</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogoutCancel}>
              <View style={{ backgroundColor: '#e5e7eb', paddingVertical: 12, borderRadius: 12, alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#374151' }}>No</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default HamburgerMenu;
