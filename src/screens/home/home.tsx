import React, { useContext } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Linking,
  ScrollView,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Background from "../../components/background";
import banana from "../../assets/banana.png";
import MenuModal from "../../components/menu";
import { AppContext } from "../../context/context";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
  },
  welcomeTextView: {
    paddingTop: 20,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontFamily: "assistant600",
    fontSize: 20,
    color: "#333",
  },
  body: {
    flex: 1,
    alignItems: "center",
    paddingTop: 45,
  },
  round: {
    width: 220,
    height: 220,
    elevation: 3,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  bananaImage: {
    width: 95,
  },
  text: {
    fontFamily: "assistant700",
    fontSize: 14,
    color: "#333",
  },
});

export default ({ navigation }: any) => {
  const { menuOpen, setMenu } = useContext(AppContext);
  return (
    <Background>
      <MenuModal
        navigation={navigation}
        visible={menuOpen}
        setVisible={() => setMenu(false)}
      />
      <View style={styles.root}>
        <View style={styles.welcomeTextView}>
          <Text style={styles.welcomeText}>שלום, דניאל</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.round}>
            <Image
              resizeMode={"contain"}
              source={banana}
              style={styles.bananaImage}
            />
            <Text style={styles.text}>לא ניתן לשלוח דיווח אחרי</Text>
            <Text style={styles.text}>11:15</Text>
          </View>
        </View>
      </View>
    </Background>
  );
};
