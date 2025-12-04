import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import colors from "../constants/colors";
import BannerSlider from "./BannerSlider";
import ServicesScreen from "./ServicesScreen";
import PopularServiceProviders from "./PopularServiceProvider";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.body}>
        <BannerSlider />
        <ServicesScreen />
        <PopularServiceProviders />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  body: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.primary, 
  },
});
