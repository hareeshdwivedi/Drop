import React from "react";
import "./style.css";
import Dashboard from "./components/Dashboard";
import Sider from "./Sider";

const App = () => {
  return (
    <div className="Main-container">
      <div className="container">
        <Sider /> 
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
