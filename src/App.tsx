import "./App.css";
import Board from "./components/Board";
import InputPanel from "./components/InputPanel";
import OutputPanel from "./components/OutputPanel";

function App() {
  const boardDimensions = {
    x: 5,
    y: 5,
  };

  return (
    <>
      Robot Game
      <InputPanel />
      <Board x={boardDimensions.x} y={boardDimensions.y} />
      <OutputPanel />
    </>
  );
}

export default App;
