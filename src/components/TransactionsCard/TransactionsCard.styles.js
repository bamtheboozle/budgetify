import { StyleSheet } from "react-native";
import Colours from "../../colours/colourScheme";
import normalize from "../../utils/fontSizeUtils";

const styles = StyleSheet.create({
  lead: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colours.White,
    width: "48%",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  transactionList: {
    paddingHorizontal: 10,
    overflow: "scroll",
    flex: 1,
    marginBottom: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    color: Colours.GrayText,
    fontWeight: "700",
    fontSize: normalize(14),
  },
});

export default styles;
