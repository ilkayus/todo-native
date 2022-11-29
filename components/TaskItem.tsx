import { StyleSheet, View, Text, Pressable } from "react-native";

type Props = {
  data: { text: string; key: string };
  removeTask: (key: string) => void;
};

const TaskItem = ({ data, removeTask }: Props) => {
  return (
    <View style={styles.taskItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={removeTask.bind(this, data.key)}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.taskText}>{data.text}</Text>
      </Pressable>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    margin: 4,
    borderRadius: 8,
    backgroundColor: "#333333",
  },
  pressed: {
    opacity: 0.5,
  },
  taskText: {
    padding: 8,
    color: "#fff",
  },
});
