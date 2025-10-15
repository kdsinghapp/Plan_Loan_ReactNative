import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Modal,
  FlatList,
} from "react-native";
import Slider from "@react-native-community/slider"; // ✅ custom slider

export default function ApplyLoanScreen() {
  const [loanAmount, setLoanAmount] = useState("");
  const [sliderValue, setSliderValue] = useState(50000);
  const [repaymentTerm, setRepaymentTerm] = useState("12 Months");
  const [showDropdown, setShowDropdown] = useState(false);

  const repaymentOptions = ["6 Months", "12 Months", "18 Months", "24 Months"];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Apply for a Loan</Text>
      </View>

      {/* Loan Amount Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        keyboardType="numeric"
        value={loanAmount}
        onChangeText={setLoanAmount}
      />

      {/* Custom Slider */}
      <View style={styles.sliderContainer}>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={1000}
          maximumValue={100000}
          step={1000}
          minimumTrackTintColor="#0A3D91"
          maximumTrackTintColor="#C8C8C8"
          thumbTintColor="#0A3D91"
          value={sliderValue}
          onValueChange={setSliderValue}
        />
        <Text style={styles.sliderValue}>₹{sliderValue.toLocaleString()}</Text>
      </View>

      {/* Interest Rate */}
      <View style={styles.interestContainer}>
        <Text style={styles.label}>Preview Interest Rate</Text>
        <Text style={styles.interestText}>8.5% p.a.</Text>
      </View>

      {/* Custom Dropdown */}
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setShowDropdown(true)}
      >
        <Text style={styles.dropdownText}>{repaymentTerm}</Text>
        <Text style={styles.dropdownArrow}>▼</Text>
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal visible={showDropdown} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setShowDropdown(false)}
        >
          <View style={styles.dropdownModal}>
            <FlatList
              data={repaymentOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionItem}
                  onPress={() => {
                    setRepaymentTerm(item);
                    setShowDropdown(false);
                  }}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  backButton: {
    borderWidth: 1,
    borderColor: "#FFCC00",
    borderRadius: 10,
    padding: 6,
    marginRight: 10,
  },
  backArrow: {
    fontSize: 16,
    color: "#0A3D91",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 10,
  },
  sliderContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  sliderValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginTop: 5,
  },
  interestContainer: {
    marginBottom: 20,
  },
  label: {
    color: "#555",
    fontSize: 14,
  },
  interestText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  dropdownText: {
    fontSize: 15,
    color: "#000",
  },
  dropdownArrow: {
    fontSize: 14,
    color: "#999",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  dropdownModal: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "80%",
    elevation: 5,
  },
  optionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  optionText: {
    fontSize: 16,
    color: "#000",
  },
  confirmButton: {
    backgroundColor: "#0A3D91",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  confirmText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
