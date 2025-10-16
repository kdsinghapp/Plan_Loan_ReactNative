import React from "react";
import { Image,   ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import strings from "../../Languages";

export default function NotificationsScreen() {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  // Example notification data
  const notifications = Array(9).fill({
    title: "Lorem Ipsum",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    icon: require('../../assets/images/notifications/notification.png'),
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 24, paddingHorizontal: 15, marginBottom: 24 }}>
          <TouchableOpacity onPress={handleBackPress}>
            <Image
              source={require('../../assets/images/icons/back.png')}
              resizeMode="contain"
              style={{ width: 37, height: 36, marginRight: 16 }}
            />
          </TouchableOpacity>
          <Text style={{ color: "#374061", fontSize: 24, fontWeight: "bold" }}>
            {strings?.Notifications}
          </Text>
        </View>

        <View style={{ marginHorizontal: 15, marginBottom: 48 }}>
          {notifications.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 16,
                borderWidth: 1,
                borderColor: "#B1C5DF",
                backgroundColor: "#F4F7FA",
                paddingVertical: 12,
                paddingHorizontal: 16,
                marginBottom: 16,
              }}
            >
              <Image
                source={item.icon}
                resizeMode="contain"
                style={{ width: 49, height: 49, marginRight: 10 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#262626', marginBottom: 4 }}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 14, color: '#6F6F6F' }}>
                  {item.message}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
