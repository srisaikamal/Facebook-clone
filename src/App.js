import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Login from "./components/Login/Login";
function App() {
  if (localStorage.getItem("token")) {
    return (
      <>
        <div className="App">
          {/* Header */}
          <Header />
          <div className="app__body">
            {/* Sidebar */}
            <Sidebar />
            {/* feed */}
            <Feed />
            {/* Widgets */}
          </div>
        </div>{" "}
      </>
    );
  }

  return <Login />;
}

export default App;
