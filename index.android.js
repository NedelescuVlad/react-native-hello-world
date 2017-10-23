/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import codePush from "react-native-code-push";
import {
  AppRegistry,
  WebView
} from 'react-native';

class ViagogoWeb extends Component {
  render() {
    return <WebView source={{uri: 'https://www.viagogo.co.uk/'}} />
  }
}

export default ViagogoWeb;

ReactNativeHelloWorld = codePush(ViagogoWeb);
AppRegistry.registerComponent('ReactNativeHelloWorld', () => ReactNativeHelloWorld);