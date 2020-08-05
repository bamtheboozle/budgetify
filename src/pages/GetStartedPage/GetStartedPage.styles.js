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
    color: Colours.BlueText,
    padding: 40,
  },
  cta: {
    margin: 20,
  },
});

export default styles;
