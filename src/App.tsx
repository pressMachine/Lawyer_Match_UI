import React, { useState } from 'react';
import './App.css';
import axios from "axios";


function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  const [name, setName] = useState("strer");
  return (
    <div className="App">
      <button>PotvrdiDugme</button>
      <input type = "text"></input>
    </div>
  );
}

export default App;
