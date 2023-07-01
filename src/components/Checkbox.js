import { View, Text } from "react-native";
import React from "react";
import CheckBox from "react-native-check-box";
  const [isChecked, setIsChekced] = useState(false) => {
  return (
    <View>
      <CheckBox
        isChecked={isChecked}
        onClick={() => setIsChekced(isChecked)}
        rightText="Homework"
      />
    </View>
  );
}
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
export default CheckBox;