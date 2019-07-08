import { createBottomTabNavigator } from "react-navigation";
import ProposalScreen from "../containers/Proposal/index";
import SettingsScreen from "../containers/Settings/index";
import Icon from "react-native-vector-icons/FontAwesome5";
import React, { Component } from "react";

const BottomTabNav = createBottomTabNavigator(
  {
    Proposal: {
      screen: ProposalScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="cogs" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: "top",
    tabBarOptions: {
      scrollEnabled: true,
      activeTintColor: "#e91e63",
      tabStyle: {
        width: 100
      }
    }
  }
);

export default BottomTabNav;
