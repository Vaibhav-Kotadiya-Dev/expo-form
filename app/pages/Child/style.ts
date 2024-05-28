import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  nameView: {
    backgroundColor: "#ffffff",
    height: "100%",
    paddingHorizontal: 16,
  },
  headerView: {
    // backgroundColor:"#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 30,
  },
  childDiv: {
    marginTop: 30,
    gap: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  childNameDiv: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 5,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
  },
  cross: {
    marginLeft: 5,
  },
  childNameText: {
    fontSize: 15,
    fontWeight: "400",
  },
  input: {
    marginTop: 10,
  },
  btnView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#add8e6",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 30,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default styles;
