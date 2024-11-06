import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Explore() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/skibidi')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ul>
        {JSON.stringify(data.items)}
      </ul>
    </div>
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
