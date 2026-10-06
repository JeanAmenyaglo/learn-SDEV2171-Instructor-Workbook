import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Progress from "../components/Progress";
import StudentName from "../components/StudentName";

export default function HomeScreen() {

    // passing a single variable
    const studentName = "Bruce Wayne";

    // passing an object
    const student = {
        name: "Peter Parker",
        age: 20,
        city: "Edmonton"
    }

    // state variable
    const [assignmentOne, setAssignmentOne] = useState("Not Done");

    // function to enclose the setter function
    function somerandomfunction() {
        if (assignmentOne === "Not Done") {
            setAssignmentOne("Done")
        } else {
            setAssignmentOne("Not Done")

        }
    }

    return (
        <View style={styles.container}>

            <StudentName student={student} />
            <Progress assignmentOne={assignmentOne} changeAssignmentOneStat={somerandomfunction} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});