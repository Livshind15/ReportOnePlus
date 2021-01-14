import React from "react";
import {
  Modal,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import report from "../assets/report.png";
import logout from "../assets/logout.png";
import setting from "../assets/setting.png";
import history from "../assets/history.png";

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    flex: 1,
    width: "100%",
  },
  innerView: {
    width: Dimensions.get("screen").width + 200,
    height: "90%",
    borderBottomRightRadius: 550,
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#27253A",
    paddingHorizontal: 105,
  },
  exitView: {
    height: 50,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 15,
    width: "100%",
  },
  menuView: {
    flex: 1,
    width: "100%",
  },
  menuOption: {
    height: 72,
    width: "100%",
    margin: 1,
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  menuOptionText: {
    fontFamily: "assistant600",
    fontSize: 18,
    paddingRight: 22,
    color: "#FFF",
  },
  icon: {
    width: 30,
  },
});

const options = [
  {
    label: "כניסת מפקד",
    route: "Commander",
    icon: <Image resizeMode={"contain"} style={styles.icon} source={report} />,
  },
  {
    label: "דיווח נוכחות",
    route: "Home",
    icon: <Image resizeMode={"contain"} style={styles.icon} source={report} />,
  },
  {
    label: "היסטוריית דיווחים",
    route: "History",
    icon: <Image resizeMode={"contain"} style={styles.icon} source={history} />,
  },
  {
    label: "הגדרות",
    route: "Setting",
    icon: <Image resizeMode={"contain"} style={styles.icon} source={setting} />,
  },
  {
    label: "התנתקות",
    route: "Logout",
    icon: <Image resizeMode={"contain"} style={styles.icon} source={logout} />,
  },
];

export interface IMenuModalProps {
  visible: boolean;
  setVisible: () => void;
  navigation: any;
}

const MenuModal = ({ visible, setVisible, navigation }: IMenuModalProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      style={styles.modal}
      animationType="fade"
      transparent
      statusBarTranslucent
      onRequestClose={setVisible}
      visible={visible}
    >
      <View style={styles.root}>
        <View style={[styles.innerView, { marginTop: insets.top }]}>
          <View style={styles.exitView}>
            <TouchableOpacity onPress={setVisible}>
              <Ionicons color={"#FFFFFF"} size={32} name={"md-close"} />
            </TouchableOpacity>
          </View>
          <View style={styles.menuView}>
            {options.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate(item.route);
                    setVisible();
                  }}
                  style={styles.menuOption}
                >
                  {React.cloneElement(item.icon)}
                  <Text style={styles.menuOptionText}>{item.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MenuModal;
