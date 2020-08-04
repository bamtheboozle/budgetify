import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

import styles from "./PeriodSpendingCard.styles";
import Colours from "../../colours/colourScheme";
import normalize from "../../utils/fontSizeUtils";

const mock = {
  total: 549.58,
  weeklyData: [45.49, 129.33, 105.99, 92.92, 35.01, 129.99, 87.85],
  days: ["M", "T", "W", "T", "F", "S", "S"],
};

const PeriodSpendingCard = () => {
  const [data, setData] = useState(mock);
  const [maxChartHeight, setMaxChartHeight] = useState(100);
  useEffect(() => {
    setData(mock);
  }, []);

  const maxDailySpend = Math.max(...data.weeklyData);
  const spentArr = `${data.total}`.split(".");
  return (
    <View style={styles.lead}>
      <View style={styles.header}>
        <AntDesign
          name="linechart"
          size={normalize(28)}
          color={Colours.White}
        />
        <View style={styles.heading}>
          <Text style={styles.text}>Expenses</Text>
          <Text style={styles.subtitle}>last 7 days</Text>
        </View>
      </View>
      <View style={styles.spentView}>
        <Text style={styles.spentText}>
          <FontAwesome5
            name="dollar-sign"
            size={normalize(28)}
            color={Colours.White}
          />{" "}
          {spentArr[0]}
          <Text style={styles.spentDecimal}>.{spentArr[1]}</Text>
        </Text>
      </View>
      <View
        style={styles.weeklyChart}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          setMaxChartHeight(height - 25);
        }}
      >
        {data.weeklyData.map((dailySpend, index) => (
          <View key={index} style={styles.barContainer}>
            <View
              style={[
                styles.bar,
                {
                  height: Math.floor(
                    (dailySpend / maxDailySpend) * maxChartHeight
                  ),
                },
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
