import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>OrderApp Loading...</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
  text: { color: "#fff", fontSize: 22, fontWeight: "bold" },
});
