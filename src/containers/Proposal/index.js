import React, { Component } from "react";
import { View} from "react-native";
import Cards from './Cards'



type Props = {};
export default class ProposalScreen extends Component<Props> {
  static navigationOptions = {
    title: ""
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {/* <AppBar></AppBar> */}
        <Cards navigation={this.props.navigation} />
      </View>
    );
  }
}
