import React from "react";
import { View, FlatList } from "react-native";
import CarContainer from "./CarContainer";
import styles from "./Style";
import cars from "./cars";

const CarList = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList data={cars} renderItem={(car) => <CarContainer car={car} />} />
    </View>
  );
};

export default CarList;
