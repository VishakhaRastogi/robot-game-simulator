import "./App.css";
import Board from "./components/Board";
import InputPanel from "./components/InputPanel";
import OutputPanel from "./components/OutputPanel";

function App() {
  return (
    <>
      Robot Game
      <InputPanel />
      <Board />
      <OutputPanel />
    </>
  );
}

export default App;
