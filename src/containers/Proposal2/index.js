import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";
import {
  Container,
  Tabs,
  ScrollableTab
} from "native-base";

import ProposalStep from "../../components/ProposalStep";

import { connect } from "react-redux";
import ProposalActions from "../../redux/ProposalRedux";
import ErrorScreen from "../Error";
import { isNil } from "ramda";

class ProposalView extends Component {
  componentDidMount() {
    console.log("inside comp did mount proposal/index");
    if (!isNil(this.props.userID)) {
      this.props.getProposalInfo(this.props.userID);
      console.log("here i am");
    } else {
      this.props.getProposalInfo(null);
    }
  }

  render() {
    console.log("inside render proposal/index");

    if (this.props.processing || this.props.processing === null) {
      return (
        <View
          style={{
            flex: 1,
            paddingVertical: 250,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <ActivityIndicator size="large" color="#ba1c40" />
        </View>
      );
    }

    if (this.props.error) {
      return <ErrorScreen />;
    }

    return (
      <Container>
          <ProposalStep
            proposalInfo={this.props.proposalInfo}
            userID={this.props.userID}
            submitProposal={this.props.setProposalInfo}
          />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  userID: state.auth.userID,
  proposalInfo: state.proposal.proposaldata,
  processing: state.proposal.processing,
  error: state.proposal.error
});

const mapDispatchToProps = dispatch => ({
  getProposalInfo: userID => dispatch(ProposalActions.proposalRequest(userID)),
  setProposalInfo: (userID, proposalInfo) =>
    dispatch(ProposalActions.proposalUpdate(userID, proposalInfo))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProposalView);
