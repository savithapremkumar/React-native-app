import React, { Component } from "react";
import { Platform, View } from "react-native";
//import AppBar from '../../components/AppBar';
import Content from "./Content";
import Header from "../../components/Header";
import { SafeAreaView } from "react-navigation";

type Props = {};
export default class HomeScreen extends Component<Props> {
  static navigationOptions = {
    title: "Home",
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          {/* <AppBar></AppBar> */}
          <Header navigation={this.props.navigation} />
          <Content navigation={this.props.navigation} />
        </View>
      </SafeAreaView>
    );
  }
}
