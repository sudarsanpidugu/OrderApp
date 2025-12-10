import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../constants/colors";

const services = [
  { id: 1, name: "Interior Wash", icon: "soap" },
  { id: 2, name: "Service Station", icon: "tools" },
  { id: 3, name: "Puncture Shops", icon: "wrench" },
  { id: 4, name: "Car Types", icon: "car" },
  { id: 5, name: "Oil Change", icon: "oil-can" },
  { id: 6, name: "Wheel Alignment", icon: "sync-alt" },
];

const ServicesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Services</Text>

      {/* ✅ Horizontal Scroll */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={styles.serviceItem}
              onPress={() => navigation.navigate("Servicelist", { type: service.name })}
            >
              <View style={styles.squareBox}>
                <FontAwesome5 name={service.icon} size={28} color={colors.primary} />
              </View>
              <Text style={styles.label}>{service.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textDark,
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
  },

  serviceItem: {
    alignItems: "center",
    width: 80,
    marginHorizontal: 10, 
  },

  squareBox: {
    width: 70,
    height: 70,
    backgroundColor: "#E5F2FF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.primary,
    marginBottom: 8,
  },

  label: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
    color: colors.textDark,
  },
});
