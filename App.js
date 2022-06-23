import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarContainer from "./components/CarContainer";
const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  return (
    <View style={styles.container}>
      <CarContainer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
