import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  text: string;
  onPress: () => void;
};

export default function MyButton({ text, onPress }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightblue",
    padding: 13,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
