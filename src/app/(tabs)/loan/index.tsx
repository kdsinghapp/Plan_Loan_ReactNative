import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const Navbar = require('../../../components/Navbar').default;
const HamburgerMenu = require('../../../components/HamburgerMenu').default;

export default function LoanScreen() {
  const navigation = useNavigation();
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => navigation.replace('Login') // Your login screen name
        }
      ]
    );
  };
const payments = [
  { label: "Next Payment", value: "10 Oct 2025" },
  { label: "Due Amount", value: "$250" },
  { label: "Status", value: "Paid" }
];
const payments2 = [
  { label: "Interest Rate", value: "8.5% p.a." },
   { label: "Monthly Payment", value: "NT $2,500" }
];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        {/* Top Header with buttons */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 16,
          marginTop: 16,
          marginBottom: 24,
          paddingVertical: 8
        }}>
          {/* Left side - Hamburger menu */}
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#FACC15',
              borderRadius: 12,
              padding: 8
            }}
            onPress={() => setShowHamburgerMenu(true)}
          >
            <Image
              source={require('../../../assets/images/icons/menu.png')}
              resizeMode="contain"
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>

          {/* Center - Title */}
          <Text style={{ color: '#374061', fontSize: 24, fontWeight: 'bold' }}>
            Loan
          </Text>

          {/* Right side - Action buttons */}
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: '#FACC15',
                borderRadius: 12,
                padding: 8,
                marginRight: 16
              }}
              onPress={() => alert('Pressed!')}
            >
              <Image
                source={require('../../../assets/images/icons/call.png')}
                resizeMode="contain"
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: '#FACC15',
                borderRadius: 12,
                padding: 8
              }}
              onPress={() => navigation.navigate('Notifications')}
            >
              <Image
                source={require('../../../assets/images/icons/notification.png')}
                resizeMode="contain"
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Loan Card */}
        <View style={{ marginHorizontal: 16, marginBottom: 24 }}>
          <View style={{
            backgroundColor: '#374061',
            borderRadius: 12,
            padding: 16,
            minHeight: 180,
            position: 'relative'
          }}>
            {/* Top Right Image */}
            <View style={{ position: 'absolute', top: 8, right: 8, width: 64, height: 64 }}>
              <Image
                source={require('../../../assets/images/home/loan-card.png')}
                resizeMode="cover"
                style={{ width: '100%', height: '100%', borderRadius: 12 }}
              />
            </View>

            {/* Header */}
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
             Current Loan Amount
            </Text>

            {/* Amount and Progress */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <Text style={{ color: '#FACC15', fontSize: 28, fontWeight: 'bold' }}>
                {"NT $ 10,000"}
              </Text>

              {/* Progress Circle */}
              <View style={{
                width: 64,
                height: 64,
                backgroundColor: 'white',
                borderRadius: 32,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <View style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#374061',
                }}>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>{"75%"}</Text>
                </View>
              </View>
            </View>

            {/* Progress Bar */}
            <View style={{ height: 8, backgroundColor: '#E5E7EB', borderRadius: 4, marginBottom: 16 }}>
              <View style={{ width: '75%', height: 8, backgroundColor: '#FACC15', borderRadius: 4 }} />
            </View>

            {/* Repay Loan Button */}
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity
                style={{ backgroundColor: '#FACC15', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 8 }}
                onPress={() => navigation.navigate('RepayLoan')}
              >
                <Text style={{ color: '#374061', fontWeight: 'bold', fontSize: 14 }}>Repay Loan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
                  <Text style={{ color: 'black', fontWeight: 'bold' ,marginLeft:15,
					fontSize:20
				  }}>Loan Repayment</Text>
			<View>
  {payments.map((item, index) => (
    <View
      key={index}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 11,
        paddingHorizontal: 15
      }}
    >
      <Text style={{ color: '#262626', fontSize: 15 }}>
        {item.label}
      </Text>
      <Text style={{ color: '#888888', fontSize: 14 }}>
        {item.value}
      </Text>
    </View>
  ))}
</View>


<Text style={{ color: 'black', fontWeight: 'bold' ,marginLeft:15,
					fontSize:20 ,
					marginTop:15,
				  }}>Loan Information</Text>
			<View>
  {payments.map((item, index) => (
    <View
      key={index}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 11,
        paddingHorizontal: 15
      }}
    >
      <Text style={{ color: '#262626', fontSize: 15 }}>
        {item.label}
      </Text>
      <Text style={{ color: '#888888', fontSize: 14 }}>
        {item.value}
      </Text>
    </View>
  ))}
</View>

        
      </ScrollView>

      {/* Bottom Navbar */}
 
      {/* Hamburger Menu */}
      <HamburgerMenu
        visible={showHamburgerMenu}
        onClose={() => setShowHamburgerMenu(false)}
      />
    </SafeAreaView>
  );
}
