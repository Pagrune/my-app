import logo from './logo.svg';
// import './App.css';
import './css/style.css';
import Presentation from'./components/presentation.js';
import Experience from './components/experience.js';
import Etudes from './components/etudes.js';
import Villes from './components/villes.js';
import Compteur from './components/compteur.js';
import Chat from './components/chat.js';




function App() {
  const villes = [
    {
        id :1,
        nom: 'Strasbourg',
        isMine : false
    },
    {
        id : 2,
        nom : 'Mulhouse',
        isMine : true
    },
    {
        id :3,
        nom : 'Paris',
        isMine : false
    }
  ]

  return (
    <>
      <Presentation/><Etudes/><Experience/><Villes villes={villes}/><Compteur/><Chat/>
   
    </>
   
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
