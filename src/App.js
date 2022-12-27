import React from 'react';
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Feed } from "./components/Feed";

import './App.css';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar/>
        <Feed />
      </div>
    </div>
  );
}

export default App;
