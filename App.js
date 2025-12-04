import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
      await SplashScreen.hideAsync();  // hide instantly
    };
    prepare();
  }, []);

  return <AppNavigator />;
}
