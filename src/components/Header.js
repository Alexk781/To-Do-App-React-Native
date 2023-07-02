import React from "react";
import { Text, View } from "react-native";
const Header = (props) => {
  return (
    <View style={{ marginLeft: 15 }}>
      <Text style={{ fontWeight: "bold", fontSize: 22 }}>{props.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 70,
    paddingHorizontal: 30,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  items: {},
});

export default Header;
