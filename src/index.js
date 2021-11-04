import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import userReducers from "./features/user"

const store = configureStore({
    reducer:{
        user: userReducers
    }
})

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store} >
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
