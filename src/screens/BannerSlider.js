import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import Swiper from "react-native-swiper";
import colors from "../constants/colors";

const { width } = Dimensions.get("window");

const BannerSlider = () => {
  const banners = [
    require("../../assets/Image/banners/banner.jpg"),
    require("../../assets/Image/banners/banner1.jpg"),
    require("../../assets/Image/banners/banner2.jpg"),
  ];

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Offers for You</Text>

      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          autoplayTimeout={3}
          showsPagination
          dotColor="#ffffff80"
          activeDotColor="#fff"
          loop
        >
          {banners.map((img, index) => (
            <Image key={index} source={img} style={styles.bannerImage} />
          ))}
        </Swiper>
      </View>
    </View>
  );
};

export default BannerSlider;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    paddingHorizontal: 15,
  },

  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textDark,
    marginBottom: 8,
  },

  sliderContainer: {
    height: 180,
    width: "100%",
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.background,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },

  bannerImage: {
    width: width,
    height: "100%",
    resizeMode: "cover",
  },
});
