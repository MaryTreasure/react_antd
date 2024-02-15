import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { ConfigProvider } from "antd";

function App() {
  return (
    <div className="App">
      <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
        <HomePage />
      </ConfigProvider>
    </div>
  );
}

export default App;
