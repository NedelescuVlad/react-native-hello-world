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
  BackHandler
} from 'react-native';

const DEFAULT_URL = 'https://www.viagogo.co.uk/';
const WEBVIEW_REF = 'vgg_webview';

class ViagogoWeb extends Component {
  constructor(props) {
    super(props)
    this.state = { canGoBack: false }
  }
  
  _onNavigationStateChange(navState) {
    this.state.canGoBack = navState.canGoBack;
  }

  componentDidMount() {
     codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });

    BackHandler.addEventListener('hardwareBackPress', this.hardwareBack.bind(this));
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.hardwareBack);
  }

  hardwareBack() {
    if (this.state.canGoBack) {
        this.goBack();
        return true;
      }
    return false;
  }

  goBack() {
    this.refs[WEBVIEW_REF].goBack();
  }

  render() {
    return <WebView 
            ref={WEBVIEW_REF}
            onNavigationStateChange={this._onNavigationStateChange.bind(this)}
            source={{uri: DEFAULT_URL}} />
  }
}

export default ViagogoWeb;

ReactNativeHelloWorld = codePush(ViagogoWeb);
AppRegistry.registerComponent('ReactNativeHelloWorld', () => ReactNativeHelloWorld);
