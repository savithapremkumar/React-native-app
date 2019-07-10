import React, { Component } from "react";
import styles from "../styles/containers/Proposal/proposal";
import update from "immutability-helper";

import {
  Button,
  Icon,
  Tabs,
  Tab,
  TabHeading,
  Right,
  Left,
  Body,
  ScrollableTab,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Text,
  Input,
  Item,
  Picker,
  ListItem,
  CheckBox,
  Radio,
  DatePicker,
  Content
} from "native-base";

export default class ProposalStep extends Component {
  constructor(props) {
    console.log("inside proposal step");
    super(props);
    this.state = {
      proposalSteps: props.proposalInfo
    };
  }

  updateItem = (id, fieldid, value) => {
    console.log("update item called");
    const stepIndex = id - 1;
    const fieldIndex = fieldid - 1;
    var index = this.state.proposalSteps.findIndex(x => x.id === id);
    if (index === -1) {
      console.log("index", index, stepIndex, fieldIndex);
      //handle error
    } else {
      const proposalSteps = this.state.proposalSteps;
      const updatedProposal = update(proposalSteps, {
        [stepIndex]: {
          content: { [fieldIndex]: { fieldValue: { $set: value } } }
        }
      });
      console.log("newcollection", updatedProposal);
      this.setState({
        proposalSteps: updatedProposal
      });

      console.log("update item end", this.state.proposalSteps);
    }
  };

  onFieldChange = (value, stepid, fieldid, selectedVal) => {
    console.log(
      "thambi tea innum varala",
      value,
      stepid,
      fieldid,
      selectedVal,
      this.state.proposalSteps
    );
    this.updateItem(stepid, fieldid, value);
  };

  onProposalSubmit = () => {
    //Need to modify this to make it work
    this.props.submitProposal(this.props.userID, this.state.proposalSteps);
  };

  render() {
    const steps = () => {
      console.log("inside render", this.state.proposalSteps);
      let tabs;
      tabs = this.state.proposalSteps.map(stepInfo => (
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#fff" }}>
              <Text style={{ color: "#ba1c40", fontWeight: "bold" }}>
                {stepInfo.title}
              </Text>
            </TabHeading>
          }
          key={stepInfo.id}
        >
          {generateProposalCards(stepInfo.content)}
        </Tab>
      ));

      return tabs;
    };
    const generateProposalCards = data => {
      console.log("inside generate proposal cards", data);
      let cards;
      let deckSwiper = "";
      if (data) {
        deckSwiper = (
          <View>
            <DeckSwiper
              ref={c => (this._deckSwiper = c)}
              dataSource={data} 
              renderEmpty={() => (
                <View style={{ alignSelf: "center" }}>
                  <Text>Over</Text>
                </View>
              )}
              renderItem={item => (
                <Card style={{ elevation: 3, paddingVertical: 50 }}>
                  <Content
                    padder
                    contentContainerStyle={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <CardItem>
                      <Text>{item.fieldName}</Text>
                    </CardItem>
                    <CardItem cardBody>{generateField(item)}</CardItem>
                  </Content>
                </Card>
              )}
            />
          </View>
        );
      }
      cards = (
        <View>
          {deckSwiper}
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              position: "relative",
              top: 250,
              left: 0,
              right: 0,
              justifyContent: "space-between",
              padding: 15
            }}
          >
            <Button
              style={{ backgroundColor: "#ba1c40" }}
              iconLeft
              onPress={() => this._deckSwiper._root.swipeLeft()}
            >
              <Icon name="arrow-back" />
              <Text>Swipe Left</Text>
            </Button>
            <Button
              style={{ backgroundColor: "#ba1c40", paddingLeft: 10 }}
              iconRight
              onPress={() => this._deckSwiper._root.swipeRight()}
            >
              <Icon name="arrow-forward" />
              <Text>Swipe Right</Text>
            </Button>
          </View>
        </View>
      );

      return cards;
    };
    const generateField = item => {
      console.log(
        "inside generate field",
        item.stepID,
        item.fieldType,
        item.fieldValue,
        item.stepID
      );
      switch (item.fieldType) {
        case "Text":
          // let updatedTextField = this.state.textField.slice();
          // updatedTextField.push({stepdID : stepid , fieldID : item.fieldID})
          // this.setState({
          //   textField: updatedTextField
          // });
          return (
            <Input
              style={styles.textInput}
              value={item.fieldValue}
              onChangeText={value =>
                this.onFieldChange(value, item.stepID, item.fieldID)
              }
            />
          );

        case "Picker":
          return (
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="You are applying as"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={item.fieldValue}
                onValueChange={value =>
                  this.onFieldChange(
                    value,
                    item.stepID,
                    item.fieldID,
                    this.selectedValue
                  )
                }
              >
                <Picker.Item label="Individual" value="key0" />
                <Picker.Item label="Family" value="key1" />
                <Picker.Item label="Group" value="key2" />
              </Picker>
            </Item>
          );
        case "Checkbox":
          return (
            <Content>
              <ListItem>
                <CheckBox
                  checked={true}
                  onPress={value =>
                    this.onFieldChange(value, item.stepID, item.fieldID)
                  }
                />
                <Body>
                  <Text>{item.fieldValue}</Text>
                </Body>
              </ListItem>
            </Content>
          );
        case "Radio":
          return (
            <Content>
              <ListItem>
                <Left>
                  <Text>{item.fieldItems[0].label}</Text>
                </Left>
                <Right>
                  <Radio
                    selected={item.fieldItems[0].value || false}
                    onPress={value =>
                      this.onFieldChange(value, item.stepID, item.fieldID)
                    }
                  />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>{item.fieldItems[1].label}</Text>
                </Left>
                <Right>
                  <Radio
                    selected={item.fieldItems[1].value || false}
                    onPress={value =>
                      this.onFieldChange(value, item.stepID, item.fieldID)
                    }
                  />
                </Right>
              </ListItem>
            </Content>
          );

        case "Datepicker":
          let date = new Date();
          return (
            <Content>
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                textStyle={{ color: "#ba1c40" }}
                placeHolderTextStyle={{ color: "#ba1c40" }}
                onDateChange={value =>
                  this.onFieldChange(value, item.stepID, item.fieldID)
                }
                disabled={false}
              />
              <Text>Date: {date.toString().substr(4, 12)}</Text>
            </Content>
          );

        default:
          return <Text>Sorry, I couldn't interpret that one</Text>;
      }
    };
    console.log("inside  render of proposal");
    return (
      <Tabs
        tabBarUnderlineStyle={{ backgroundColor: "#ba1c40" }}
        renderTabBar={() => <ScrollableTab />}
      >
        {steps()}
      </Tabs>
    );
  }
}