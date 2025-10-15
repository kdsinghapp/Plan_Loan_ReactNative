import React, { useState, useEffect } from 'react';
import { Image, Modal, ScrollView, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import strings, { loadLanguage, changeAppLanguage } from '../Languages';

interface HamburgerMenuProps {
  visible: boolean;
  onClose: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ visible, onClose }) => {
  const navigation = useNavigation<any>();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initLang = async () => {
      await loadLanguage();
      setIsReady(true);
    };
    initLang();
  }, []);

  // Navigation handler
  const handleNavigation = (route: string) => {
    onClose();
    navigation.navigate(route);
  };

  // Logout handlers
  const handleLogoutPress = () => setShowLogoutModal(true);
  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    onClose();
    console.log('Logout confirmed');
    navigation.navigate('Login');
  };
  const handleLogoutCancel = () => setShowLogoutModal(false);

  // Language handlers
  const handleLanguagePress = () => setShowLanguageModal(true);
  
  const handleLanguageSelect = async (lang: 'en' | 'zh') => {
    await changeAppLanguage(lang);
    setShowLanguageModal(false);
 
  };

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <>
      {/* Main Hamburger Menu */}
      <Modal
        visible={visible && !showLogoutModal && !showLanguageModal}
        animationType="slide"
        transparent={true}
        onRequestClose={onClose}
      >
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {/* Menu Content */}
          <View style={{ 
            width: '85%', 
            backgroundColor: '#FFFFFF', 
            shadowColor: '#000',
            shadowOffset: {
              width: 2,
              height: 0,
            },
            shadowOpacity: 0.25,
            shadowRadius: 10,
            elevation: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20
          }}>
            <ScrollView 
              contentContainerStyle={{ 
                paddingTop: 60,
                paddingBottom: 30 
              }}
              showsVerticalScrollIndicator={false}
            >
              
              {/* Profile Section */}
              <View style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                paddingHorizontal: 20, 
                paddingVertical: 16,
                marginBottom: 30,
                borderBottomWidth: 1,
                borderBottomColor: '#F0F0F0'
              }}>
                <View style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                   justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 15,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                 }}> 
                  <Image  
                  style={{
                     width: 70,
                  height: 70,
                  borderRadius: 35,
                   justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 15,
         
                  }}
                  source={{uri:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"}}/>
                 </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 18, fontWeight: '700', color: '#1F2937', marginBottom: 6 }}>John Smith</Text>
                  <Text style={{ fontSize: 14, color: '#6B7280' }}>johnsmith@example.com</Text>
                </View>
                <TouchableOpacity 
                  onPress={onClose}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor: '#F3F4F6',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ fontSize: 20, color: '#374151', fontWeight: '300' }}>×</Text>
                </TouchableOpacity>
              </View>

              {/* Menu Items */}
              <View style={{ paddingHorizontal: 10 }}>
                {[
                  { key: 'home', label: strings.home, icon: '🏠' },
                  { key: 'HelpFeedback', label: strings.helpFeedback, icon: '❓' },
                  { key: 'LegalPoliciesScreen', label: strings.terms, icon: '📄' },
                  { key: 'HowToUseScreen', label: strings.howToUse, icon: '🎯' ,
                    
                   },
                    { key: 'ChangePasswordScreen', label: strings.ChangePasswordScreen, icon: '🎯' ,
                    
                   },
                  { key: 'language', label: strings.changeLanguage, icon: '🌐', action: handleLanguagePress }
                ].map((item, index) => (
                  <TouchableOpacity 
                    key={item.key}
                    style={{ 
                      flexDirection: 'row', 
                      alignItems: 'center', 
                      paddingVertical: 12,
                      paddingHorizontal: 16,
                       borderRadius: 12,
                     }}
                    onPress={item.action || (() => handleNavigation(item.key))}
                  >
                     <Text style={{ 
                      fontSize: 16, 
                      fontWeight:  '600', 
                      color:   '#374151' 
                    }}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Logout Button */}
              <TouchableOpacity
                onPress={handleLogoutPress}
                style={{ 
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  borderRadius: 12, 
                  paddingVertical: 16,
                  paddingHorizontal: 15,
                  marginHorizontal: 16,
              
                }}
              >
                 <Text style={{ color: '#DC2626', fontSize: 16, fontWeight: '600' }}>{strings.logout}</Text>
              </TouchableOpacity>

              {/* App Version */}
            
            </ScrollView>
          </View>

          {/* Overlay */}
          <TouchableOpacity 
            style={{ flex: 1 }} 
            onPress={onClose}
            activeOpacity={1}
          />
        </View>
      </Modal>

      {/* Logout Confirmation Modal */}
      <Modal visible={showLogoutModal} transparent animationType="fade" onRequestClose={handleLogoutCancel}>
        <View style={{ 
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: 'rgba(0,0,0,0.6)' 
        }}>
          <View style={{ 
            backgroundColor: 'white', 
            borderRadius: 20, 
            padding: 24, 
            width: 320,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 12,
            elevation: 10
          }}>
            {/* Icon */}
            <View style={{ alignItems: 'center', marginBottom: 16 }}>
              <View style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: '#FEF2F2',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 12
              }}>
                <Text style={{ fontSize: 28 }}>🚪</Text>
              </View>
            </View>

            <Text style={{ 
              fontSize: 20, 
              fontWeight: '700', 
              color: '#1F2937', 
              textAlign: 'center', 
              marginBottom: 8 
            }}>
              {strings.logoutConfirmTitle}
            </Text>
            <Text style={{ 
              fontSize: 15, 
              color: '#6B7280', 
              textAlign: 'center', 
              marginBottom: 24,
              lineHeight: 20 
            }}>
              {strings.logoutConfirmMessage}
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity 
                onPress={handleLogoutCancel}
                style={{ flex: 1, marginRight: 8 }}
              >
                <View style={{ 
                  backgroundColor: '#F3F4F6', 
                  paddingVertical: 14, 
                  borderRadius: 12, 
                  alignItems: 'center' 
                }}>
                  <Text style={{ 
                    fontSize: 16, 
                    fontWeight: '600', 
                    color: '#374151' 
                  }}>
                    {strings.no}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={handleLogoutConfirm}
                style={{ flex: 1, marginLeft: 8 }}
              >
                <View style={{ 
                  backgroundColor: '#DC2626', 
                  paddingVertical: 14, 
                  borderRadius: 12, 
                  alignItems: 'center' 
                }}>
                  <Text style={{ 
                    color: 'white', 
                    fontSize: 16, 
                    fontWeight: '600' 
                  }}>
                    {strings.yes}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Language Selection Modal */}
      <Modal visible={showLanguageModal} transparent animationType="fade" onRequestClose={() => setShowLanguageModal(false)}>
        <View style={{ 
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: 'rgba(0,0,0,0.6)' 
        }}>
          <View style={{ 
            backgroundColor: 'white', 
            borderRadius: 20, 
            padding: 24, 
            width: 320,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 12,
            elevation: 10
          }}>
            <Text style={{ 
              fontSize: 20, 
              fontWeight: '700', 
              color: '#1F2937', 
              marginBottom: 20,
              textAlign: 'center'
            }}>
              {strings.selectLanguage}
            </Text>

            {[
              { lang: 'en', label: strings.english, flag: '🇺🇸' },
              { lang: 'zh', label: strings.chinese, flag: '🇨🇳' }
            ].map((language) => (
              <TouchableOpacity 
                key={language.lang}
                onPress={() => handleLanguageSelect(language.lang as 'en' | 'zh')}
                style={{ marginBottom: 12 }}
              >
                <View style={{ 
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 16,
                  paddingHorizontal: 16,
                  borderRadius: 12, 
                  backgroundColor: '#F8F9FA',
                  borderWidth: 1,
                  borderColor: '#E5E7EB'
                }}>
                  <Text style={{ fontSize: 20, marginRight: 12 }}>{language.flag}</Text>
                  <Text style={{ fontSize: 16, fontWeight: '600', color: '#374151' }}>
                    {language.label}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}

            <TouchableOpacity 
              onPress={() => setShowLanguageModal(false)}
              style={{ marginTop: 8 }}
            >
              <View style={{ 
                paddingVertical: 14, 
                alignItems: 'center', 
                borderRadius: 12, 
                backgroundColor: '#F3F4F6',
                borderWidth: 1,
                borderColor: '#E5E7EB'
              }}>
                <Text style={{ 
                  fontSize: 16, 
                  fontWeight: '600', 
                  color: '#374151' 
                }}>
                  {strings.close}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default HamburgerMenu;