import React from 'react';
import {Routes, Route} from "react-router-dom";

import {Header} from "../src/backend/Components/Header";
import {Home} from "../src/backend/Pages/Home";

import "./backend/styles/app.scss";
import "./backend/styles/utils.scss";
import "./backend/styles/header.scss";

function App() {
  return (
    <div className="App">
      
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />;


      </Routes>

    </div>
  );
}

export default App;
