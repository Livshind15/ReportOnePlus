/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#F4E468",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
  },
});

export interface IBackgroundProps {
  children: any;
  color?: string;
}

const Background = ({ children, color }: IBackgroundProps) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <StatusBar translucent />
      <View
        style={{
          width: "100%",
          backgroundColor: color || "#F4E468",
        }}
      />
      <View
        style={[
          styles.background,
          {
            paddingBottom: insets.bottom,
            backgroundColor: color || "#F4E468",
          },
        ]}
      >
        {children}
      </View>
    </>
  );
};

export default Background;
