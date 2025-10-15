import React, { useState } from 'react';
import { Alert, Image,   ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import strings from '../../../Languages';

export default function HelpFeedbackScreen({ navigation }) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSubmitFeedback = () => {
    if (!subject || !message || !email) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    Alert.alert(
      'Success',
      'Your feedback has been submitted successfully! We will get back to you soon.',
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 11, paddingBottom: 15, marginBottom: 32 }}>
          <TouchableOpacity onPress={handleBackPress} style={{ width: 36, height: 36, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('../../../assets/images/icons/back.png')}
              resizeMode="stretch"
            />
          </TouchableOpacity>
          <Text style={{ flex: 1, textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: '#334155' }}>
                             {strings.HelpCenter}

          </Text>
          <View style={{ width: 36, height: 36 }} />
        </View>

        {/* Content */}
        <View style={{ marginHorizontal: 24 }}>
          {/* Quick Help Section */}
          <View style={{ marginBottom: 32 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#334155', marginBottom: 16 }}>Quick Help</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('FAQScreen')}
              style={{ backgroundColor: '#F8FAFC', borderRadius: 16, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#E5E7EB' }}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#334155', marginBottom: 4 }}>📋 Frequently Asked Questions</Text>
                  <Text style={{ fontSize: 14, color: '#475569', lineHeight: 20 }}>
                    Find answers to common questions about loans, applications, and payments.
                  </Text>
                </View>
                <Text style={{ fontSize: 20, color: '#2563EB', marginLeft: 12 }}>→</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('HowToUseScreen')}
              style={{ backgroundColor: '#F8FAFC', borderRadius: 16, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#E5E7EB' }}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#334155', marginBottom: 4 }}>📖 How To Use Guide</Text>
                  <Text style={{ fontSize: 14, color: '#475569', lineHeight: 20 }}>
                    Step-by-step guide to get started with our loan services.
                  </Text>
                </View>
                <Text style={{ fontSize: 20, color: '#2563EB', marginLeft: 12 }}>→</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Contact Section */}
          <View style={{ marginBottom: 32 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#334155', marginBottom: 16 }}>Contact Support</Text>

            <View style={{ backgroundColor: '#DBEAFE', borderRadius: 16, padding: 16, marginBottom: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1D4ED8', marginBottom: 4 }}>📞 Phone Support</Text>
              <Text style={{ fontSize: 14, color: '#2563EB', marginBottom: 2 }}>+1 (555) 123-4567</Text>
              <Text style={{ fontSize: 12, color: '#2563EB' }}>Monday - Friday: 9:00 AM - 6:00 PM</Text>
            </View>

            <View style={{ backgroundColor: '#DCFCE7', borderRadius: 16, padding: 16, marginBottom: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#15803D', marginBottom: 4 }}>📧 Email Support</Text>
              <Text style={{ fontSize: 14, color: '#16A34A' }}>support@loanrisk.com</Text>
            </View>

            <View style={{ backgroundColor: '#EDE9FE', borderRadius: 16, padding: 16, marginBottom: 24 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#7C3AED', marginBottom: 4 }}>💬 Live Chat</Text>
              <Text style={{ fontSize: 14, color: '#6B21A8', marginBottom: 12 }}>Get instant help from our support team</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('ChatScreen')}
                style={{ backgroundColor: '#334155', borderRadius: 16, paddingVertical: 8, paddingHorizontal: 16, alignSelf: 'flex-start' }}
              >
                <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Start Chat</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Feedback Form */}
          <View style={{ marginBottom: 32 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#334155', marginBottom: 16 }}>Send Feedback</Text>

            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#334155', marginBottom: 4 }}>Your Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email address"
                keyboardType="email-address"
                style={{ backgroundColor: 'white', borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 16, padding: 16, color: '#334155' }}
              />
            </View>

            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#334155', marginBottom: 4 }}>Subject</Text>
              <TextInput
                value={subject}
                onChangeText={setSubject}
                placeholder="What is your feedback about?"
                style={{ backgroundColor: 'white', borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 16, padding: 16, color: '#334155' }}
              />
            </View>

            <View style={{ marginBottom: 24 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#334155', marginBottom: 4 }}>Message</Text>
              <TextInput
                value={message}
                onChangeText={setMessage}
                placeholder="Tell us about your experience or suggestions..."
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                style={{ backgroundColor: 'white', borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 16, padding: 16, color: '#334155', height: 120 }}
              />
            </View>

            <TouchableOpacity
              onPress={handleSubmitFeedback}
              style={{ backgroundColor: '#1E3A8A', borderRadius: 16, paddingVertical: 16, alignItems: 'center' }}
            >
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Submit Feedback</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
