import { BrowserRouter as Router} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
//component file
import TodoContainer from "./functionBased/components/TodoContainer";

//stylesheet
import "./functionBased/components/App.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
