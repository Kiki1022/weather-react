import React from 'react'

const API = {
  key: "bca53e1784fdcb9782e4f44bc75ca9a6", 
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {

  const dateBuilder = (d) => {
    let months = []
    let days = []
  }
  return (
    <div className="app">
     <main>
        <div className="search-box">
          <input 
          type="text"
          className="search-bar"
          placeholder="Search..."
          />
        </div> 
        <div className="location-box">
        <div className="location">New York City, US</div>
        <div className="date">(dateBuilder(new Date()))</div>
        </div>

     </main>
    </div>
  );
}

export default App;
