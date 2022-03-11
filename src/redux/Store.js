import {applyMiddleware, compose, createStore} from "redux";
import reducer from "./Reducer";
import thunk from "redux-thunk";
import logger from "redux-logger/src";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)));

export {store}
