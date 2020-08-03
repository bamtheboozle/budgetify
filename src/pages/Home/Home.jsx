import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import AccountsCard from "../../components/AccountsCard";
import PeriodSpendingCard from "../../components/PeriodSpendingCard";
import TransactionsCard from "../../components/TransactionsCard";
import RemainingBudgetCard from "../../components/RemainingBudgetCard";

import NavigationTab from "../../NavigationTab";
import { PAGES } from "../../NavigationTab/NavigationTab";

import styles from "./Home.styles";

const Home = () => {
  return (
    <View style={styles.lead}>
      <View style={styles.greetingLead}>
        <Text style={styles.greeting}>Hello, bamtheboozle</Text>
        <FontAwesome name="user-circle-o" size={40} color="black" />
      </View>
      <View style={styles.row}>
        <PeriodSpendingCard></PeriodSpendingCard>
        <AccountsCard></AccountsCard>
      </View>
      <View style={styles.row}>
        <TransactionsCard></TransactionsCard>
        <RemainingBudgetCard></RemainingBudgetCard>
      </View>
      <NavigationTab activePage={PAGES.Home} />
    </View>
  );
};

export default Home;
