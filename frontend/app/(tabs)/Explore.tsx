import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Explore() {
  let [sug, setSug] = useState({
    "suggested_place": [
        {
            "name": "default1",
            "info":  [("theme1","generated_description1"),("theme2","generated_description2")]
        }, 
        {
            "name": "default2",
            "info":  [("theme1","generated_description1"),("theme2","generated_description2")]
        }, 
        {
            "name": "default3",
            "info":  [("theme1","generated_description1"),("theme2","generated_description2")]
        }
    ]
} );

  useEffect(() => {
    fetch('http://127.0.0.1:5000/skibidi')
      .then(response => response.json())
      .then(data => setSug(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!sug) {
    return <div>Loading...</div>;
  }
  sug = sug.suggested_place;

  return (
    <div>
      <h1>{sug.title}</h1>
      <p>{sug.description}</p>
      <ul>
        {sug.map((place, index) => (
          <li>
            <h2>{place.name}</h2>
            {place.info.map((desc, index) => (
              <>
                <h4>{desc[0]}</h4>
                <p>{desc[1]}</p>
              </>
              ))}
          </li>
        ))}
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
