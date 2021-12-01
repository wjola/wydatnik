import "react-dates/initialize";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/main.scss";
import "react-dates/lib/css/_datepicker.css";
import "./styles/react_dates_overrides.css";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/store";
import PageLoader from "./components/PageLoader";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.getState().user
  ? ReactDOM.render(jsx, document.getElementById("app"))
  : ReactDOM.render(<PageLoader />, document.getElementById("app"));
