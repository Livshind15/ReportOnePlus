/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import moment from "moment";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 10,
  },
  daysHeader: {
    height: 12,
    flexDirection: "row",
  },
  matrixView: {
    flex: 1,
  },
  dayHeader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.8,
    borderLeftWidth: 0.4,
    borderRightWidth: 0.4,
    borderColor: "#dae6f3",
    height: "100%",
  },
  dayHeaderText: {
    paddingBottom: 15,
    color: "#333",
    fontFamily: "assistant600",
    fontSize: 14,
  },
  weekView: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  dayCell: {
    flex: 1,
    borderColor: "#dae6f3",
    borderWidth: 0.4,
  },
  dayText: {
    position: "absolute",
    top: 10,
    fontFamily: "assistant600",
    color: "#333",
    fontSize: 13,
  },
  selectCell: {
    borderColor: "#0386E9",
    borderWidth: 1,
  },
  innerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  content: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  dayTextDisable: {
    color: "#545E66",
  },
  dayTextContent: {
    fontSize: 12,
    fontFamily: "assistant",
    color: "#333",
    paddingBottom: 5,
    textAlign: "center",
  },
});

export interface ICalenderProps {
  month: number;
  year: number;
  onNextMonth: () => void;
  onPrevMonth: () => void;
  onDaySelect: (date: any) => void;
}

const generationMonthMatrix = (initMonth: number, year: number) => {
  const matrix = new Array(6).fill(new Array(7).fill({ dayNum: 0 }));
  const month = initMonth - 1;
  const currMonth = new Date(year, month, 2);
  const lastDay = new Date(
    new Date(currMonth.setMonth(month + 1)).setDate(0)
  ).getDate();
  const prevLastDay = new Date(
    new Date(currMonth.setMonth(month)).setDate(0)
  ).getDate();

  let offset = currMonth.getDay() - 1;
  let dayCount = 0;
  let nextMonthDayCount = 0;
  let prevLastDayCount = offset === -1 ? prevLastDay - 6 : prevLastDay - offset;
  return matrix.map((week, row) => {
    return week.map((day: any, col: number) => {
      if (lastDay > dayCount && offset === row * week.length + col) {
        offset += 1;
        dayCount += 1;
        return {
          dayNum: dayCount,
        };
      }
      if (offset === -1 && col === 6) {
        offset += 1 + 7;
        dayCount += 1;
        return {
          dayNum: dayCount,
        };
      }
      if (lastDay <= dayCount) {
        nextMonthDayCount += 1;
        return {
          dayNum: nextMonthDayCount,
          nextMouth: true,
        };
      }
      prevLastDayCount += 1;
      return {
        dayNum: prevLastDayCount,
        prevMouth: true,
      };
    });
  });
};

const days = [
  "יום א'",
  "יום ב'",
  "יום ג'",
  "יום ד'",
  "יום ה'",
  "יום ו'",
  "שבת",
];

const Calender = ({
  month,
  year,
  onNextMonth,
  onPrevMonth,
  onDaySelect,
}: ICalenderProps) => {
  const [selectedCell, setSelectedCell] = React.useState("0/0");

  const [matrix, setMatrix] = React.useState(
    new Array(6).fill(new Array(7).fill({ dayNum: 0 }))
  );
  React.useEffect(() => {
    setMatrix(generationMonthMatrix(month, year));
  }, [month, year]);

  return (
    <View style={styles.root}>
      <View style={styles.daysHeader}>
        {days.map((day, index) => (
          <View key={index} style={styles.dayHeader}>
            <Text style={styles.dayHeaderText}>{day}</Text>
          </View>
        ))}
      </View>
      <View style={styles.matrixView}>
        {matrix.map((week, row) => (
          <View key={row} style={styles.weekView}>
            {week.map((day: any, col: number) => (
              <TouchableOpacity
                onPress={() => {
                  if (day.nextMouth) {
                    onNextMonth();
                  } else if (day.prevMouth) {
                    onPrevMonth();
                  } else {
                    setSelectedCell(`${row}/${col}`);
                    onDaySelect(day.dayNum);
                  }
                }}
                key={col}
                style={[
                  styles.dayCell,
                  col < 2 ? { backgroundColor: "#F8F8F8" } : {},
                ]}
              >
                <View
                  style={[
                    styles.innerView,
                    selectedCell === `${row}/${col}` ? {} : {},
                  ]}
                >
                  <View style={styles.content}>
                    {col >= 2 ? (
                      //   <Ionicons
                      //     color={"#333"}
                      //     size={30}
                      //     name={"ios-checkmark"}
                      //   />
                      //   <Text numberOfLines={2} style={styles.dayTextContent}>
                      //     חופשה שנתית
                      //   </Text>
                      <></>
                    ) : (
                      <></>
                    )}
                  </View>
                  <Text
                    style={[
                      styles.dayText,
                      day.nextMouth || day.prevMouth
                        ? styles.dayTextDisable
                        : {},
                    ]}
                  >
                    {day.dayNum}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};
export default Calender;
