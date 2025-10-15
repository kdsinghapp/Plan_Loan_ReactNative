import React from 'react';
import { Image,      ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import strings from '../../../Languages';

export default function HowToUseScreen() {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView  showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: 'white' }}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 10, paddingBottom: 24, marginBottom: 32 }}>
          <TouchableOpacity onPress={handleBackPress} style={{ width: 36, height: 36, alignItems: 'center', justifyContent: 'center' }}>
            <Image
  source={require('../../../assets/images/icons/back.png')}              resizeMode="stretch"
              style={{ width: 36, height: 36 }}
            />
          </TouchableOpacity>
          <Text style={{ color: '#374151', fontSize: 24, fontWeight: 'bold', flex: 1, textAlign: 'center' }}>
              {strings.howToUse}
          </Text>
          <View style={{ width: 36, height: 36 }} />
        </View>

        {/* Content */}
        <View style={{ marginHorizontal: 24 }}>
          {/* Introduction */}
          <View style={{ marginBottom: 32 }}>
            <Text style={{ color: '#374151', fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>
              Welcome to Loan Risk
            </Text>
            <Text style={{ color: '#4B5563', fontSize: 16, lineHeight: 24 }}>
              This guide will help you navigate through our app and make the most of our loan risk assessment features.
            </Text>
          </View>

          {/* Steps */}
          <View style={{ marginBottom: 32 }}>
            <Text style={{ color: '#374151', fontSize: 20, fontWeight: 'bold', marginBottom: 24 }}>
              Getting Started
            </Text>

            {/* Step 1 */}
            <View style={{ flexDirection: 'row', marginBottom: 24 }}>
              <View style={{ width: 32, height: 32, backgroundColor: '#2563EB', borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginRight: 16, marginTop: 4 }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>1</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#374151', fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
                  Create Your Profile
                </Text>
                <Text style={{ color: '#4B5563', fontSize: 14, lineHeight: 20, marginBottom: 8 }}>
                  Start by setting up your profile with accurate personal and financial information. This helps us provide better loan assessments.
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile')} // replace with your screen name
                  style={{ backgroundColor: '#DBEAFE', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 12, alignSelf: 'flex-start' }}>
                  <Text style={{ color: '#2563EB', fontSize: 12, fontWeight: 'bold' }}>Go to Profile</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Step 2 */}
            <View style={{ flexDirection: 'row', marginBottom: 24 }}>
              <View style={{ width: 32, height: 32, backgroundColor: '#2563EB', borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginRight: 16, marginTop: 4 }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>2</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#374151', fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
                  Explore Loan Options
                </Text>
                <Text style={{ color: '#4B5563', fontSize: 14, lineHeight: 20, marginBottom: 8 }}>
                  Browse different loan types and use our calculator to estimate monthly payments and interest rates.
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Loan')}
                  style={{ backgroundColor: '#DCFCE7', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 12, alignSelf: 'flex-start' }}>
                  <Text style={{ color: '#16A34A', fontSize: 12, fontWeight: 'bold' }}>View Loans</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Step 3 */}
            <View style={{ flexDirection: 'row', marginBottom: 24 }}>
              <View style={{ width: 32, height: 32, backgroundColor: '#2563EB', borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginRight: 16, marginTop: 4 }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>3</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#374151', fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
                  Apply for a Loan
                </Text>
                <Text style={{ color: '#4B5563', fontSize: 14, lineHeight: 20, marginBottom: 8 }}>
                  Fill out the loan application form with your desired amount and repayment terms. Our AI will assess your risk profile.
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('LoanApply')}
                  style={{ backgroundColor: '#EDE9FE', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 12, alignSelf: 'flex-start' }}>
                  <Text style={{ color: '#7C3AED', fontSize: 12, fontWeight: 'bold' }}>Apply Now</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Step 4 */}
            <View style={{ flexDirection: 'row', marginBottom: 24 }}>
              <View style={{ width: 32, height: 32, backgroundColor: '#2563EB', borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginRight: 16, marginTop: 4 }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>4</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#374151', fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
                  Track Your Application
                </Text>
                <Text style={{ color: '#4B5563', fontSize: 14, lineHeight: 20, marginBottom: 8 }}>
                  Monitor your application status and receive notifications about updates and decisions.
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notifications')}
                  style={{ backgroundColor: '#FFEDD5', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 12, alignSelf: 'flex-start' }}>
                  <Text style={{ color: '#F97316', fontSize: 12, fontWeight: 'bold' }}>View Notifications</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* You can continue converting Features, Tips, and Support sections the same way */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
