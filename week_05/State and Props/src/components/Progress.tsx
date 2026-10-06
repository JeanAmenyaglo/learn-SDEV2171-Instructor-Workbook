import { Pressable, StyleSheet, Text, View } from "react-native";

type AssignmentProps = {
    assignmentOne: string,
    //setAssignmentOne: (value: string) => void;
    changeAssignmentOneStat: () => void
}


export default function Progress({ assignmentOne, changeAssignmentOneStat }: AssignmentProps) {
    return (
        <View style={styles.card}>
            <Text>
                Assignment One
            </Text>
            <Text>
                Status : {assignmentOne}
            </Text>

            <Pressable
                style={styles.button}
                onPress={() => changeAssignmentOneStat()}
            >

                <Text>
                    Change Status
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 280,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10
    },
    button: {
        backgroundColor: "red",
        padding: 12,
        borderRadius: 8,
        alignItems: "center"
    }

})