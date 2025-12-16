import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../constants/colors";
import CommonHeader from "./More/CommonHeader";

const StoreServicesScreen = () => {
    const navigation = useNavigation();

    return (
        <>
            <CommonHeader title={"Change Place"} />

            <ScrollView
                style={styles.container}
                contentContainerStyle={{ paddingBottom: 30 }}
                showsVerticalScrollIndicator={false}
            >
                {/* HEADER */}

                {/* MAIN CARD */}
                <View style={styles.card}>
                    {/* STORE ID */}
                    <Text style={styles.cardTopText}>
                        CAR STORE ID • 10101011586822
                    </Text>

                    {/* PRIMARY SERVICE (LIKE AIRTEL BLACK) */}
                    <View style={styles.mainServiceRow}>
                        <View style={styles.mainIcon}>
                            <Ionicons
                                name="car-sport-outline"
                                size={22}
                                color={colors.primary}
                            />
                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={styles.mainTitle}>Car Store Premium</Text>
                            <Text style={styles.mainSub}>
                                2 active vehicles connected
                            </Text>
                        </View>

                        <Ionicons
                            name="chevron-forward"
                            size={18}
                            color={colors.gray}
                        />
                    </View>

                    {/* BILL INFO */}
                    <Text style={styles.billText}>
                        14 days left for next service
                    </Text>

                    <View style={styles.divider} />

                    {/* POSTPAID STYLE – CAR SERVICE */}
                    <TouchableOpacity
                        style={styles.serviceRow}
                        onPress={() => navigation.navigate("Bookings")}
                    >
                        <View style={styles.iconCircle}>
                            <Ionicons
                                name="calendar-outline"
                                size={18}
                                color={colors.primary}
                            />
                        </View>

                        <View style={styles.serviceInfo}>
                            <Text style={styles.serviceTitle}>Scheduled Services</Text>
                            <Text style={styles.serviceSub}>
                                3 upcoming • 1 pending
                            </Text>
                        </View>

                        <Ionicons
                            name="chevron-forward"
                            size={18}
                            color={colors.gray}
                        />
                    </TouchableOpacity>

                    {/* DTH STYLE – CAR SUPPORT */}
                    <TouchableOpacity
                        style={styles.serviceRow}
                        onPress={() => navigation.navigate("Calls")}
                    >
                        <View style={styles.iconCircle}>
                            <Ionicons
                                name="call-outline"
                                size={18}
                                color={colors.primary}
                            />
                        </View>

                        <View style={styles.serviceInfo}>
                            <Text style={styles.serviceTitle}>Support Calls</Text>
                            <Text style={styles.serviceSub}>
                                24×7 assistance • 128 calls
                            </Text>
                        </View>

                        <Ionicons
                            name="chevron-forward"
                            size={18}
                            color={colors.gray}
                        />
                    </TouchableOpacity>

                    {/* CHAT */}
                    <TouchableOpacity
                        style={styles.serviceRow}
                        onPress={() => navigation.navigate("Chats")}
                    >
                        <View style={styles.iconCircle}>
                            <Ionicons
                                name="chatbubble-ellipses-outline"
                                size={18}
                                color={colors.primary}
                            />
                        </View>

                        <View style={styles.serviceInfo}>
                            <Text style={styles.serviceTitle}>Service Chats</Text>
                            <Text style={styles.serviceSub}>
                                54 unread messages
                            </Text>
                        </View>

                        <Ionicons
                            name="chevron-forward"
                            size={18}
                            color={colors.gray}
                        />
                    </TouchableOpacity>

                    {/* ACTION BUTTONS */}
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.outlineBtn}>
                            <Text style={styles.outlineText}>Change Plan</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.primaryBtn}
                            onPress={() => navigation.navigate("StoreServices")}
                        >
                            <Text style={styles.primaryText}>Manage Services</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default StoreServicesScreen;

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 16,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 14,
    },

    headerTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: colors.textDark,
    },

    card: {
        backgroundColor: colors.textLight,
        borderRadius: 20,
        padding: 16,
    },

    cardTopText: {
        fontSize: 12,
        color: colors.textSecondary,
        marginBottom: 12,
        fontWeight: "600",
    },

    mainServiceRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },

    mainIcon: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "#EAF0FF",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    mainTitle: {
        fontSize: 15,
        fontWeight: "700",
        color: colors.textDark,
    },

    mainSub: {
        fontSize: 12,
        color: colors.textSecondary,
        marginTop: 2,
    },

    billText: {
        fontSize: 14,
        fontWeight: "700",
        color: colors.textDark,
        marginVertical: 12,
    },

    divider: {
        height: 1,
        backgroundColor: "#E5E7EB",
        marginBottom: 6,
    },

    serviceRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
    },

    iconCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#EAF0FF",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    serviceInfo: {
        flex: 1,
    },

    serviceTitle: {
        fontSize: 14,
        fontWeight: "600",
        color: colors.textDark,
    },

    serviceSub: {
        fontSize: 12,
        color: colors.textSecondary,
        marginTop: 2,
    },

    buttonRow: {
        flexDirection: "row",
        gap: 12,
        marginTop: 16,
    },

    outlineBtn: {
        flex: 1,
        borderWidth: 1,
        borderColor: colors.textDark,
        borderRadius: 22,
        paddingVertical: 10,
        alignItems: "center",
    },

    outlineText: {
        fontSize: 13,
        fontWeight: "600",
        color: colors.textDark,
    },

    primaryBtn: {
        flex: 1,
        backgroundColor: "#000",
        borderRadius: 22,
        paddingVertical: 10,
        alignItems: "center",
    },

    primaryText: {
        fontSize: 13,
        fontWeight: "600",
        color: "#fff",
    },
});
