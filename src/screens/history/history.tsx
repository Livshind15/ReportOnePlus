import React, { useContext, useState } from "react";
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
import MenuModal from "../../components/menu";
import { AppContext } from "../../context/context";
import CalenderSlider, { addMonths } from "../../components/calenderSlider";
import Calender from "../../components/calender";
import CalenderModal from "../../components/calenderModal";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
  },
  calenderSliderView: {
    height: 65,
  },
});

export default ({ navigation }: any) => {
  const [date, setDate] = useState(new Date(Date.now()));
  const [calenderModal, setCalenderModal] = useState(false);
  return (
    <Background color={"#FFFFFF"}>
      <CalenderModal
        visible={calenderModal}
        setVisible={() => setCalenderModal(false)}
      />
      <View style={styles.root}>
        <View style={styles.calenderSliderView}>
          <CalenderSlider date={date} onDateChange={setDate} />
        </View>
        <Calender
          onNextMonth={() => {
            if (
              new Date(Date.now()).getFullYear() === date.getFullYear() &&
              date.getMonth() === new Date(Date.now()).getMonth()
            ) {
              return;
            } else {
              setDate(() => new Date(addMonths(date, 1)));
            }
          }}
          onPrevMonth={() => setDate(() => new Date(addMonths(date, -1)))}
          month={date.getMonth() + 1}
          onDaySelect={() => {
            setCalenderModal(true)
          }}
          year={date.getFullYear()}
        />
      </View>
    </Background>
  );
};
