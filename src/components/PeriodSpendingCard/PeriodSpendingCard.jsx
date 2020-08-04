import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import styles from "./PeriodSpendingCard.styles";
import Colours from "../../colours/colourScheme";

const mock = {
  total: 549.58,
  weeklyData: [45.49, 129.33, 105.99, 92.92, 35.01, 129.99, 87.85],
  days: ["M", "T", "W", "T", "F", "S", "S"],
};

const PeriodSpendingCard = () => {
  const [data, setData] = useState(mock);
  useEffect(() => {
    setData(mock);
  }, []);

  const maxDailySpend = Math.max(...data.weeklyData);
  const spentArr = `${data.total}`.split(".");
  return (
    <View style={styles.lead}>
      <View style={styles.header}>
        <AntDesign name="linechart" size={30} color={Colours.White} />
        <View style={styles.heading}>
          <Text style={styles.text}>Expenses</Text>
          <Text style={styles.subtitle}>last 7 days</Text>
        </View>
      </View>
      <View style={styles.spentView}>
        <Text style={styles.spentText}>
          <Entypo name="credit" size={28} color={Colours.White} />
          {spentArr[0]}
          <Text style={styles.spentDecimal}>.{spentArr[1]}</Text>
        </Text>
      </View>
      <View style={styles.weeklyChart}>
        {data.weeklyData.map((dailySpend, index) => (
          <View key={index} style={styles.barContainer}>
            <View
              style={[
                styles.bar,
                { height: Math.floor((dailySpend / maxDailySpend) * 100) },
              ]}
            ></View>
            <Text style={styles.barText}>{data.days[index]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default PeriodSpendingCard;
