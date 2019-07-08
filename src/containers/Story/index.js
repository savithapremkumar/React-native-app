import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

type Props = { navigation : Object};
export default class Story extends Component<Props> {
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam("title", "Default");
    const content = navigation.getParam("content", "Lorem ipsum.....");
    return (
      <View>
        <Card style={styles.default}>
          <Card.Cover
            source={require("../../assets/images/sharestory.png")}
          />
          <Card.Content>
            <Title style={styles.title}>{title}</Title>
            <Paragraph style={styles.para}>{content}</Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    backgroundColor: "white",
    marginTop: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "500"
  },
  para: {
    marginTop: 10,
    fontSize: 20
  }
});
