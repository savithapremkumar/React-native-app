import { Colors , Typography , Spacing } from "../../shared/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: Object.assign({}, Spacing.container),
  title: Object.assign({}, Typography.style.h1, {
    color: Colors.red.firebrick,
    textAlign: "center",
    fontSize: 24
  }),
  fab: {
    position: "relative",
    width: '100%',
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    //right: 20,
    bottom: 20,
    backgroundColor: "#ba1c40",
    borderRadius: 10,
    elevation: 8
  },
  fabIcon: {
    fontSize: 20,
    color: "white"
  }
});

export default styles;
