import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Explore() {
  // suggestions
  let [sug, setSug] = useState([]);
  let stuff = ["Empty list."];

  // get data
  useEffect(() => {
    fetch("http://127.0.0.1:5000/skibidi")
      .then((r) => r.json())
      .then((data) => {
        setSug(data);
      })
      .catch((e) => console.log("Bruh error :" + e));
  }, []);

  console.log("bruh", sug.suggested_place);

  stuff = [...sug.suggested_place];

  console.log("sakuhsladhf", stuff);
  // region lang inteterest
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Where to go?"
      />
      <ThemedText
        darkColor="#000000"
        type="title"
      >
        Suggestions
      </ThemedText>

      <ul>
        {stuff.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    display: "flex",
  },
});

/*raw_json ={
        "suggested_place":[ {"place1":  [
                                            ("theme1","generated_description1"),
                                            ("theme2","generated_description2")
                                        ]},
                            {"place1":  [
                                            ("theme1","generated_description1"),
                                            ("theme2","generated_description2"),
                                            ("theme3","generated_description3")
                                        ]}
        ]
    } 
*/
