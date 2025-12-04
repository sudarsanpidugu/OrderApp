import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../constants/colors";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      navigation.replace("Login");
    });
  }, []);

  return (
    <View style={styles.container}>

      {/* TOP BRAND IMAGE */}
      <Image
        source={require("../../assets/Image/backgrounds/car.png")}
        style={styles.topImage}
      />

      <Text style={styles.appTitle}>AutoStore</Text>
      <Text style={styles.loadingText}>Loading...</Text>

      <View style={styles.progressBackground}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>

    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  topImage: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginBottom: 20,
  },

  appTitle: {
    fontSize: 38,
    fontWeight: "900",
    color: colors.textLight,
    letterSpacing: 1,
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 18,
    color: colors.textLight,
    marginBottom: 35,
  },
  progressBackground: {
    width: "100%",
    height: 12,
    backgroundColor: colors.secondary,
    borderRadius: 20,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: colors.textLight,
    borderRadius: 20,
  },
});
