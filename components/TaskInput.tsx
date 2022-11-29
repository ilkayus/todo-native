import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

type Props = {
  addTaskHandler: (task: string) => void;
};

const TaskInput = ({ addTaskHandler }: Props) => {
  const [task, setTask] = useState("");

  const inputHandler = (text: string) => {
    setTask(text);
  };

  const addTaskButtonHandler = () => {
    if (task.trim().length < 1) return;
    addTaskHandler(task);
    setTask("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Task tracker.."
        value={task}
        onChangeText={inputHandler}
      />
      <Button color="#333333" title="Add Task" onPress={addTaskButtonHandler} />
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  textInput: {
    width: "70%",
    margin: 8,
    padding: 8,
    borderBottomColor: "#333333",
    borderWidth: 1,
  },
});
