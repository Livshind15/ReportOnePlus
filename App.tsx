import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { I18nManager, View } from "react-native";
import RNRestart from "react-native-restart";
import RootNavigator from "./src/navigations/rootNavigator";
import { AppProvider } from "./src/context/context";

export default function App() {
  useEffect(() => {
    I18nManager.forceRTL(true);
    !I18nManager.isRTL && RNRestart.Restart();
  }, []);
  return (
    <>
      <SafeAreaProvider
        initialMetrics={initialWindowMetrics}
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <NavigationContainer>
          <AppProvider>
            <RootNavigator />
          </AppProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
