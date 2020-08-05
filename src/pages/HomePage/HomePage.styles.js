import { StyleSheet } from "react-native";
import normalize from "../../utils/fontSizeUtils";
import Colours from "../../colours/colourScheme";

const styles = StyleSheet.create({
  lead: {
    width: "100%",
    flex: 1,
    display: "flex",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  row: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  greetingLead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  greeting: {
    fontSize: normalize(22),
    fontWeight: "700",
    color: Colours.EvenDarkerLightBlue,
  },
});

export default styles;
