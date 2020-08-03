import React from "react";
import { Text, View, ScrollView } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

import styles from "./AccountsCard.styles";
import Colours from "../../colours/colourScheme";

const AccountsCard = () => {
  return (
    <View style={styles.lead}>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.subcard, styles.checking]}>
          <Text style={styles.checkingText}>
            <Entypo
              name="credit-card"
              size={18}
              color={Colours.LightBlueText}
            />{" "}
            ING
          </Text>
          <Text style={styles.checkingAmount}>
            <Entypo name="credit" size={20} color={Colours.LightBlueText} />
            15,728
            <Text style={styles.decimals}>.72</Text>
          </Text>
        </View>
        <View style={[styles.subcard, styles.checking]}>
          <Text style={styles.checkingText}>
            <Entypo
              name="credit-card"
              size={18}
              color={Colours.LightBlueText}
            />{" "}
            Raiffeisen
          </Text>
          <Text style={styles.checkingAmount}>
            <Entypo name="credit" size={20} color={Colours.LightBlueText} />
            4,982
            <Text style={styles.decimals}>.49</Text>
          </Text>
        </View>
        <View style={[styles.subcard, styles.saving]}>
          <Text style={styles.savingText}>
            <FontAwesome5
              name="piggy-bank"
              size={18}
              color={Colours.BlueText}
            />{" "}
            Savings
          </Text>
          <Text style={styles.savingAmount}>
            <Entypo name="credit" size={20} color={Colours.BlueText} />
            21,084
            <Text style={styles.decimals}>.72</Text>
          </Text>
        </View>
        <View style={[styles.subcard, styles.debt]}>
          <Text style={styles.debtText}>
            <FontAwesome5
              name="money-check-alt"
              size={18}
              color={Colours.GrayText}
            />{" "}
            Debt
          </Text>
          <Text style={styles.debtAmount}>
            <Entypo name="credit" size={20} color={Colours.GrayText} />
            1,384
            <Text style={styles.decimals}>.18</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountsCard;
