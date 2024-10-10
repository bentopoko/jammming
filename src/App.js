import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Search from "./buttons/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>JaMMMing</h2>
      </header>
      <SearchBar />
      <Search />
    </div>
  );
}

export default App;
