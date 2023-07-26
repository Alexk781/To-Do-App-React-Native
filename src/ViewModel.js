import { Component } from "react";
import { MyView } from "./View";
import React, { useState } from "react";
import { ToDo } from "./components/ToDo";
export const ViewModel = (prop) => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const completeTask = (index) => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index, 1);
  setTaskItems(itemsCopy);
  return (
    <MyView
      task={task}
      Function1={completeTask}
      Funtion2={handleAddTask}
    ></MyView>
  );
};
