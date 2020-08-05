import React from "react";
import { Text, View, ScrollView } from "react-native";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import styles from "./AccountsCard.styles";
import Colours from "../../colours/colourScheme";
import normalize from "../../utils/fontSizeUtils";

const AccountsCard = () => {
  return (
    <View style={styles.lead}>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.subcard, styles.checking]}>
          <View style={styles.iconAndName}>
            <AntDesign
              style={styles.marginRight}
              name="creditcard"
              size={normalize(16)}
              color={Colours.LightBlueText}
            />
            <Text style={[styles.name, styles.checkingText]}>ING</Text>
          </View>
          <View style={styles.iconAndAmount}>
            <FontAwesome5
              name="dollar-sign"
              size={normalize(16)}
              color={Colours.LightBlueText}
            />
            <Text style={[styles.amount, styles.checkingAmount]}>
              15,728
              <Text style={styles.decimals}>.72</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.subcard, styles.checking]}>
          <View style={styles.iconAndName}>
            <AntDesign
              style={styles.marginRight}
              name="creditcard"
              size={normalize(16)}
              color={Colours.LightBlueText}
            />
            <Text style={[styles.name, styles.checkingText]}>Raiffeisen</Text>
          </View>
          <View style={styles.iconAndAmount}>
            <FontAwesome5
              name="dollar-sign"
              size={normalize(16)}
              color={Colours.LightBlueText}
            />
            <Text style={[styles.amount, styles.checkingAmount]}>
              4,982
              <Text style={styles.decimals}>.49</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.subcard, styles.saving]}>
          <View style={styles.iconAndName}>
            <MaterialCommunityIcons
              name="bank-outline"
              size={normalize(16)}
              color={Colours.BlueText}
            />
            <Text style={[styles.name, styles.savingText]}>Savings</Text>
          </View>
          <View style={styles.iconAndAmount}>
            <FontAwesome5
              name="dollar-sign"
              size={normalize(16)}
              color={Colours.BlueText}
            />
            <Text
              numberOfLines={2}
              style={[styles.amount, styles.savingAmount]}
            >
              2,827,212
              <Text style={styles.decimals}>.72</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.subcard, styles.debt, styles.lastSubCard]}>
          <View style={styles.iconAndName}>
            <FontAwesome5
              style={styles.marginRight}
              name="credit-card"
              size={normalize(14)}
              color={Colours.GrayText}
            />
            <Text style={[styles.name, styles.debtText]}>Debt</Text>
          </View>
          <View style={styles.iconAndAmount}>
            <FontAwesome5
              name="dollar-sign"
              size={normalize(16)}
              color={Colours.GrayText}
            />
            <Text style={[styles.amount, styles.debtAmount]}>
              1,384
              <Text style={styles.decimals}>.18</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountsCard;
