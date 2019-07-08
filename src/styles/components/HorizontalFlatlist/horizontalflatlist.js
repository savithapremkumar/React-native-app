import { Colors , Typography , Spacing } from "../../shared/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: Object.assign({}, Spacing.container),
  title: Object.assign({}, Typography.style.h1, {
    color: Colors.red.firebrick,
    textAlign: "center",
    fontSize: 24
  }),

});

export default styles;
