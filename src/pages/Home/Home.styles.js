import { StyleSheet } from "react-native";
import normalize from "../../utils/fontSizeUtils";

const styles = StyleSheet.create({
  lead: {
    width: "100%",
    flex: 1,
    display: "flex",
  },
  row: {
    display: "flex",
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
    paddingBottom: 20,
    paddingTop: 10,
  },
  greeting: {
    fontSize: normalize(24),
    fontWeight: "700",
  },
});

export default styles;
