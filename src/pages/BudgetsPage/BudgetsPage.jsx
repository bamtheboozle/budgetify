import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";

import styles from "./BudgetsPage.styles";

const BudgetsPage = () => (
  <SafeAreaView style={styles.lead}>
    <ScrollView>
      <Text style={styles.text}>im budgets noob</Text>
    </ScrollView>
  </SafeAreaView>
);

export default BudgetsPage;
