/**
 * @format
 */

import React from 'react'  //추가
import {AppRegistry} from 'react-native';
import App from './app/App';  // ./App으로 수정
import {name as appName} from './app.json';
// const TodoApp = () => <App />  // 추가

AppRegistry.registerComponent(appName, () => App);  // App으로 수정
