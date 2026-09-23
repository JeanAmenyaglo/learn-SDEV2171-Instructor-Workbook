import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import MyButton from "../components/MyButton";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <MyButton
        text="Text Input 1"
        onPress={() => router.push("./text_input")}
      />

      <MyButton
        text="Text Input 2 - auto grab"
        onPress={() => router.push("./text_input_auto")}
      />

      <MyButton
        text="Switch Test"
        onPress={() => router.push("./switch_test")}
      />

      
      <MyButton
        text="Picker Test"
        onPress={() => router.push("./picker_screen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 15,
    padding: 20,
  },
});
