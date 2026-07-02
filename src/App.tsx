import { useState } from "react";
import "./App.css";
import Board, { type BoardDimensions } from "./components/Board";
import InputPanel from "./components/InputPanel";
import OutputPanel from "./components/OutputPanel";

export type Direction = "NORTH" | "EAST" | "SOUTH" | "WEST";
export type RobotState = {
  x: number;
  y: number;
  direction: Direction;
};

function App() {
  const [robotSate, setRobotSate] = useState<null | RobotState>(null);
  const dimensions: BoardDimensions = {
    x: 5,
    y: 5,
  };

  const onUpdateRobotState = (x: number, y: number, direction: Direction) => {
    setRobotSate({ x: x, y: y, direction: direction });
  };

  return (
    <>
      Robot Game
      <InputPanel
        boardDimensions={dimensions}
        updateRobotState={onUpdateRobotState}
        robotState={robotSate}
      />
      <Board dimensions={dimensions} robot={robotSate} />
      <OutputPanel />
    </>
  );
}

export default App;
