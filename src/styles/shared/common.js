import { StyleSheet } from "react-native";
import Colors from './colors';
import Typography from './typography';
import Spacing from './spacing';


//spacing['addMarginLeft'] = {marginLeft:20}

const common = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.red.firebrick
  },
  logo: { width: 120, height: 30, marginLeft: 20, marginTop: 5 },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  container: {
    flex: 1,
    paddingTop: Spacing.baseMargin,
    backgroundColor: Colors.transparent
  },
  section: {
    margin: Spacing.section,
    padding: Spacing.baseMargin
  },
  sectionText: {
    ...Typography.style.normal,
    paddingVertical: Spacing.doubleBaseMargin,
    color: Colors.white.default,
    marginVertical: Spacing.smallMargin,
    textAlign: 'center'
  },
  subtitle: {
    color: Colors.white.default,
    padding: Spacing.smallMargin,
    marginBottom: Spacing.smallMargin,
    marginHorizontal: Spacing.smallMargin
  },
  titleText: {
    ...Typography.style.h2,
    fontSize: 14,
    color: Colors.black.default
  },
  inputText: {
    ...Typography.style.input,
    color: Colors.grey.grey3,
    textAlign : 'left'
  }
});

export default common;
