import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import Colour from "./src/colours/colourScheme";
import Home from "./src/pages/Home/Home";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colour.Background,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Home />
    </SafeAreaView>
  );
}
