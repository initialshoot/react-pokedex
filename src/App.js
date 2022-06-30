import Navbar from "./components/navbar";
import Pokedex from "./components/pokedex";
import Search from "./components/search";

function App() {
  return (
    <div>

      <Navbar />

      <div className="App">
          <Search />
          <Pokedex />
      </div>
    </div>
    
  );
}

export default App;
