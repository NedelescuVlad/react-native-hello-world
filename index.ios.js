/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import codePush from "react-native-code-push";
import {
  AppRegistry,
  BackHandler
} from 'react-native';
import WebView from './js/WebView.ios';


const DEFAULT_URL = 'https://www.viagogo.co.uk/';

class ViagogoWeb extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }

  render() {
    return <WebView
    style = {
      {
        marginTop: 20
      }
    }
    source = {
      {
        uri: DEFAULT_URL
      }
    }
    />
  }
}

export default ViagogoWeb;

ReactNativeHelloWorld = codePush(ViagogoWeb);
AppRegistry.registerComponent('ReactNativeHelloWorld', () => ReactNativeHelloWorld);