import { StyleSheet } from "react-native";
import normalize from "../../utils/fontSizeUtils";
import Colours from "../../colours/colourScheme";

const styles = StyleSheet.create({
  lead: {
    width: "100%",
    flex: 1,
    display: "flex",
  },
  text: {
    fontSize: normalize(24),
    fontWeight: "700",
    color: Colours.BrightRed,
    padding: 40,
  },
});

export default styles;
