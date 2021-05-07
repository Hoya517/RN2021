/**
 * @format
 */

import React from 'react'  //추가
import {AppRegistry} from 'react-native';
import MyComponent from './app/MyComponent';  // ./MyComponent로 수정
import {name as appName} from './app.json';
// const TodoApp = () => <App />  // 추가

AppRegistry.registerComponent(appName, () => MyComponent);  // MyComponent로 수정
