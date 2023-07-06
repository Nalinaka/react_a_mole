import {useState} from 'react';
import './App.css';
import MoleContainer from './Components/MoleContainer.js'

function App() {
  let [score, setScore] = useState(0)
  
  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push (
        <MoleContainer key={i} setScore={setScore} score={score} />
      )
      
    }
    return (
      <div >
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
        <h1>React-A-Mole!!</h1>
        {score}
        {createMoleHill()}
      
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