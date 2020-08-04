import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";

import styles from "./Goals.styles";

const Goals = () => (
  <SafeAreaView style={styles.lead}>
    <ScrollView>
      <Text style={styles.text}>im goals noob</Text>
    </ScrollView>
  </SafeAreaView>
);

export default Goals;
