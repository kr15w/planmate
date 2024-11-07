import Ionicons from '@expo/vector-icons/Ionicons';
import { ReactNode, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props {
    score: number;
}
export function StarRating(props:Props) {
    let [stars, setStars] = useState(props.score);
    let temp=[];

    for (let i=0;i<props.score;i++){
        temp.push(<Ionicons name="star-sharp" size={24} color="#fcba03" />)
    }

    useEffect(() => {
        setStars(temp)
    }, []);
    return (
        <>
            <View style={styles.container}>{stars}</View>
        </>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
      }
})