import { Route, Routes } from "react-router-dom";
import "./App.css";
import MarvelCharactersProvider from "./context/MarvelCharacters";
import MarvelHome from "./pages/Home";

function App() {
  return (
    <div className="App">
      <MarvelCharactersProvider>
        <Routes>
          <Route path="/" element={<MarvelHome />} />
        </Routes>
      </MarvelCharactersProvider>
    </div>
  );
}

export default App;
