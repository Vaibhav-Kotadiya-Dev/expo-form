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
  },
  genderBtnView: {
    marginTop: 10,
    gap: 20,
  },
  genderBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#add8e6",
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
  QuestionsText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000000",
  },
  upDown: {
    height: 15,
    width: 15,
  },
  buttonStyle: {
    borderRadius: 20,
    backgroundColor: "#d3d3d3",
    marginTop: 10,
  },
  dropdownStyle: {
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  container: {
    backgroundColor: "white",
    marginTop: 30,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default styles;
