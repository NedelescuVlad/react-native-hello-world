/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import codePush from "react-native-code-push";
import {
  AppRegistry,
  WebView,
  BackAndroid
} from 'react-native';

class ViagogoWeb extends Component {
  state = {};

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.backHandler);
    this.setState({
      backButtonEnabled: true
    });
  }

  componentWillUnmount() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    })
    this.setState({
      backButtonEnabled: false
    })
    BackAndroid.removeEventListener('hardwareBackPress', this.backHandler);
  }

  backHandler = () => {
    if (this.state.backButtonEnabled) {
      this.refs["vgg_webview"].goBack();
      return true;
    }
  }

  render() {
    return <WebView 
            ref={"vgg_webview"}
            source={{uri: 'https://www.viagogo.co.uk/'}} />
  }
}

export default ViagogoWeb;

ReactNativeHelloWorld = codePush(ViagogoWeb);
AppRegistry.registerComponent('ReactNativeHelloWorld', () => ReactNativeHelloWorld);
