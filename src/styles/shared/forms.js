import { StyleSheet } from "react-native";
import Colors from './colors';
import Constants from './constants';
import Common from './common';


const forms = StyleSheet.create({
  container: {
    padding: Constants.viewPadding,
    backgroundColor: Colors.white.default,
    height: Constants.viewHeight
  },
  form: {
    fontFamily: "Montserrat-Regular"
  },
  input: Object.assign({}, Common.inputText, {
    color: Colors.black.default
  }),
  button: {
    backgroundColor: Colors.red.firebrick,
    color: Colors.white.default
  },
  error: {
    fontSize: 12,
    color: Colors.red.modalred
  }
});

export default forms;
