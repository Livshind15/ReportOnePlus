/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  round: {
    width: 33,
    height: 33,
    borderRadius: 100,
    backgroundColor: "#e5edf7",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "assistant700",
    fontSize: 18,
    color: "#333",
  },
});

export function addMonths(date: Date, months: number) {
  const d = date.getDate();
  date.setMonth(date.getMonth() + +months);
  if (date.getDate() !== d) {
    date.setDate(0);
  }
  return date;
}

const mouths = [
  "ינואר",
  "פברואר",
  "מרץ",
  "אפריל",
  "מאי",
  "יוני",
  "יולי",
  "אוגוסט",
  "ספטמבר",
  "אוקטובר",
  "נובמבר",
  "דצמבר",
];

export interface ICalenderSliderProps {
  date: Date;
  onDateChange: (date: Date) => void;
}

const CalenderSlider = ({ date, onDateChange }: ICalenderSliderProps) => {
  const [nextDisable, setNextDisable] = useState(false);
  return (
    <View style={styles.root}>
      <View style={[styles.round]}>
        <TouchableOpacity
          onPress={() => {
            setNextDisable(false);
            onDateChange(new Date(addMonths(date, -1)));
          }}
        >
          <MaterialIcons
            size={30}
            color={"#333333"}
            name={"keyboard-arrow-right"}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>{`${
        mouths[date.getMonth()]
      } ${date.getFullYear().toString()}`}</Text>
      <View
        style={[
          styles.round,
          nextDisable ? { backgroundColor: "#F3F6FB" } : {},
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            if (
              new Date(Date.now()).getFullYear() === date.getFullYear() &&
              date.getMonth() === new Date(Date.now()).getMonth()
            ) {
              setNextDisable(true);
            } else {
              const nextMonth = new Date(addMonths(date, +1));
              onDateChange(nextMonth);
            }
          }}
        >
          <MaterialIcons
            size={30}
            color={nextDisable ? "#9E9E9F" : "#333333"}
            name={"keyboard-arrow-left"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CalenderSlider;
