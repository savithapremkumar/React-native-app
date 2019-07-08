import React, { Component } from "react";
import { View, StatusBar , Alert} from "react-native";
import AppNavigation from "../navigation/AppNavigation";
import { connect } from "react-redux";
import StartupActions from "../redux/StartupRedux";
import ReduxPersist from "../config/ReduxPersist";

// Styles
import styles from "../styles/containers/Root/root";

class RootContainer extends Component {
  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup();
    }
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" backgroundColor="#ba1c40" />
        <AppNavigation />
      </View>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup())
});

export default connect(
  null,
  mapDispatchToProps
)(RootContainer);
