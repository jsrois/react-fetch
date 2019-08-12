import * as ReactDOM from "react-dom";
import * as React from "react";
import { App } from "./components/app";
import "./styles.scss";
import { GenderizeIOApi } from "./components/GenderApi";

ReactDOM.render(<App genderApi={new GenderizeIOApi()} />, document.getElementById("app"));
