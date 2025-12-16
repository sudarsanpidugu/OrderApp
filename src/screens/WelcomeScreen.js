import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Svg, { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// 🔥 INCREASED SIZES
const SIZE = 220;
const STROKE_WIDTH = 10;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

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

  const strokeDashoffset = progress.interpolate({
    inputRange: [0, 100],
    outputRange: [CIRCUMFERENCE, 0],
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      <LinearGradient
        colors={["#0A74DA", "#0E9DE9"]}
        style={styles.container}
      >
        {/* BIG CIRCULAR PROGRESS */}
        <View style={styles.circleWrapper}>
          <Svg width={SIZE} height={SIZE}>
            <Circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              stroke="rgba(255,255,255,0.25)"
              strokeWidth={STROKE_WIDTH}
              fill="none"
            />

            <AnimatedCircle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              stroke="#FFFFFF"
              strokeWidth={STROKE_WIDTH}
              fill="none"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </Svg>

          {/* LOGO + NAME */}
          <View style={styles.logoWrapper}>
            <Image
              source={require("../../assets/Image/icons/store.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>
        <Text style={styles.logoText}>StoreApp</Text>

        <Text style={styles.subtitle}>
          Shop smarter. Get faster delivery.
        </Text>

        <Text style={styles.loadingText}>Loading...</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  circleWrapper: {
    width: SIZE,
    height: SIZE,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35,
  },

  logoWrapper: {
    position: "absolute",
    width: 170,
    height: 170,
    borderRadius: 80,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },

  logo: {
    width: 125,
    height: 125,
    borderRadius: 16,
  },

  logoText: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "800",
    color: "#fff",
    letterSpacing: 1,
  },

  subtitle: {
    fontSize: 17,
    color: "#EAF4FF",
    textAlign: "center",
    marginBottom: 12,
  },

  loadingText: {
    fontSize: 15,
    color: "#EAF4FF",
  },
});

