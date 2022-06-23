import React from "react";
import { View, StyleSheet } from "react-native";
import CarContainer from "./CarContainer";
import styles from "./Style";

const CarList = () => {
  return (
    <View style={styles.listContainer}>
      <CarContainer />
    </View>
  );
};

export default CarList;
