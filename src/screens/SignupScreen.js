import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Phone" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", textAlign: "center" },
  input: {
    marginTop: 18,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});
