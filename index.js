/**
 * @format
 */

import React from 'react'  // default
import {AppRegistry} from 'react-native';  // default
import App from './app/App';  // ./App으로 수정
import {name as ch4App2} from './app.json';
const MyComponentTest = () => <App />

AppRegistry.registerComponent(ch4App2, () => App);  // App으로 수정
