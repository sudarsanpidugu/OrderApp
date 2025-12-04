import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../constants/colors";

const providers = [
  {
    id: "1",
    name: "Crystal Clear Car Wash",
    desc: "We offer a variety of washes.",
    price: "$10",
    rating: 4.5,
    image: require("../../assets/Image/provider/p1.jpg"),
  },
  {
    id: "2",
    name: "AquaShine Car Wash",
    desc: "We offer a variety of washes.",
    price: "$10",
    rating: 4.7,
    image: require("../../assets/Image/provider/p2.jpg"),
  },
  {
    id: "3",
    name: "Prestige Auto Spa",
    desc: "We offer a variety of washes.",
    price: "$10",
    rating: 4.8,
    image: require("../../assets/Image/provider/p3.jpg"),
  },
];


const PopularServiceProviders = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.midContent}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.desc}>{item.desc}</Text>

        <View style={styles.ratingRow}>
          {[...Array(5)].map((_, i) => (
            <FontAwesome
              key={i}
              name="star"
              size={14}
              color={i < Math.floor(item.rating) ? "#FFD700" : "#E0E0E0"}
            />
          ))}
        </View>
      </View>

      <View style={styles.priceWrapper}>
        <Text style={styles.starting}>Starting</Text>
        <View style={styles.priceTag}>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Service Providers</Text>

      <FlatList
        data={providers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PopularServiceProviders;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: colors.textDark,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 14,
    marginBottom: 14,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 12,
  },
  midContent: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.textDark,
  },
  desc: {
    fontSize: 12,
    color: "#777",
    marginVertical: 3,
  },
  ratingRow: {
    flexDirection: "row",
  },
  priceWrapper: {
    alignItems: "flex-end",
  },
  starting: {
    fontSize: 12,
    color: "#555",
    marginBottom: 4,
  },
  priceTag: {
    backgroundColor: "#DFFFE4",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  price: {
    color: "green",
    fontWeight: "700",
  },
});
