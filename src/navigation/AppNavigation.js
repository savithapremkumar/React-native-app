import { Icon } from "react-native-elements";
import {
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer,
  DrawerItems
} from "react-navigation";
import HomeNavigation from "./HomeNavigation";
import ProfileScreen from "../containers/Profile/index";
import SettingsScreen from "../containers/Settings/index";
import LoginScreen from "../containers/Login/index";
import AuthLoadingScreen from "../containers/AuthLoading/index";
import CustomDrawerNavigator from "../components/DrawerNavigator";
import { Constants } from "../styles/shared/index";
import React from "react";

const AppStack = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />,
        drawerLabel: "Home"
      },
      screen: HomeNavigation
    },
    Profile: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => <Icon name="person" color={tintColor} />,
        drawerLabel: "Profile"
      },
      screen: ProfileScreen
    },
    Settings: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => ( 
          <Icon name="settings" color={tintColor} />
        ),
        drawerLabel: "Settings"
      },
      screen: SettingsScreen
    }
  },
  {
    contentComponent: props => <CustomDrawerNavigator {...props} />,
    drawerPosition: "right",
    //drawerBackgroundColor: 'black',
    drawerWidth: Constants.screenWidth - 130,
    contentOptions: {
      activeTintColor: "#ba1c40"
    }
  }
);
const AuthStack = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />,
        drawerLabel: "Home"
      },

      screen: HomeNavigation
    },
    Login: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="exit_to_app" color={tintColor} />
        ),
        drawerLabel: "Login"
      },
      screen: LoginScreen
    }
  },
  {
    //contentComponent: props => <CustomDrawerNavigator {...props} />,
    drawerPosition: "right",
    //drawerBackgroundColor: 'black',
    drawerWidth: Constants.screenWidth - 130,
    contentOptions: {
      activeTintColor: "#ba1c40"
    }
  }
);

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);


export default createAppContainer(AppNavigator);
