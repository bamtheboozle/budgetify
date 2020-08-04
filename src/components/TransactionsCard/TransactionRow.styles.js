import { StyleSheet } from "react-native";
import Colours from "../../colours/colourScheme";
import normalize from "../../utils/fontSizeUtils";

const styles = StyleSheet.create({
  lead: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    backgroundColor: Colours.GrayBackground,
    borderRadius: 5,
    marginVertical: 2,
  },
  nameLead: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    width: "100%",
    paddingHorizontal: 10,
    paddingRight: 5,
  },
  name: {
    color: Colours.GrayText,
    fontWeight: "700",
    fontSize: normalize(12),
    marginLeft: 10,
    marginRight: 20,
  },
  amount: {
    color: Colours.BrightRed,
    alignSelf: "flex-end",
    paddingHorizontal: 10,
    fontWeight: "700",
    fontSize: normalize(14),
  },
});

export default styles;
