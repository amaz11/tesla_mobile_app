import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import styles from "./Style";

const CarContainer = () => {
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
    </View>
  );
};

export default CarContainer;
