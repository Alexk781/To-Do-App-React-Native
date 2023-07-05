import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CheckBox from "react-native-check-box";
export const CheckSquare = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View>
      <CheckBox
        isChecked={isChecked}
        onClick={() => setIsChekced(isChecked)}
        rightText="Homework"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 100,
    paddingHorizontal: 60,
  },
  rightTextStyle: {
    fontWeight: "bold",
    fontSize: 19,
  },
  items: {},
});
