import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";

const BannerSlider = () => {
  const navigation = useNavigation();

  // 🔹 LAST PLAN DETAILS (can come from API)
  const plan = {
    name: "Premium Car Care",
    price: 4999,
    validity: "1 Year",
    expiryDate: "15 Aug 2025",
    status: "expired", // "active" | "expired"
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        {/* ================= LEFT : PLAN DETAILS ================= */}
        <View style={[styles.card, styles.largeCard]}>
          <Text style={styles.cardTitle}>MY CAR PLAN</Text>

          {/* PLAN NAME */}
          <Text style={styles.planName}>{plan.name}</Text>

          {/* PRICE + VALIDITY */}
          <Text style={styles.planPrice}>
            ₹{plan.price} • {plan.validity}
          </Text>

          {/* STATUS */}
          {plan.status === "active" ? (
            <Text style={styles.activeText}>
              Next service in 30 days
            </Text>
          ) : (
            <>
              <Text style={styles.expiredText}>
                Expired on {plan.expiryDate}
              </Text>

              <View style={styles.expiredRow}>
                <Ionicons
                  name="alert-circle-outline"
                  size={14}
                  color="#D32F2F"
                />
                <Text style={styles.expiredHint}>
                  Renew to continue car services
                </Text>
              </View>
            </>
          )}

          {/* BUTTON ALWAYS AT BOTTOM */}
          {plan.status === "expired" && (
            <TouchableOpacity
              style={styles.outlineBtnBottom}
              onPress={() => navigation.navigate("StoreServices")}
            >
              <Text style={styles.outlineText}>Book Now</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* ================= RIGHT : PLANS & PROMOTIONS ================= */}
        <View style={styles.rightColumn}>
          {/* PLANS */}
          <TouchableOpacity style={styles.card}>
            <View style={styles.rowInline}>
              <Ionicons
                name="shield-checkmark-outline"
                size={20}
                color={colors.primary}
              />
              <Text style={styles.planTitle}>Plans</Text>
            </View>

            <Text style={styles.cardMain}>Upgrade to Premium+</Text>
            <Text style={styles.cardSub}>
              Extended warranty & roadside assist
            </Text>

            <Text style={styles.link}>View Plans</Text>
          </TouchableOpacity>

          {/* PROMOTIONS */}
          <TouchableOpacity style={styles.card}>
            <View style={styles.rowInline}>
              <Ionicons
                name="pricetag-outline"
                size={20}
                color={colors.secondary}
              />
              <Text style={styles.planTitle}>Offers</Text>
            </View>

            <Text style={styles.cardMain}>Flat 20% Off</Text>
            <Text style={styles.cardSub}>
              On full car servicing
            </Text>

            <Text style={styles.link}>View Offers</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BannerSlider;

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    marginTop: 12,
  },

  row: {
    flexDirection: "row",
    gap: 12,
  },

  rowInline: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
  },

  largeCard: {
    flex: 1,
    paddingVertical: 18,
  },

  rightColumn: {
    flex: 1,
    gap: 12,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    flex: 1,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  cardTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.textSecondary,
    marginBottom: 6,
  },

  planTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.textSecondary,
  },

  planName: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.textDark,
  },

  planPrice: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
    fontWeight: "600",
  },

  cardMain: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.textDark,
  },

  cardSub: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 4,
  },

  activeText: {
    fontSize: 13,
    color: "#2E7D32",
    marginTop: 6,
    fontWeight: "600",
  },

  expiredText: {
    fontSize: 13,
    color: "#D32F2F",
    marginTop: 6,
    fontWeight: "600",
  },

  expiredRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },

  expiredHint: {
    fontSize: 12,
    color: "#D32F2F",
  },

  outlineBtnBottom: {
    marginTop: "auto",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 8,
    alignItems: "center",
  },

  outlineText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.primary,
  },

  link: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "600",
    color: colors.primary,
  },
});
