import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";

export default function PickerTestScreen() {
  const router = useRouter();
  const [language, setLanguage] = useState("Javascript");

  return (
    <View style={styles.container}>
      <Text> Picker Test</Text>

      <Picker
        style={styles.picker}
        selectedValue={language}
        onValueChange={(value) => setLanguage(value)}
      >
        <Picker.Item label="Javascript" value="Javascript" />
        <Picker.Item label="Python" value="Python" />
        <Picker.Item label="C#" value="C#" />
      </Picker>

      <Text style={styles.result}>Selected language is {language}</Text>

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

  picker: {
    width: "100%",
  },

  result: {
    fontSize: 20,
  },
});
