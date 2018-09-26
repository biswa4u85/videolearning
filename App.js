import React, { Component } from 'react';
import RootRouter from './src/Router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from '@redux'
import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'

let store = null
const middleware = [thunk]
store = compose(applyMiddleware(...middleware))(createStore)(reducers)
let persistor = persistStore(store)

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootRouter />
        </PersistGate>
      </Provider>
    );
  }
}