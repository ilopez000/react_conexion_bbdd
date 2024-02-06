// src/App.js
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [coches, setCoches] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/coches')
      .then(response => {
        setCoches(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Listado de Coches</h1>
      <ul>
        {coches.map(coche => (
          <li key={coche.id}>{coche.marca} {coche.modelo} - {coche.km} km</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
