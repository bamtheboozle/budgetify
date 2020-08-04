import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, ScrollView, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import AccountsCard from "../../components/AccountsCard";
import PeriodSpendingCard from "../../components/PeriodSpendingCard";
import TransactionsCard from "../../components/TransactionsCard";
import RemainingBudgetCard from "../../components/RemainingBudgetCard";

import styles from "./Home.styles";
import Colours from "../../colours/colourScheme";

const Home = () => {
  return (
    <SafeAreaView style={styles.lead}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.greetingLead}>
          <Text style={styles.greeting}>Hello, bamtheboozle</Text>
          <FontAwesome
            name="user-circle-o"
            size={32}
            color={Colours.GrayText}
          />
        </View>
        <View style={styles.row}>
          <PeriodSpendingCard></PeriodSpendingCard>
          <AccountsCard></AccountsCard>
        </View>
        <View style={styles.row}>
          <TransactionsCard></TransactionsCard>
          <RemainingBudgetCard></RemainingBudgetCard>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
