import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../constants/colors";

const reviews = [
    { id: 1, name: "John Doe", review: "Excellent service! My car looks brand new.", rating: 5 },
    { id: 2, name: "Jane Smith", review: "Great job! Will definitely return.", rating: 4 },
    { id: 3, name: "Michael Brown", review: "Best car wash in town!", rating: 5 },
    { id: 4, name: "Emily Davis", review: "Very good, but a bit slow service.", rating: 4 },
    { id: 5, name: "Chris Wilson", review: "Highly recommend this place!", rating: 5 },
];


const ServiceDetailScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={20} color={colors.textLight} />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.content}>

                {/* Banner Image */}
                <Image
                    source={require("../../assets/Image/provider/p1.jpg")}
                    style={styles.banner}
                />

                {/* Title */}
                <View style={styles.row}>
                    <Ionicons name="car" size={20} color={colors.primary} />
                    <Text style={styles.title}>Crystal Clear Car Wash</Text>
                </View>
                {/* Address */}
                <View style={styles.row}>
                    <Ionicons name="location-outline" size={18} color={colors.primary} />
                    <Text style={styles.address}>102 Ocean Avenue, New York, USA</Text>
                </View>

                {/* Rating */}
                <View style={[styles.row, { marginTop: 4 }]}>
                    {[...Array(5)].map((_, i) => (
                        <FontAwesome key={i} name="star" size={16} color={i < 4 ? "#FFD700" : "#E0E0E0"} />
                    ))}
                    <Text style={styles.reviewText}>(545 reviews)</Text>
                </View>

                {/* About Section */}
                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.aboutText}>
                    Exterior Wash - Quick exterior cleaning with soap, water, and drying.
                </Text>

                {/* Gallery */}
                <Text style={styles.sectionTitle}>Gallery</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 5 }}>
                    <Image source={require("../../assets/Image/gallery/g1.jpg")} style={styles.galleryImg} />
                    <Image source={require("../../assets/Image/gallery/g2.jpg")} style={styles.galleryImg} />
                    <Image source={require("../../assets/Image/gallery/g3.jpg")} style={styles.galleryImg} />
                </ScrollView>

                {/* Customer Reviews */}
                {/* Customer Reviews */}
                <Text style={styles.sectionTitle}>Customer Reviews</Text>

                {reviews.map((item) => (
                    <View key={item.id} style={styles.reviewListCard}>

                        <View style={styles.reviewTopRow}>
                            <Text style={styles.emoji}>😊</Text>
                            <Text style={styles.reviewUser}>{item.name}</Text>

                            <View style={styles.starRow}>
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesome
                                        key={i}
                                        name="star"
                                        size={15}
                                        color={i < item.rating ? "#FFD700" : "#E0E0E0"}
                                    />
                                ))}
                            </View>
                        </View>

                        <Text style={styles.reviewComment}>{item.review}</Text>

                    </View>
                ))}

            </ScrollView>

            {/* Book Button */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.bookBtn}>
                    <Text style={styles.bookText}>Book Service Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ServiceDetailScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },

    backButton: {
        position: "absolute",
        top: 30,
        left: 15,
        zIndex: 100,
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: 8,
        borderRadius: 30,
    },

    banner: { width: "100%", height: 200 },

    content: { padding: 15 },

    title: { fontSize: 22, fontWeight: "700", marginBottom: 8, color: colors.textDark, marginTop: 15 },

    row: { flexDirection: "row", alignItems: "center", },

    address: { fontSize: 14, marginLeft: 6, color: colors.textSecondary },

    reviewText: { marginLeft: 6, fontSize: 13, color: colors.textSecondary },

    sectionTitle: { marginTop: 18, fontSize: 18, fontWeight: "700", color: colors.textDark },

    aboutText: { fontSize: 14, color: colors.textSecondary, marginTop: 6, lineHeight: 20 },

    galleryImg: { width: 120, height: 90, borderRadius: 10, marginRight: 10 },

    reviewListCard: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#eee",
        elevation: 2,
    },

    reviewTopRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    emoji: { fontSize: 22 },

    reviewUser: {
        flex: 1,
        marginLeft: 10,
        fontSize: 15,
        fontWeight: "700",
        color: colors.textDark,
    },

    starRow: {
        flexDirection: "row",
    },

    reviewComment: {
        marginTop: 5,
        fontSize: 13,
        color: colors.textSecondary,
        lineHeight: 18,
    },

    footer: { padding: 15, backgroundColor: "#fff", elevation: 10 },

    bookBtn: {
        backgroundColor: colors.primary,
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
    },

    bookText: { fontSize: 18, fontWeight: "700", color: colors.textLight },
});
