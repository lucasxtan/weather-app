import React from 'react';
import './App.css';

const api = {
  key: "59ab30a93ba5f064e22240a79c4a3edc",
  base: "https://api.openweathermap.org/data/2.5"
};

function App() {
  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            />
        </div>
      </main>
    </div>
  );
}

export default App;
