import logo from './logo.svg';
// import './App.css';
import './css/style.css';
import Presentation from'./components/presentation.js';
import Experience from './components/experience.js';
import Etudes from './components/etudes.js';


function App() {
  return (
    <><Presentation/><Etudes/><Experience/></>
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
