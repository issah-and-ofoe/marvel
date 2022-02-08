import logo from './logo.svg';
import './App.css';
import MarvelCharactersProvider from './context/MarvelCharacters';
import MarvelHome from './pages/Home';

function App() {
  return (
    <div className="App">
     <MarvelCharactersProvider>
       <MarvelHome/>
     </MarvelCharactersProvider>
    </div>
  );
}

export default App;
