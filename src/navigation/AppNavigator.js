import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* ---------- CONTEXT ---------- */
import { LocationProvider } from "../screens/LocationContext";

/* ---------- AUTH SCREENS ---------- */
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignupScreen from "../screens/Auth/SignupScreen";
import OtpLoginScreen from "../screens/OtpLoginScreen";

/* ---------- MAIN NAV ---------- */
import TabNavigator from "./TabNavigator";

/* ---------- HOME / GENERAL ---------- */
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ServiceDetailScreen from "../screens/ServiceDetailScreen";
import ServiceListScreen from "../screens/ServiceListScreen";
import ExploreScreen from "../screens/ExploreScreen";

/* ---------- ORDERS ---------- */
import BooknowScreen from "../screens/Orders/BooknowScreen";
import BookingHistory from "../screens/Orders/BookingHistory";
import BookingOffer from "../screens/Orders/BookingOffer";

/* ---------- STORE / COMM ---------- */
import StoreServicesScreen from "../screens/StoreServicesScreen";
import CallsScreen from "../screens/CallsScreen";
import ChatsScreen from "../screens/ChatsScreen";

/* ---------- PROFILE ---------- */
import ProfileScreen from "../screens/Profile/ProfileScreen";
import Editprofile from "../screens/Profile/Editprofile";
import AddVehical from "../screens/Profile/AddVehical";

/* ---------- MORE ---------- */
import MoreScreen from "../screens/Profile/ProfileScreen";
import SettingsScreen from "../screens/More/SettingsScreen";
import TermsScreen from "../screens/More/TermsScreen";
import PrivacyScreen from "../screens/More/PrivacyScreen";
import RateUsScreen from "../screens/More/RateUsScreen";
import FaqsScreen from "../screens/More/FaqsScreen";
import ContactUsScreen from "../screens/More/ContactUsScreen";
import CommonHeader from "../screens/More/CommonHeader";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <LocationProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false }}
        >
          {/* ---------- AUTH ---------- */}
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="OtpLogin" component={OtpLoginScreen} />

          {/* ---------- MAIN TABS ---------- */}
          <Stack.Screen name="Main" component={TabNavigator} />

          {/* ---------- HOME ---------- */}
          <Stack.Screen name="Home" component={HomeScreen} />

          {/* ---------- GENERAL ---------- */}
          <Stack.Screen name="Notification" component={NotificationScreen} />
          <Stack.Screen name="ServiceDetails" component={ServiceDetailScreen} />
          <Stack.Screen name="Servicelist" component={ServiceListScreen} />
          <Stack.Screen name="Explore" component={ExploreScreen} />

          {/* ---------- ORDERS ---------- */}
          <Stack.Screen name="Booknow" component={BooknowScreen} />
          <Stack.Screen name="BookingHistory" component={BookingHistory} />
          <Stack.Screen name="BookingOffer" component={BookingOffer} />

          {/* ---------- STORE / COMM ---------- */}
          <Stack.Screen name="StoreServices" component={StoreServicesScreen} />
          <Stack.Screen name="Calls" component={CallsScreen} />
          <Stack.Screen name="Chats" component={ChatsScreen} />

          {/* ---------- PROFILE ---------- */}
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Editprofile" component={Editprofile} />
          <Stack.Screen name="AddVehical" component={AddVehical} />

          {/* ---------- MORE ---------- */}
          <Stack.Screen name="More" component={MoreScreen} />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
          <Stack.Screen name="FaqScreen" component={FaqsScreen} />
          <Stack.Screen name="ContactScreen" component={ContactUsScreen} />
          <Stack.Screen name="TermsScreen" component={TermsScreen} />
          <Stack.Screen name="PrivacyScreen" component={PrivacyScreen} />
          <Stack.Screen name="RateUsScreen" component={RateUsScreen} />
          <Stack.Screen name="CommonHeader" component={CommonHeader} />
        </Stack.Navigator>
      </NavigationContainer>
    </LocationProvider>
  );
};

export default AppNavigator;
