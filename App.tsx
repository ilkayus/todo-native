import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TaskInput, TaskList } from "./components";

export default function App() {
  const [taskItems, setTaskItems] = useState<{ text: string; key: string }[]>(
    []
  );

  const addTaskHandler = (task: string) => {
    setTaskItems((prevTaskItems) => [
      { text: task, key: Math.random().toString() },
      ...prevTaskItems,
    ]);
  };

  const removeTaskHandler = (key: string) => {
    setTaskItems((prevTaskItems) => {
      return prevTaskItems.filter((task) => task.key !== key);
    });
  };

  return (
    <View style={styles.appContainer}>
      <TaskInput addTaskHandler={addTaskHandler} />
      <TaskList taskItems={taskItems} removeTask={removeTaskHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: "column-reverse",
    height: "100%",
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#ccc",
  },
});
