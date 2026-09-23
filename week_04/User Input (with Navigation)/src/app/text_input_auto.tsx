import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import MyButton from "../components/MyButton";

export default function TextInputAutoScreen() {
  const router = useRouter();
  const [displayText, setDisplayText] = useState("");

  return (
    <View style={styles.container}>
      <Text> Text Input using onChangeText</Text>

      <TextInput
        style={styles.input}
        placeholder="Type here..."
        onChangeText={setDisplayText}
        onSubmitEditing={(event) => setDisplayText(event.nativeEvent.text)}
      />

      <Text style={styles.result}>{displayText}</Text>

      <MyButton text="Back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
  },

  input: {
    borderWidth: 1,
    padding: 12,
    fontSize: 18,
  },
  result: {
    fontSize: 20,
  },
});
