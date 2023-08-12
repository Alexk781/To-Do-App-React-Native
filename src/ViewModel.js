import { MyView } from "./View";
import React, { useState } from "react";
export const ViewModel = (prop) => {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    let itemsCopy = [...taskItems];
    itemsCopy.push(task);
    setTaskItems(itemsCopy);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <MyView
      task={task}
      Function1={completeTask}
      Function2={handleAddTask}
      taskItems={taskItems}
      setTask={setTask}
    ></MyView>
  );
};
