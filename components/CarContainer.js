import React from "react";
import { View, ImageBackground, Text } from "react-native";
import Buttons from "./Buttons";
import styles from "./Style";

const CarContainer = ({ name, tagline, taglineCTA, image }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../assets/images/Model3.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at 69,420$</Text>
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
