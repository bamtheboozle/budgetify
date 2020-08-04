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
  checking: {
    backgroundColor: Colour.LightBlueBackground,
  },
  saving: {
    backgroundColor: Colour.BlueBackground,
  },
  debt: {
    backgroundColor: Colour.GrayBackground,
  },
  checkingText: {
    color: Colour.LightBlueText,
    fontWeight: "500",
    fontSize: normalize(14),
  },
  checkingAmount: {
    color: Colour.LightBlueText,
    fontWeight: "700",
    fontSize: normalize(16),
  },
  savingText: {
    color: Colour.BlueText,
    fontWeight: "500",
    fontSize: normalize(14),
  },
  savingAmount: {
    color: Colour.BlueText,
    fontWeight: "700",
    fontSize: normalize(16),
  },
  decimals: {
    fontSize: normalize(12),
  },
  debtText: {
    color: Colour.GrayText,
    fontWeight: "500",
    fontSize: normalize(14),
  },
  debtAmount: {
    color: Colour.GrayText,
    fontWeight: "700",
    fontSize: normalize(16),
  },
});

export default styles;
