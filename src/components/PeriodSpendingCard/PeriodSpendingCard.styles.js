import Colour, { Colours } from "../../colours/colourScheme";

import { StyleSheet } from "react-native";
import normalize from "../../utils/fontSizeUtils";

const styles = StyleSheet.create({
  lead: {
    justifyContent: "space-between",
    backgroundColor: Colour.DarkerLightBlue,
    width: "48%",
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 0.3,
  },
  heading: {
    alignItems: "center",
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
  spentView: {
    alignItems: "center",
    flex: 0.4,
  },
  spentText: {
    fontSize: normalize(28),
    color: Colours.White,
    fontWeight: "700",
  },
  spentDecimal: {
    fontSize: normalize(14),
  },
  weeklyChart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 10,
    flex: 0.8,
  },
  barContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "10%",
  },
  bar: {
    width: "100%",
    height: 100,
    borderRadius: 20,
    backgroundColor: Colours.LighterLightBlue,
  },
  barText: {
    color: Colours.White,
    fontWeight: "700",
    marginTop: 5,
    fontSize: normalize(12),
  },
});

export default styles;
