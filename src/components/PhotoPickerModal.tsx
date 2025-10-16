import React from 'react';
import { Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface PhotoPickerModalProps {
  visible: boolean;
  onClose: () => void;
  onCamera: () => void;
  onGallery: () => void;
}

const PhotoPickerModal: React.FC<PhotoPickerModalProps> = ({
  visible,
  onClose,
  onCamera,
  onGallery,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {/* Backdrop - tap to close */}
          <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose}>
            <View style={styles.centeredView}>
              {/* Modal Content */}
              <TouchableOpacity activeOpacity={1} onPress={(e) => e.stopPropagation()} style={styles.modalContent}>
                
                {/* Header */}
                <View style={styles.header}>
                  <Text style={styles.title}>Upload Profile Picture</Text>
                  <Text style={styles.subtitle}>Please select to upload your profile picture.</Text>
                </View>

                {/* Action Buttons */}
                <View style={styles.actions}>
                  <TouchableOpacity onPress={onCamera} style={styles.cameraButton}>
                    <Text style={styles.cameraText}>Camera</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={onGallery} style={styles.galleryButton}>
                    <Text style={styles.galleryText}>Gallery</Text>
                  </TouchableOpacity>
                </View>

              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  scrollView: { flexGrow: 1, backgroundColor: 'rgba(107,114,128,0.5)' }, // gray-600/50
  backdrop: { flex: 1, paddingVertical: 200 },
  centeredView: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24 },
  modalContent: { backgroundColor: '#fff', borderRadius: 24, padding: 20, width: '100%' },
  header: { marginBottom: 36, marginHorizontal: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#334155', textAlign: 'center', marginBottom: 8 }, // text-slate-700
  subtitle: { fontSize: 14, color: '#6B7280', textAlign: 'center' }, // text-gray-500
  actions: { },
  cameraButton: { marginBottom: 16, backgroundColor: '#1E3A8A', alignItems: 'center', borderRadius: 12, paddingVertical: 12 },
  cameraText: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  galleryButton: { backgroundColor: '#F1F5F9', borderWidth: 1, borderColor: '#D1D5DB', alignItems: 'center', borderRadius: 12, paddingVertical: 12 },
  galleryText: { fontSize: 18, fontWeight: 'bold', color: '#334155' },
});

export default PhotoPickerModal;
