// import React, { Component } from "react";
// import "./App.css";
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//       </div>
//     );
//   }
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import Smurfs from "./Smurfs";
import AddSmurf from "./AddSmurf";

function App() {
  return (
    <Router>
      <div>
        <ul className='navigation'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addsmurf">Add Smurf</Link>
          </li>
        </ul>
        <Route exact path="/" component={Smurfs} />
        <Route path="/addsmurf" component={AddSmurf} />
        
      </div>
      </Router>
    );
  }
    
  


export default App;