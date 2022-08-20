import Table from "./Table";
import Input from "./Input";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input />
        <button type="button" class="btn btn-info">Create</button>

        <Table />
      </header>
    </div>
  );
}

export default App;
