import React, { Component } from 'react';
import { Image} from 'react-native';
import { Common } from '../styles/shared/index';


function AppLogo(props) {
      return (
        <Image
          source={require('../assets/images/logo.png')}
          style={Common.logo}
        />
      );
    }
    export default AppLogo;
  