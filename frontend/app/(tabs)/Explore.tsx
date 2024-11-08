import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  View,
  Image,
  Dimensions,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Tag } from "@/components/Tag";
import { StarRating } from "@/components/StarRating";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import ImageCarousel from "@/components/ImageCarousel";

export default function Explore() {
  let [sug, setSug] = useState({
    suggested_place: [
      {
        name: "default",
        isPartners: false,
        rating: -1,
        themes: ["theme1"],
        desc: "loremloremlorem",
        related: ["link1", "link2"],
      },
    ],
  });

  useEffect(() => {
    fetch("http://192.168.50.34:5000/skibidi")
      .then((response) => response.json())
      .then((data) => setSug(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [sug.suggested_place.rating]);

  if (!sug) {
    return <ThemedView>Loading...</ThemedView>;
  }
  console.log("shop info: ", sug);
  sug = sug.suggested_place;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <ImageCarousel
          imageRequires={[
            require("@/assets/images/Tokyo licensed image 1.png"),
            require("@/assets/images/Tokyo June 8 1.png"),
            require("@/assets/images/Tokyo licensed image 1.png"),
            require("@/assets/images/Tokyo June 8 1.png"),
          ]}
        />
      }
    >
      <ThemedView style={{ padding: 10 }}>
        <ThemedText type="title">{sug[0].name}</ThemedText>
        <ThemedText type="subtitle">Themes: </ThemedText>
        <View style={styles.tagContainer}>
          {sug[0].themes.map((item, index) => (
            <Tag
              name={item}
              key={index}
            />
          ))}
        </View>
        <View>
          <ThemedText type="subtitle">Relavance: </ThemedText>
          <StarRating score={sug[0].rating} />
        </View>
        <View>
          <ThemedText type="subtitle">Description: </ThemedText>
          <ThemedText>{sug[0].desc}</ThemedText>
        </View>
      </ThemedView>
    </ParallaxScrollView>
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
  },
});
