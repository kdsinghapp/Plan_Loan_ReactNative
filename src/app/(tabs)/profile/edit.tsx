import React, { useState } from 'react';
import {
  Alert,
  Image,
   ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PhotoPickerModal from '../../../components/PhotoPickerModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
const Navbar = require('../../../components/Navbar').default;

export default function EditProfileScreen() {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('John Smith');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('19-12-1990');
  const [phoneNumber, setPhoneNumber] = useState('+123 4567890');
  const [address, setAddress] = useState('Lorem Ipsum Dolor Dorsi');
  const [country, setCountry] = useState('United States');
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => navigation.replace('LoginScreen'), // replace with your login screen name
      },
    ]);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleCamera = () => {
	setShowPhotoModal(false)
    launchCamera(
      {
        mediaType: 'photo',
        quality: 0.7,
        saveToPhotos: true,
      },
      (response) => {
        if (!response.didCancel && !response.errorCode) {
          setImageUri(response.assets?.[0].uri || null);
          setModalVisible(false);
        }
      }
    );
  };

  const handleGallery = () => {
		setShowPhotoModal(false)

    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.7,
      },
      (response) => {
        if (!response.didCancel && !response.errorCode) {
          setImageUri(response.assets?.[0].uri || null);
          setModalVisible(false);
        }
      }
    );
  };

//   const handleCamera = () => {
//     setShowPhotoModal(false);
//     navigation.navigate('UploadCameraScreen'); // replace with your screen name
//   };

//   const handleGallery = () => {
//     setShowPhotoModal(false);
//     navigation.navigate('UploadGalleryScreen'); // replace with your screen name
//   };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Image
              source={require('../../../assets/images/icons/back.png')}
              style={styles.backIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Profile</Text>
        </View>

        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={() => setShowPhotoModal(true)} style={{ marginBottom: 24 }}>
            <Image
              source={require('../../../assets/images/profile/avatar.png')}
              style={styles.avatar}
            />
            <View style={styles.editOverlay}>
              <Text style={styles.editText}>✎</Text>
            </View>
          </TouchableOpacity>

          {/* Form */}
          <View style={styles.form}>
            {/* Full Name */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                placeholder="Enter your full name"
                value={fullName}
                onChangeText={setFullName}
                style={styles.input}
                placeholderTextColor="#9CA3AF"
              />
            </View>

            {/* Password */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
                placeholderTextColor="#9CA3AF"
              />
            </View>

            {/* Date of Birth */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Date of Birth</Text>
              <TouchableOpacity
                style={styles.datePicker}
                onPress={() => alert('Date picker pressed!')}
              >
                <Text style={[styles.inputText, dateOfBirth ? styles.inputTextFilled : styles.inputTextPlaceholder]}>
                  {dateOfBirth || 'Select your DOB'}
                </Text>
                {/* <Image
                  source={require('../../../assets/images/profile/camera.png')}
                  style={styles.dateIcon}
                /> */}
              </TouchableOpacity>
            </View>

            {/* Phone */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Phone No</Text>
              <TextInput
                placeholder="Enter your phone no"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                style={styles.input}
                placeholderTextColor="#9CA3AF"
              />
            </View>

            {/* Address */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Address</Text>
              <TextInput
                placeholder="Enter Address"
                value={address}
                onChangeText={setAddress}
                multiline
                numberOfLines={4}
                style={[styles.input, { height: 96, textAlignVertical: 'top' }]}
                placeholderTextColor="#9CA3AF"
              />
            </View>

            {/* Country */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Country</Text>
              <TextInput
                placeholder="Enter your country"
                value={country}
                onChangeText={setCountry}
                style={styles.input}
                placeholderTextColor="#9CA3AF"
              />
            </View>

            {/* Save Button */}
            <TouchableOpacity
              style={styles.saveBtn}
              onPress={() => {
                alert('Profile updated!');
                navigation.goBack();
              }}
            >
              <Text style={styles.saveBtnText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Navbar */}
      <Navbar onLogout={handleLogout} />

      {/* Photo Picker Modal */}
      <PhotoPickerModal
        visible={showPhotoModal}
        onClose={() => setShowPhotoModal(false)}
        onCamera={handleCamera}
        onGallery={handleGallery}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  scrollContent: { paddingBottom: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginLeft: 24, marginTop: 16, marginBottom: 40 },
  backBtn: { marginRight: 16 },
  backIcon: { width: 36, height: 36 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#374151' },
  avatarContainer: { alignItems: 'center', marginHorizontal: 24 },
  avatar: { width: 96, height: 96, borderRadius: 48 },
  editOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#374151',
    borderRadius: 16,
    padding: 4,
  },
  editText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  form: { width: '100%' },
  formGroup: { marginBottom: 16 },
  label: { fontSize: 16, fontWeight: 'bold', color: '#1F2937', marginBottom: 8 },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1F2937',
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  dateIcon: { width: 24, height: 24 },
  inputText: { flex: 1, fontSize: 16 },
  inputTextFilled: { color: '#1F2937' },
  inputTextPlaceholder: { color: '#9CA3AF' },
  saveBtn: { backgroundColor: '#1E3A8A', borderRadius: 12, paddingVertical: 12, alignItems: 'center', marginTop: 16, marginBottom: 24 },
  saveBtnText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
