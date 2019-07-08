import React, { Component } from "react";
import styles from "../styles/containers/Proposal/proposal";
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
    console.log("hello i am props", props.proposalInfo);
    this.state = {
      proposalSteps: props.proposalInfo
    };
    console.log("hello i am state", this.state.proposalSteps);
  }

  updateItem(id, fieldid,value) {
    console.log("update item called")
    var index = this.state.proposalSteps.findIndex(x=> x.id === id);
    if (index === -1){
            //handle error
    }
    else{
      let itemAttributes = Object.assign({}, this.state.proposalSteps[index].content[fieldid], {'fieldValue':value});
      console.log(itemAttributes);
      this.setState({
        proposalSteps: [
           ...this.state.proposalSteps.slice(0,index),
           Object.assign({}, this.state.proposalSteps[index], value),
           ...this.state.proposalSteps.slice(index+1)
        ]
      });

      console.log('update item end',this.state.proposalSteps)

    }
      
  }

  onFieldChange = (value, stepid, fieldid) => {
    console.log(
      "thambi tea innum varala",
      value,
      stepid,
      fieldid,
      this.state.proposalSteps
    );
    this.updateItem(stepid,fieldid, value)
    // let updatedProposal = this.state.proposalSteps.slice();
    // console.log("upd proposal", updatedProposal, value);
    // updatedProposal[0].content[0].fieldName = "koko";
    // console.log(
    //   "upd proposal set value",
    //   updatedProposal[0].content[0].fieldName
    // );
    // this.setState({
    //   proposalSteps: {
    //     updatedProposal
    //   }
    // });
    // console.log("state", this.state.proposalSteps);
    //this.props.submitProposal(this.props.userID, updatedProposal)
  };

  onProposalSubmit = () => {
    //Need to modify this to make it work
    this.props.submitProposal(this.props.userID, this.state.proposalSteps);
  };

  render() {
    console.log(this.state.proposalSteps);

    const steps = () => {
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
      console.log("inside generate proposal cards");
      let cards;
      cards = (
        <View>
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
      console.log("inside generate field", item.stepID);
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
                  this.onFieldChange(value, item.stepID, item.fieldID)
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
