/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import "./config";
import DebugConfig from "./config/DebugConfig";
import React, { Component } from "react";
import { Provider } from "react-redux";
import RootContainer from "./containers/Root";
import {getStore , getPersistor} from "./redux";
import Reactotron from "reactotron-react-native";
import { PersistGate } from "redux-persist/integration/react";
import { SplashScreen } from './containers/Splash';

const store = getStore();
const persistor = getPersistor();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={SplashScreen} persistor={persistor}>
          <RootContainer />
        </PersistGate>
      </Provider>
    );
  }
}

// allow reactotron overlay for fast design in dev mode
export default (DebugConfig.useReactotron ? Reacotron.overlay(App) : App);
