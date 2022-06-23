import React from "react";
import { View, ImageBackground, Text } from "react-native";
import Buttons from "./Buttons";
import styles from "./Style";

const CarContainer = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  console.log(image);
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Buttons
          type="primary"
          title={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />
        <Buttons
          type="secondary"
          title={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarContainer;
