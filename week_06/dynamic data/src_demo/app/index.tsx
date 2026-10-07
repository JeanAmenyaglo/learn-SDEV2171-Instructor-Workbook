import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const fruits = ["Pears", "Melon", "Strawberry"];

  const fruits_obj = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },

    { id: 3, name: "Orange" },
  ];

  const products = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Android" },

    { id: 3, name: "Intel" },
  ];

  const [fruits_state, setFruits] = useState(["Apple", "Orange"]);

  function changeFruit() {
    setFruits(["Banana", "melon"]);
  }

  function clearFruits() {
    setFruits([]);
  }

  function updateFruit() {
    const nextFruits = fruits_state.map((fr) => {
      if (fr === "Apple") {
        return "Mango";
      }

      return fr;
    });

    setFruits(nextFruits);
  }

  return (
    <View style={styles.container}>
      {/* <Text>{fruits[1]}</Text>
      <Text>{fruits_obj[1].name}</Text>
      <Text>{fruits_state[0]}</Text>
      <Text>{fruits_state[1]}</Text>

      <Button title="Change fruit" onPress={changeFruit}></Button>
      <View>
        {fruits.map((thing) => (
          <Text key={thing}>{thing}</Text>
        ))}
      </View>

      <View>
        {fruits_obj.map((fr) => (
          <Text key={fr.id}>{fr.name}</Text>
        ))}
      </View> */}

      {/* <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      /> */}

      <View>
        {fruits_state.length === 0 ? (
          <Text>No fruits available </Text>
        ) : (
          fruits_state.map((fruit) => <Text key={fruit}> {fruit}</Text>)
        )}
      </View>
      <Button title="Clear fruit" onPress={clearFruits}></Button>

      <View>
        {fruits_state.map((frt) => (
          <Text key={frt}>{frt}</Text>
        ))}
      </View>

      <Button title="Change fruit" onPress={updateFruit}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  item: {
    fontSize: 20,
    marginBottom: 12,
  },
});
