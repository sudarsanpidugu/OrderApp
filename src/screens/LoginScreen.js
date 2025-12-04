import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.register}>Don't have an account? Register</Text>
    </View>
  );
};

export default LoginScreen;

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
  register: { marginTop: 18, textAlign: "center", color: "blue" },
});
