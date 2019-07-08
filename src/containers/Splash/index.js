import React from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import FadeInView from "../../components/FadeInView";
import { Constants } from "../../styles/shared/index";

const imageWidth = Constants.screenWidth * 0.8;

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <FadeInView
            style={{ width: 250, height: 50, backgroundColor: "transparent" }}
          >
            <Text style={styles.text}>Some awesome content loading ...</Text>
          </FadeInView>
        </View>
      </View>
    );
  }
}



export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ba1c40"
  },
  imageContainer: {
    width: imageWidth
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },
  logo: {
    width: "100%",
    overflow: "visible"
  }
});
