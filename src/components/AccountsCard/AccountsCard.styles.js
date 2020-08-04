import Colour from "../../colours/colourScheme";

import { StyleSheet } from "react-native";
import normalize from "../../utils/fontSizeUtils";

const styles = StyleSheet.create({
  lead: {
    backgroundColor: Colour.White,
    width: "48%",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  scrollView: {
    marginVertical: 10,
    paddingHorizontal: 10,
    overflow: "scroll",
  },
  subcard: {
    backgroundColor: "red",
    borderRadius: 5,
    marginVertical: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    display: "flex",
    justifyContent: "space-around",
  },
  lastSubCard: {
    marginBottom: 0,
  },
  checking: {
    backgroundColor: Colour.LightBlueBackground,
  },
  saving: {
    backgroundColor: Colour.BlueBackground,
  },
  debt: {
    backgroundColor: Colour.GrayBackground,
  },
  name: {
    fontWeight: "500",
    fontSize: normalize(16),
    display: "flex",
    alignItems: "center",
  },
  amount: {
    fontWeight: "700",
    fontSize: normalize(18),
    alignSelf: "flex-end",
    marginTop: 5,
  },
  checkingText: {
    color: Colour.LightBlueText,
  },
  checkingAmount: {
    color: Colour.LightBlueText,
  },
  savingText: {
    color: Colour.BlueText,
  },
  savingAmount: {
    color: Colour.BlueText,
  },
  decimals: {
    fontSize: normalize(12),
  },
  debtText: {
    color: Colour.GrayText,
  },
  debtAmount: {
    color: Colour.GrayText,
  },
  marginRight: {
    marginRight: 5,
  },
});

export default styles;
