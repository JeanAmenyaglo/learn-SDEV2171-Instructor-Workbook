import { StyleSheet, Text, View } from "react-native";

type Props = {
    student: {
        name: string,
        age: number,
        city: string
    }
}

export default function StudentName({ student }: Props) {

    return (
        <View style={styles.card}>
            <Text style={styles.name}>
                Student Name : {student.name}
            </Text>
            <Text>
                Age : {student.age}
            </Text>
            <Text>
                City : {student.city}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create(
    {
        card: {
            width: 400,
            padding: 20,
            backgroundColor: "#d2e9ee",
            borderRadius: 10
        },
        text: {
            fontSize: 18
        },
        name: {
            fontSize: 25,
            fontWeight: "bold",
            marginBottom: 20

        }
    }
)