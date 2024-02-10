import React from 'react'
import './App.css';

import AppComponent from './map.js';

//const appId = 'BWnU5bq4LjZbHTokK91Q';
const apiKey = '5YgYB1Se3gtaza3y7W3Q6Tm1gyEjRfZUHlac1QaYK4g';


function App() {

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    })
  })

  return (
    <div className="App">
      <AppComponent />
    </div>
  );
}

export default App;