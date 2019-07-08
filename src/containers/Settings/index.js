import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { List } from "react-native-paper";

import Header from "../../components/Header";
import { SafeAreaView } from "react-navigation";

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView>
        <View>
          <Header navigation={this.props.navigation} />
          <List.Section>
            <List.Subheader>Some title</List.Subheader>
            <List.Item
              title="First Item"
              left={() => <List.Icon icon="folder" />}
            />
            <List.Item
              title="Second Item"
              left={() => <List.Icon color="#000" icon="folder" />}
            />
          </List.Section>
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
