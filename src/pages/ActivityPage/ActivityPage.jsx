import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";

import styles from "./ActivityPage.styles";

const ActivityPage = () => (
  <SafeAreaView style={styles.lead}>
    <ScrollView>
      <Text style={styles.text}>im activity noob</Text>
    </ScrollView>
  </SafeAreaView>
);

export default ActivityPage;
