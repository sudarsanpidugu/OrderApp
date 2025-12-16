import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import DropDownPicker from "react-native-dropdown-picker";
import colors from "../../constants/colors";

const LoginScreen = () => {
  const navigation = useNavigation();

  // Mobile
  const [mobile, setMobile] = useState("");

  // Language
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [languages, setLanguages] = useState([
    { label: "English", value: "en" },
    { label: "తెలుగు", value: "te" },
    { label: "हिन्दी", value: "hi" },
    { label: "தமிழ்", value: "ta" },
    { label: "العربية", value: "ar" },
  ]);

  const handleLogin = () => {
    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }
    navigation.navigate("OtpLogin", { mobile, language });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          {/* Logo */}
          <Image
            source={require("../../../assets/Image/icons/store.png")}
            style={styles.headerImage}
          />

          <Text style={styles.subtitle}>Login to your account</Text>

          {/* Language Selector */}
          <Text style={styles.languageLabel}>Select Language</Text>
          <DropDownPicker
            open={languageOpen}
            value={language}
            items={languages}
            setOpen={setLanguageOpen}
            setValue={setLanguage}
            setItems={setLanguages}
            placeholder="Choose Language"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            textStyle={styles.dropdownText}
            zIndex={1000}
            zIndexInverse={3000}
          />

          {/* Mobile Input */}
          <View style={styles.inputContainer}>
            <Ionicons
              name="call-outline"
              size={22}
              color={colors.primary}
              style={styles.icon}
            />

            <Text style={styles.countryCode}>+91</Text>

            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              placeholderTextColor={colors.textSecondary}
              keyboardType="number-pad"
              maxLength={10}
              value={mobile}
              onChangeText={(text) =>
                setMobile(text.replace(/[^0-9]/g, ""))
              }
            />
          </View>

          {/* Login Button */}
          <TouchableOpacity onPress={handleLogin}>
            <LinearGradient
              colors={[colors.primary, colors.primary]}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Login / Register</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 22,
    backgroundColor: colors.background,
  },
  card: {
    padding: 20,
  },
  headerImage: {
    width: 230,
    height: 130,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: colors.textSecondary,
    marginBottom: 10,
  },

  /* Language */
  languageLabel: {
    marginTop: 10,
    marginBottom: 6,
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: "600",
  },
  dropdown: {
    borderColor: colors.border,
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  dropdownContainer: {
    borderColor: colors.border,
    borderRadius: 12,
  },
  dropdownText: {
    fontSize: 15,
    color: colors.textDark,
  },

  /* Input */
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 14,
    marginTop: 18,
    backgroundColor: colors.white,
  },
  icon: {
    marginRight: 6,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textDark,
    marginRight: 6,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: colors.textDark,
    letterSpacing: 1,
  },

  /* Button */
  button: {
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 30,
    elevation: 4,
  },
  buttonText: {
    color: colors.textLight,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
