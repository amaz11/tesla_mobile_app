import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import CarContainer from "./CarContainer";
import styles from "./Style";
import cars from "./cars";

const CarList = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={cars}
        renderItem={(car) => <CarContainer car={car} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarList;
