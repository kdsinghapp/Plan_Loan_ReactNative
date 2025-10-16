import React, { useState } from "react";
import { StatusBar } from "react-native";
import {
  Alert,
  Image,
   ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Import your Navbar component
const Navbar = require("../../../components/Navbar").default;

export default function RepayLoanScreen({ navigation }) {
  const [amount, setAmount] = useState("");

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => {
            navigation.replace("LoginScreen"); // Change route if using React Navigation
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleConfirmPayment = () => {
    if (!amount) {
      Alert.alert("Error", "Please enter an amount");
      return;
    }
    Alert.alert("Success", "Payment Confirmed!");
  };

  return (
    <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
      
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          {/* Header with Back Button */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require("../../../assets/images/icons/back.png")}
                style={styles.backIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Loan Summary</Text>
          </View>

          {/* Current Loan Summary */}
          <View style={styles.loanSummaryContainer}>
            <View style={styles.loanCard}>
              <View style={styles.loanCardImage}>
                <Image
                  source={require("../../../assets/images/home/loan-card.png")}
                  style={styles.loanCardImg}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.loanCardHeader}>Remained Loan</Text>
              <View style={styles.loanCardContent}>
                <View>
                  <Text style={styles.loanAmount}>NT $ 10,000</Text>
                  <Text style={styles.loanDueDate}>Due Date: Oct 1, 2024</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Loan Repayment Section */}
          <View style={styles.repaymentContainer}>
            <Text style={styles.sectionTitle}>Loan Repayment</Text>

            {/* Payment Card */}
            <View style={styles.paymentCard}>
              <Image
                source={require("../../../assets/images/ui/mastercard.png")}
                style={styles.cardIcon}
                resizeMode="contain"
              />
              <Text style={styles.cardTitle}>Mastercard</Text>
              <Text style={styles.cardNumber}>**** **** **** 1234</Text>
            </View>

            {/* Add New Card Button */}
            <TouchableOpacity
              style={styles.addCardButton}
              onPress={() => Alert.alert("Info", "Add new card functionality")}
            >
              <Text style={styles.addCardPlus}>+</Text>
              <Text style={styles.addCardText}>Add New Card</Text>
            </TouchableOpacity>

            {/* Repayment Amount Section */}
            <View style={styles.repaymentAmountSection}>
              <Text style={{
                color:"#262626" ,
                fontSize:16,
                fontWeight:"500"

              }}>Repayment Amount</Text>
              <Text style={styles.inputLabel}>Amount</Text>
              <TextInput
                placeholder="Enter amount"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
                style={styles.amountInput}
                placeholderTextColor="#9CA3AF"
              />
            </View>

            {/* Confirm Payment Button */}
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirmPayment}
            >
              <Text style={styles.confirmButtonText}>Confirm Payment</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Bottom Navigation */}
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 16,
    paddingVertical: 8,
  },
  backIcon: {
    width: 33,
    height: 33,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#374061",
  },
  loanSummaryContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop:17
  },
  loanCard: {
    backgroundColor: "#374061",
    borderRadius: 12,
    padding: 16,
    minHeight: 160,
    position: "relative",
  },
  loanCardImage: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 64,
    height: 64,
  },
  loanCardImg: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  loanCardHeader: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  loanCardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  loanAmount: {
    color: "#FACC15",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
  },
  loanDueDate: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  repaymentContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#374061",
    marginBottom: 12,
  },
  paymentCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 12, height:58. ,
  },
  cardIcon: {
    width: 32,
    height: 24,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374061",
    flex: 1,
  },
  cardNumber: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2563EB",
  },
  addCardButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 16,
    marginTop:10, 
    height:58
  
  },
  addCardPlus: {
    fontSize: 18,
    fontWeight: "600",
    color: "#374061",
    marginRight: 8,
  },
  addCardText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374061",
  },
  repaymentAmountSection: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374061",
    marginBottom: 6,
    marginTop:15
  },
  amountInput: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#374061",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#1F2937", 
    height:55 ,
    marginTop:10
  },
  confirmButton: {
    backgroundColor: "#1E3A8A",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginTop: 12,
  },
  confirmButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
