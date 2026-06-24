import { useState } from "react";
import type { BoardDimensions } from "./Board";

type InputPanelProps = {
  boardDimensions: BoardDimensions;
  updateRobotState: Function;
};

function InputPanel(props: InputPanelProps) {
  let { boardDimensions, updateRobotState } = props;
  let commands = ["PLACE", "MOVE"];
  let directions = ["NORTH", "EAST", "SOUTH", "WEST"];
  let xValues = Array.from({ length: boardDimensions.x }, (_, index) => index);
  let yValues = Array.from({ length: boardDimensions.y }, (_, index) => index);

  const [selectedCommand, setSelectedCommand] = useState("");

  const [selectedX, setSelectedX] = useState("");
  const [selectedY, setSelectedY] = useState("");
  const [selectedDirection, setSelectedDirection] = useState("");

  const onChangeCommand = (event: any) => {
    console.log(event);
    setSelectedCommand(event.target.value);
  };

  const placeArgs = () => {
    const onChangeX = (event: any) => {
      console.log(event);
      setSelectedX(event.target.value);
    };
    const onChangeY = (event: any) => {
      console.log(event);
      setSelectedY(event.target.value);
    };
    const onChangeDirection = (event: any) => {
      console.log(event);
      setSelectedDirection(event.target.value);
    };
    return (
      <>
        <div className="field field-x">
          <label>X</label>
          <select defaultValue={selectedX} onChange={onChangeX}>
            <option value={""} disabled selected hidden>
              Please select value of x
            </option>
            {xValues.map((x) => {
              return <option value={x}>{x}</option>;
            })}
          </select>
        </div>
        <div className="field field-y">
          <label>Y</label>
          <select defaultValue={selectedY} onChange={onChangeY}>
            <option value={""} disabled selected hidden>
              Please select value of y
            </option>
            {yValues.map((y) => {
              return <option value={y}>{y}</option>;
            })}
          </select>
        </div>
        <div className="field field-direction">
          <label>Direction</label>
          <select defaultValue={selectedDirection} onChange={onChangeDirection}>
            <option value={""} disabled selected hidden>
              Please select direction
            </option>
            {directions.map((direction) => {
              return <option value={direction}>{direction}</option>;
            })}
          </select>
        </div>
        <button
          onClick={() =>
            updateRobotState(selectedX, selectedY, selectedDirection)
          }
        >
          Done
        </button>
      </>
    );
  };

  const showArgs = () => {
    switch (selectedCommand) {
      case commands[0]:
        return placeArgs();
      default:
        return <></>;
    }
  };

  return (
    <>
      <section id="InputPanel">
        <div className="field field-command">
          <label>Command</label>
          <select defaultValue={selectedCommand} onChange={onChangeCommand}>
            <option value={""} disabled selected hidden>
              Please select command
            </option>
            {commands.map((cmd) => {
              return <option value={cmd}>{cmd}</option>;
            })}
          </select>
        </div>
        {showArgs()}
      </section>
    </>
  );
}

export default InputPanel;
