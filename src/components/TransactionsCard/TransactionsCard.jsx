import React from "react";
import { Text, View, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import TransactionRow from "./TransactionRow";
import Colours from "../../colours/colourScheme";

import styles from "./TransactionsCard.styles";
import { CATEGORY, TRANSACTION_TYPE } from "../../types/TransactionTypes";

const recentTransactions = [
  {
    category: CATEGORY.Car,
    name: "Car Insurance",
    amount: 56.22,
    type: TRANSACTION_TYPE.Expense,
  },
  {
    category: CATEGORY.Health,
    name: "CVS",
    amount: 24.89,
    type: TRANSACTION_TYPE.Expense,
  },
  {
    category: CATEGORY.Groceries,
    name: "Mega Image Tineretului",
    amount: 48.12,
    type: TRANSACTION_TYPE.Expense,
  },
  {
    category: CATEGORY.Transport,
    name: "Metrorex ok",
    amount: 5765.82,
    type: TRANSACTION_TYPE.Expense,
  },
  {
    category: CATEGORY.Car,
    name: "Rompetrol AWB",
    amount: 258.29,
    type: TRANSACTION_TYPE.Expense,
  },
  {
    category: CATEGORY.Subscriptions,
    name: "Netflix",
    amount: 8.99,
    type: TRANSACTION_TYPE.Expense,
  },
];

const TransactionsCard = () => {
  return (
    <View style={styles.lead}>
      <View style={styles.header}>
        <AntDesign name="swap" size={30} color={Colours.DarkerLightBlue} />
        <View style={styles.heading}>
          <Text style={styles.text}>Recent</Text>
          <Text style={styles.text}>Transactions</Text>
        </View>
      </View>
      <ScrollView style={styles.transactionList}>
        {recentTransactions.map((transaction, index) => (
          <TransactionRow key={index} transaction={transaction} />
        ))}
      </ScrollView>
    </View>
  );
};

export default TransactionsCard;
