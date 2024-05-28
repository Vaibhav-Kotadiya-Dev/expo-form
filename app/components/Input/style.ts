import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  input: {
    padding: 24,
    borderWidth: 1,
    borderRadius: 4,
    fontFamily: "Avenir-Medium",
    fontSize: 16,
    zIndex: 0,
  },
  labelContainer: {
    position: "absolute",
    paddingHorizontal: 8,
    zIndex: 1,
  },
  label: {
    fontFamily: "Avenir-Heavy",
    fontSize: 16,
  },
  error: {
    marginTop: 4,
    marginLeft: 12,
    fontSize: 12,
    color: "#B00020",
    fontFamily: "Avenir-Medium",
  },
  QuestionsText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 10,
  },
});

export default styles;
