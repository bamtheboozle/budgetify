import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";

import styles from "./Activity.styles";

const Activity = () => (
  <SafeAreaView style={styles.lead}>
    <ScrollView>
      <Text style={styles.text}>im activity noob</Text>
    </ScrollView>
  </SafeAreaView>
);

export default Activity;
