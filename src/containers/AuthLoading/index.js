import React from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import  FadeInView  from '../../components/FadeInView';
import { Constants }from "../../styles/shared/index";
import { connect } from "react-redux";
import { isNil } from 'ramda';
import ErrorScreen from '../Error'

const imageWidth = Constants.screenWidth * 0.8;

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchAuth();
  }

  fetchAuth = () => {
    console.log("inside fetch auth", this.props.token, this.props.userID)
    this.props.navigation.navigate(
      isNil(this.props.token) ? "Auth" : "App"
    );
  };

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
            <FadeInView style={{width: 250, height: 50, backgroundColor: 'transparent'}}>
              <Text style={styles.text}>Some awesome content loading ...</Text>
          </FadeInView>
        </View>
        </View>
      );

    if(this.props.error){
      return <ErrorScreen />;
    }

  }
}

const mapStateToProps = state => ({
  token: state.auth.token, 
  fetching : state.auth.fetching,
  error:state.auth.error,
  userID : state.auth.userID
});



export default connect(
  mapStateToProps,
  null
)(AuthLoadingScreen);
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
