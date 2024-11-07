import LocationCard from "@/components/LocationCard";
import ImageCarousel from "@/components/ImageCarousel";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, Text, ScrollView, View, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Tag } from "@/components/Tag"
import {StarRating} from "@/components/StarRating"

export default function Explore() {
  let [sug, setSug] = useState({
    "suggested_place": [
        {
            "name": "default",
            "isPartners": true,
            "rating": 0,
            "themes": ["theme1"],
            "desc":  "loremloremlorem",
            "related": ["link1", "link2"]
        }, 
        {
          "name": "default",
          "rating": 0,
          "themes": ["theme1"],
          "desc":  "loremloremlorem",
          "related": ["link1", "link2"]
      },
    ]
    });

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
    <>
    <ScrollView style={{padding:10}}>
    <Image style={{width: 100, height: 100}} source={{uri: "assets/images/Tokyo licensed image 1.png"}}/>

      <ThemedText type="title" darkColor="#000000">{sug[0].name}</ThemedText>
      {sug[0].isPartners == "true" ? <Text>Partners</Text> : <></>}
      <ThemedText type="subtitle" darkColor="#555555">Themes: </ThemedText>
      <View style={styles.tagContainer}>
        {sug[0].themes.map((item, index) => (<Tag name={item}/>))}
      </View>
      <View>
        <ThemedText type="subtitle" darkColor="#555555">Relavance: </ThemedText>
        <StarRating score={sug[0].rating}/>
      </View>
      <View>
        <ThemedText type="subtitle" darkColor="#555555">Description: </ThemedText>
        <Text>{sug[0].desc}</Text>
      </View>
    </ScrollView>
    </>
  );
}
//<LocationCard image={"/assets/images/bana.jpg"} name={item.name} info={item.info} key={index}>Trol</LocationCard>

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    display: "flex",
  },
  tagContainer: {
    flex: 1,
    flexDirection: "row",
  }
});
