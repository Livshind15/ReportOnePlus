/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Home from "../screens/home/home";
import History from "../screens/history/history";
import menuBtn from "../assets/menuBtn.png";
import { useContext } from "react";
import { AppContext } from "../context/context";

const styles = StyleSheet.create({
  menuImage: {
    width: 50,
  },
  headerLeft: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Stack = createStackNavigator();

const RootNavigator = () => {
  const options = {
    headerLeft: MenuButton,
    headerShown: true,
    title: `דו"ח 1`,
    headerStyle: {
      backgroundColor: "#F4E468",
      height: 65,
      elevation:12
    },
    headerTitleAlign: "center",
    headerTintColor: "#333333",
    headerTitleStyle: {
      alignSelf: "center",
      fontSize: 26,
      fontFamily: "NarkisBlockCon",
    },
  };
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen name="Commander" component={View} options={options} />
      <Stack.Screen name="Home" component={Home} options={options} />
      <Stack.Screen name="History" component={History} options={options} />
      <Stack.Screen name="Setting" component={View} options={options} />
      <Stack.Screen name="Logout" component={View} options={options} />
    </Stack.Navigator>
  );
};

const MenuButton = () => {
  const { menuOpen, setMenu } = useContext(AppContext);

  return (
    <TouchableOpacity
      onPress={() => {
        setMenu(!menuOpen);
      }}
      style={styles.headerLeft}
    >
      <Image resizeMode={"center"} style={styles.menuImage} source={menuBtn} />
    </TouchableOpacity>
  );
};

export default RootNavigator;
