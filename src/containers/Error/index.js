import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

import Header from "../../components/Header";
import { SafeAreaView } from "react-navigation";

export default class ErrorScreen extends Component {
  
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Oops there seems to be something wrong ! </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "black"
  }
});
