import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import MyButton from "../components/MyButton";

export default function SwitchTestScreen() {
  const router = useRouter();
  const [enabled, setEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Switch value={enabled} onValueChange={setEnabled} />

      <Text style={styles.result}>
        {enabled ? "Notification On" : "Notification Off"}
      </Text>
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
