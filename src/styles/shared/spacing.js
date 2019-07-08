import { StyleSheet } from "react-native";
import Colors from './colors';
import Constants from './constants';


let defaultSpacer = Constants.defaultSpacer;
let positions = ["Top", "Right", "Left", "Bottom"];
const spacing = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: Constants.viewPadding,
    backgroundColor: Colors.white.default,
    justifyContent: "space-between",
    height: Constants.viewHeight
  },
  scrollContainer: {
    backgroundColor: Colors.white.default,
    flex: 0,
    minHeight: Constants.viewHeight
  },
  viewPadding: {
    padding: Constants.viewPadding
  },
  viewPaddingHorizontal: {
    paddingLeft: Constants.viewPadding,
    paddingRight: Constants.viewPadding
  },
  viewPaddingVertical: {
    paddingTop: Constants.viewPadding,
    paddingBottom: Constants.viewPadding
  }
});
positions.forEach(position => {
  var paddingString = "padding" + position;
  var marginString = "margin" + position;
  spacing["addPadding" + position] = {
    //spacing[addPaddingTop] = {[paddingTop]: 10}
    [paddingString]: defaultSpacer
  };
  spacing["addMargin" + position] = {
    //spacing[addMarginTop] = {[marginTop]: 10}
    [marginString]: defaultSpacer
  };
});

//console.log(spacing['addPaddingTop'])

export default spacing;
