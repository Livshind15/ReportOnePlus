import React from "react";
import {
  Modal,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import SwiperFlatList from "react-native-swiper-flatlist";

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modal: {
    flex: 1,
    width: "100%",
  },
  innerView: {
    width: "85%",
    height: 320,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#F5F5F5",
  },
  closeView: {
    width: 50,
    height: 50,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 5,
    top: 2,
    zIndex: 5,
  },
  slider: {
    width: "100%",
    height: 60,
    position: "absolute",
  },
});

export interface ICalenderModalProps {
  visible: boolean;
  setVisible: () => void;
}

const CalenderModal = ({ visible, setVisible }: ICalenderModalProps) => {
  return (
    <Modal
      style={styles.modal}
      animationType="fade"
      transparent
      statusBarTranslucent
      onRequestClose={setVisible}
      visible={visible}
    >
      <TouchableWithoutFeedback
        onPress={() => {}}
        style={{
          flex: 1,
          height: "100%",
          width: "100%",
        }}
      >
        <View style={styles.root}>
          <View style={styles.innerView}>
            <TouchableOpacity style={styles.closeView}>
              <AntDesign size={22} color={"#494949"} name={"close"} />
            </TouchableOpacity>
            <View style={styles.slider}></View>
            <SwiperFlatList
              data={["a", "b", "d"]}
              showPagination
              renderItem={() => {
                return (
                  <View
                    style={{
                      backgroundColor: "red",
                      width: 200,
                      height: 320,
                    }}
                  >
                    <Text>sdsdsd</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CalenderModal;
