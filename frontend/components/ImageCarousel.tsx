import { Image, ScrollView, StyleSheet, Dimensions, View } from "react-native";
import ReactNode, { useEffect, useState } from "react";
const { width, height } = Dimensions.get("window");

export default function ImageCarousel({ imageRequires }: Props) {
  let [images, setImages] = useState(imageRequires);
  useEffect(() => {
    setImages(imageRequires);
  }, [imageRequires]);
  return (
    <>
      <ScrollView
        horizontal={true}
        fadingEdgeLength={0}
        decelerationRate={0.8}
        contentContainerStyle={styles.imageContainer}
      >
        {imageRequires.map((item, index) => (
          <View
            key={index}
            style={styles.imageBox}
          >
            <Image
              source={item}
              resizeMode={"cover"}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    margin: 5,
    width: width * 0.1,
    transform: [{ scale: 1.2 }],
  },
  imageBox: { margin: "2%", borderRadius: 50 },
  imageContainer: {
    justifyContent: "flex-start",
    alignItems: "baseline",
  },
});
