import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {Provider} from "react-redux";
import {store} from "./redux/Store";
import Routes from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
