import logo from './logo.svg';
import './App.css';
import Presentation from'./components/presentation.js';

function Etudes(){
  return <ul>
              <li>2021-2024 : BUT MMI </li>
              <li>2019 : Bac S </li>
          </ul>
}
function Experiences_pro(){
  return  <div><h2>Mes expériences</h2>
          <ul>
              <li>2021 - 2022 : caissière</li>
          </ul></div>
}


function App() {
  return (
    <><Presentation/><Etudes/></>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
