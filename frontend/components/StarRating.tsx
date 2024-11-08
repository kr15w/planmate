import Ionicons from "@expo/vector-icons/Ionicons";
import { ReactNode, useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

interface Props {
  score: number;
}
export function StarRating(props: Props) {
  let [stars, setStars] = useState([]);
  let temp = [];

  console.log("score: ", stars);

  for (let i = 0; i < props.score; i++) {
    temp.push(
      <Ionicons
        key={i}
        name="star-sharp"
        size={24}
        color="#fcba03"
      />
    );
  }

  useEffect(() => {
    setStars(temp);
  }, [props.score]);
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        {stars}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
