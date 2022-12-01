import { StyleSheet, View, FlatList } from "react-native";
import TaskItem from "./TaskItem";

type Props = {
  taskItems: { text: string; key: string }[];
  removeTask: (key: string) => void;
};

const TaskList = ({ taskItems, removeTask }: Props) => {
  return (
    <View style={styles.tasksContainer}>
      <FlatList
        data={taskItems}
        keyExtractor={(item) => item.key} // if property name is key, then we can use item => item or never use keyExtractor
        renderItem={(itemData) => {
          return <TaskItem data={itemData.item} removeTask={removeTask} />;
        }}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  tasksContainer: {
    flex: 5,
  },
});
