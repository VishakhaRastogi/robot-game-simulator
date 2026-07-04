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
  const [message, setMessage] = useState<string>("");
  const dimensions: BoardDimensions = {
    x: 5,
    y: 5,
  };

  const onUpdateRobotState = (x: number, y: number, direction: Direction) => {
    setRobotSate({ x: x, y: y, direction: direction });
    updateMessage("");
  };

  const updateMessage = (msg: string) => {
    setMessage(msg);
  };

  const onReport = () => {
    if (!robotSate) setMessage("Robot is not placed yet.");
    else {
      let msg = robotSate.x + ", " + robotSate.y + ", " + robotSate.direction;
      setMessage(msg);
    }
  };

  return (
    <>
      Robot Game
      <InputPanel
        boardDimensions={dimensions}
        updateRobotState={onUpdateRobotState}
        robotState={robotSate}
        onReport={onReport}
        updateMessage={updateMessage}
      />
      <Board dimensions={dimensions} robot={robotSate} />
      <OutputPanel message={message} />
    </>
  );
}

export default App;
