import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../constants/colors";

const providers = [
  {
    id: "1",
    name: "Crystal Clear Car Wash",
    price: "$10",
    rating: 4.5,
    image: require("../../assets/Image/provider/p1.jpg"),
    lat: 17.421,
    long: 78.457,
  },
  {
    id: "2",
    name: "AquaShine Car Wash",
    price: "$10",
    rating: 4.2,
    image: require("../../assets/Image/provider/p2.jpg"),
    lat: 17.423,
    long: 78.459,
  },
  {
    id: "3",
    name: "Prestige Auto Spa",
    price: "$10",
    rating: 4.8,
    image: require("../../assets/Image/provider/p3.jpg"),
    lat: 17.425,
    long: 78.461,
  },
];

const ExploreScreen = () => {
  const navigation = useNavigation();

  const [region, setRegion] = useState({
    latitude: 17.422,
    longitude: 78.458,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      {/* Search Bar */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color={colors.primary} />
          <TextInput
            placeholder="Search Car Wash..."
            placeholderTextColor={colors.gray}
            style={styles.input}
          />
          <Ionicons name="locate" size={22} color={colors.primary} />
        </View>
      </View>

      {/* Map */}
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(reg) => setRegion(reg)}
      >
        {providers.map((item) => (
          <Marker
            key={item.id}
            coordinate={{ latitude: item.lat, longitude: item.long }}
            title={item.name}
          />
        ))}
      </MapView>

      {/* Provider Cards */}
      <View style={styles.bottomContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {providers.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() => navigation.navigate("ServiceDetails", { provider: item })}
            >
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.name}</Text>

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

              <Text style={styles.price}>
                Starting <Text style={styles.priceValue}>{item.price}</Text>
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ExploreScreen;


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  map: { flex: 1 },

  searchWrapper: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 15,
  },

  searchBox: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 12,
    elevation: 5,
    height: 48,
  },

  input: { flex: 1, paddingLeft: 8, fontSize: 15, color: colors.textDark },

  bottomContainer: {
    position: "absolute",
    bottom: 10,
  },

  card: {
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginHorizontal: 8,
    padding: 10,
    elevation: 6,
    shadowColor: colors.primary,
  },

  cardImage: {
    width: "100%",
    objectFit:"contain",
    height: 80,
    borderRadius: 12,
    marginBottom: 8,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.textDark,
  },

  ratingRow: {
    flexDirection: "row",
    marginVertical: 4,
  },

  price: { fontSize: 12, color: colors.textDark, marginTop: 5 },

  priceValue: { fontSize: 14, fontWeight: "800", color: "green" },
});
