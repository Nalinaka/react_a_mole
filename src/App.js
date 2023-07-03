import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Mole from './Mole.js'
// import MoleContainer from './MoleContainer.js'

function MoleContainer(props){
  return (
      <div>
          <h2> Mole Container </h2>
          <Mole />
      </div>
  )
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }