import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";

import styles from "./Budgets.styles";

const Budgets = () => (
  <SafeAreaView style={styles.lead}>
    <ScrollView>
      <Text style={styles.text}>im budgets noob</Text>
    </ScrollView>
  </SafeAreaView>
);

export default Budgets;
