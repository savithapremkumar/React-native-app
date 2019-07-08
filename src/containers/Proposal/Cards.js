import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
  Picker, Dimensions
} from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";

type Props = {};
class Cards extends Component<Props> {
 
  componentDidMount() {
    
    this.setState({
      isLoading: false,
      dataSource: [
        {
          fieldType: "Text",
          fieldLabel: "Project title",
          mandatory: "yes",
          fieldValue: "testing"
        },
        {
          fieldType: "Text",
          fieldLabel: "Project title",
          mandatory: "yes",
          fieldValue: "testing"
        },{
            fieldType: "Picker",
            fieldLabel: "Project title",
            mandatory: "yes",
            fieldValue: "testing2222"
          },
          {
            fieldType: "Text",
            fieldLabel: "Project title",
            mandatory: "yes",
            fieldValue: "testing22"
          }
      ]
    });
  }
  render() {
    if (this.props.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View >
        <FlatList
          data={this.state.dataSource}
          horizontal={true}
          renderItem={({ item }) => (
            <Card style={{ width:Dimensions.get('window').width }}>
              <Card.Content>
                <Title>Test</Title>
                <Text>{item.fieldLabel}</Text>
                {item.fieldType === "Text" ? (
                  <TextInput
                    style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                    value={item.fieldValue}
                  />
                ) : (
                  <Picker style={{ height: 50, width: 100 }}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker>
                )}
              </Card.Content>
            </Card>
          )}
        />
      </View>
    );
  }
}

export default Cards;
