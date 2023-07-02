import React from "react";
import { Text, View as MyV1ew, StyleSheet } from "react-native";
import { CheckBox } from "./components";
export const View = (props) => {
  return (
    <MyV1ew style={styles.container}>
      <MyV1ew style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>List of To Do's</Text>
        <MyV1ew style={styles.items}></MyV1ew>
      </MyV1ew>
    </MyV1ew>
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
