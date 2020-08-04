import Colour, { Colours } from "../../colours/colourScheme";

import { StyleSheet } from "react-native";
import normalize from "../../utils/fontSizeUtils";

const styles = StyleSheet.create({
  lead: {
    backgroundColor: Colour.BlueText,
    width: "48%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 10,
    shadowOpacity: 0.2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  heading: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  text: {
    fontSize: normalize(16),
    color: Colours.White,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: normalize(10),
    color: Colours.White,
    fontWeight: "700",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amount: {
    fontSize: normalize(28),
    color: Colours.White,
    fontWeight: "700",
  },
  decimals: {
    fontSize: normalize(14),
  },
});

export default styles;
