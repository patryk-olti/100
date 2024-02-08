import React from 'react';
import './App.css';

function App() {

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    })
  })

  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
