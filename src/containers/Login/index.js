import React, { Component } from "react";
import { Platform, View, Text } from "react-native";
import LoginForm from "./LoginForm";
import Header from "../../components/Header";
import { SafeAreaView } from "react-navigation";


type Props = {};
export default class LoginScreen extends Component<Props> {
  static navigationOptions = {
    title: ""
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <View>
          <Header navigation={this.props.navigation} />
          <LoginForm navigation={this.props.navigation} />
        </View>
      </SafeAreaView>
    );
  }
}
