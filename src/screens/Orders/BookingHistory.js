import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
  Modal,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import colors from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

/* ---------------- BOOKINGS DATA ---------------- */
const INITIAL_BOOKINGS = [
  {
    id: 1,
    service: "Exterior Wash",
    name: "Crystal Clear Car Wash",
    date: "2025-01-12",
    displayDate: "12 Jan 2025",
    time: "4:30 PM",
    status: "Completed",
    distance: "1.2 km",
    image: require("../../../assets/Image/provider/p1.jpg"),
  },
  {
    id: 2,
    service: "Interior Wash",
    name: "Prestige Auto Spa",
    date: "2025-01-20",
    displayDate: "20 Jan 2025",
    time: "10:00 AM",
    status: "Upcoming",
    distance: "3.4 km",
    image: require("../../../assets/Image/provider/p3.jpg"),
  },
  {
    id: 3,
    service: "Foam Wash",
    name: "Aquashine Car Wash",
    date: "2025-01-05",
    displayDate: "05 Jan 2025",
    time: "02:15 PM",
    status: "Cancelled",
    distance: "2.1 km",
    image: require("../../../assets/Image/provider/p2.jpg"),
  },
];

const BookingHistory = () => {
  const navigation = useNavigation();

  const [bookingList, setBookingList] = useState(INITIAL_BOOKINGS);
  const [filterVisible, setFilterVisible] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  /* ---------------- FILTERED BOOKINGS ---------------- */
  const filteredBookings = selectedDate
    ? bookingList.filter((b) => b.date === selectedDate)
    : bookingList;

  /* ---------------- DELETE ALL ---------------- */
  const deleteAllBookings = () => {
    Alert.alert(
      "Delete All Bookings",
      "Are you sure you want to delete all booking history?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => setBookingList([]),
        },
      ]
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      {/* HEADER GRADIENT */}
      <LinearGradient
        colors={[colors.primary, "#4ca3ff"]}
        style={styles.headerGradient}
      />

      <SafeAreaView style={{ flex: 1 }}>
        {/* HEADER */}
        <View style={styles.headerArea}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Booking History</Text>

          {/* FILTER ICON */}
          <TouchableOpacity onPress={() => setFilterVisible(true)}>
            <Ionicons name="filter-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* CONTENT */}
        {filteredBookings.length === 0 ? (
          /* EMPTY STATE (CENTERED) */
          <View style={styles.emptyContainer}>
            <Ionicons
              name="calendar-outline"
              size={52}
              color="#9CA3AF"
            />
            <Text style={styles.emptyText}>No booking history</Text>
          </View>
        ) : (
          /* BOOKINGS LIST */
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            {filteredBookings.map((item) => (
              <View key={item.id} style={styles.card}>
                <Image source={item.image} style={styles.cardImg} />

                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.service}>{item.service}</Text>

                  <View style={styles.row}>
                    <Ionicons name="calendar-outline" size={16} color="#666" />
                    <Text style={styles.infoText}>
                      {item.displayDate} | {item.time}
                    </Text>
                  </View>

                  <View style={styles.row}>
                    <Entypo
                      name="location-pin"
                      size={18}
                      color={colors.primary}
                    />
                    <Text style={[styles.infoText, styles.distance]}>
                      {item.distance}
                    </Text>
                  </View>
                </View>

                <View
                  style={[
                    styles.statusBox,
                    item.status === "Completed"
                      ? styles.completed
                      : item.status === "Upcoming"
                      ? styles.upcoming
                      : styles.cancelled,
                  ]}
                >
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        )}
      </SafeAreaView>

      {/* FILTER MENU */}
      <Modal visible={filterVisible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.filterOverlay}
          activeOpacity={1}
          onPress={() => setFilterVisible(false)}
        >
          <View style={styles.filterBox}>
            {/* DATE FILTER */}
            <TouchableOpacity
              style={styles.filterItem}
              onPress={() => {
                setFilterVisible(false);
                setCalendarVisible(true);
              }}
            >
              <Ionicons
                name="calendar-outline"
                size={18}
                color={colors.primary}
              />
              <Text style={styles.filterText}>Filter by Date</Text>
            </TouchableOpacity>

            {/* CLEAR FILTER */}
            <TouchableOpacity
              style={styles.filterItem}
              onPress={() => {
                setSelectedDate(null);
                setFilterVisible(false);
              }}
            >
              <Ionicons
                name="close-circle-outline"
                size={18}
                color="#555"
              />
              <Text style={styles.filterText}>Clear Filter</Text>
            </TouchableOpacity>

            {/* DELETE ALL */}
            <TouchableOpacity
              style={styles.filterItem}
              onPress={() => {
                setFilterVisible(false);
                deleteAllBookings();
              }}
            >
              <Ionicons
                name="trash-outline"
                size={18}
                color="#FF3B30"
              />
              <Text style={[styles.filterText, { color: "#FF3B30" }]}>
                Delete All
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* CALENDAR MODAL */}
      <Modal visible={calendarVisible} transparent animationType="fade">
        <View style={styles.calendarOverlay}>
          <View style={styles.calendarBox}>
            <TouchableOpacity
              style={styles.closeIcon}
              onPress={() => setCalendarVisible(false)}
            >
              <Ionicons name="close" size={22} />
            </TouchableOpacity>

            <Calendar
              onDayPress={(day) => {
                setSelectedDate(day.dateString);
                setCalendarVisible(false);
              }}
              markedDates={
                selectedDate
                  ? {
                      [selectedDate]: {
                        selected: true,
                        selectedColor: colors.primary,
                      },
                    }
                  : {}
              }
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BookingHistory;

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
  headerGradient: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: Platform.OS === "android" ? StatusBar.currentHeight + 110 : 130,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  headerArea: {
    paddingHorizontal: 18,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    flex: 1,
    textAlign: "center",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  emptyText: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "700",
    color: "#9CA3AF",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginTop: 15,
    padding: 12,
    borderRadius: 14,
    elevation: 5,
    alignItems: "center",
  },

  cardImg: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },

  title: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.textDark,
  },

  service: {
    fontSize: 12,
    color: "#777",
    marginBottom: 4,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  infoText: {
    fontSize: 13,
    marginLeft: 4,
    color: "#555",
  },

  distance: {
    color: colors.primary,
    fontWeight: "700",
  },

  statusBox: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#fff",
  },

  completed: { backgroundColor: "green" },
  upcoming: { backgroundColor: "#FFA500" },
  cancelled: { backgroundColor: "#FF3B30" },

  filterOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 100,
    paddingRight: 16,
  },

  filterBox: {
    backgroundColor: "#fff",
    width: 200,
    borderRadius: 12,
    elevation: 6,
  },

  filterItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 14,
  },

  filterText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textDark,
  },

  calendarOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  calendarBox: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
  },

  closeIcon: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 10,
  },
});
