import React, { Component } from "react";
import {
  Alert,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Button
} from "react-native";
import { isNil } from 'ramda';
import { DrawerItems } from "react-navigation";
import { connect } from "react-redux";
import AuthActions from "../redux/AuthRedux";

class CustomDrawerNavigator extends Component {
  constructor(props) {
    super(props);
  }

  
  logoutHandler = () => {
    this.props.logoutRequest()
  };
  render() {
    if(isNil(this.props.token)) {
      return (this.props.navigation.navigate("Auth"))
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ScrollView>
            <DrawerItems
              activeBackgroundColor={"white"}
              activeTintColor={"#ba1c40"}
              iconContainerStyle={styles.icons}
              {...this.props}
            />
            <View style={styles.buttonContainer}>
              <Button
                color="#ba1c40"
                title="Logout"
                onPress={this.logoutHandler}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  buttonContainer: {
    marginLeft: 80
  },

  icons: {
    width: 40
  }
});

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    error : state.auth.error,
    fetching: state.auth.fetching
  };
};

const mapDispatchToProps = dispatch => ({
  logoutRequest: () =>
    dispatch(AuthActions.logoutRequest())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomDrawerNavigator);
