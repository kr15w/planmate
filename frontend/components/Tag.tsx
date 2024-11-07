import {Image, StyleSheet, Text } from "react-native"

export interface Props {
    name: String;
}
export function Tag(props: Props) {
    return (
        <>
        <Text style={styles.text}>{props.name}</Text>
        </>
    )
};

const styles = StyleSheet.create({
        text: {
            borderRadius: 50,
            backgroundColor: "grey",
            margin: 2,
            padding: 8
        }
})