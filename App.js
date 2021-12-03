import React from 'react';
import { Provider } from "react-redux";
import RootStack from './navigators/RootStack';
import configureStore from './src/store/configureStore';

const store = configureStore({});

export default function App() {
  return <Provider store={store}><RootStack /></Provider>;
}


