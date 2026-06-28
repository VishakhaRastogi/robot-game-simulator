import { useState } from "react";
import type { BoardDimensions } from "./Board";
import type { RobotState } from "../App";

type InputPanelProps = {
  boardDimensions: BoardDimensions;
  updateRobotState: Function;
  robotState: null | RobotState;
};

function InputPanel(props: InputPanelProps) {
  let { boardDimensions, updateRobotState, robotState } = props;
  let commands = ["PLACE", "MOVE"];
  let directions = ["NORTH", "EAST", "SOUTH", "WEST"];
  let xValues = Array.from({ length: boardDimensions.x }, (_, index) => index);
  let yValues = Array.from({ length: boardDimensions.y }, (_, index) => index);

  const [selectedCommand, setSelectedCommand] = useState("");

  const [placeArgs, setPlaceArgs] = useState<null | Partial<RobotState>>(null);

  const onChangeCommand = (event: any) => {
    setSelectedCommand(event.target.value);
    setPlaceArgs(null);
  };

  const showPlaceArgs = () => {
    const onChangeValue = (event: any) => {
      let name = event.target.name;
      let value = event.target.value;
      if (name == "x" || name == "y") value = parseInt(value);
      setPlaceArgs((prev) => {
        if (prev) return { ...prev, [name]: value };
        else return { [name]: value };
      });
    };

    return (
      <>
        <div className="field field-x">
          <label>X</label>
          <select
            name="x"
            defaultValue={placeArgs?.x || ""}
            onChange={onChangeValue}
          >
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
          <select name="y" defaultValue={placeArgs?.y} onChange={onChangeValue}>
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
          <select
            name="direction"
            defaultValue={placeArgs?.direction}
            onChange={onChangeValue}
          >
            <option value={""} disabled selected hidden>
              Please select direction
            </option>
            {directions.map((direction) => {
              return <option value={direction}>{direction}</option>;
            })}
          </select>
        </div>
      </>
    );
  };

  const isInputPending = () => {
    switch (selectedCommand) {
      case commands[0]:
        return (
          !placeArgs || !placeArgs?.x || !placeArgs?.y || !placeArgs?.direction
        );
      case commands[1]:
        if (!robotState) {
          alert("Robot is not yet placed !!!");
          return true;
        }
        return false;
      default:
        return true;
    }
  };

  const showArgs = () => {
    switch (selectedCommand) {
      case commands[0]:
        return showPlaceArgs();
      case commands[1]:
      default:
        return <></>;
    }
  };

  const handleCommand = () => {
    switch (selectedCommand) {
      case commands[0]:
        if (placeArgs && placeArgs.x && placeArgs.y && placeArgs.direction)
          updateRobotState(placeArgs.x, placeArgs.y, placeArgs.direction);
        break;
      case commands[1]:
        if (!robotState) {
          alert("Robot is not yet placed !!!");
          break;
        }
        switch (robotState.direction) {
          case directions[0]: //north
            {
              let newY = robotState.y + 1;
              if (newY < boardDimensions.y) {
                updateRobotState(robotState.x, newY, robotState.direction);
              } else {
                alert("Invalid attempt !!!");
              }
            }
            break;
          case directions[1]: //east
            {
              let newX = robotState.x + 1;
              if (newX < boardDimensions.x) {
                updateRobotState(newX, robotState.y, robotState.direction);
              } else {
                alert("Invalid attempt !!!");
              }
            }
            break;
          case directions[2]: //south
            {
              let newY = robotState.y - 1;
              if (0 <= newY) {
                updateRobotState(robotState.x, newY, robotState.direction);
              } else {
                alert("Invalid attempt !!!");
              }
            }
            break;
          case directions[3]:
            {
              //west
              let newX = robotState.x - 1;
              if (0 <= newX) {
                updateRobotState(newX, robotState.y, robotState.direction);
              } else {
                alert("Invalid attempt !!!");
              }
            }
            break;
        }
        break;
      default:
        alert("Invalid attempt !!!");
    }
  };

  return (
    <>
      <section id="InputPanel">
        <div className="field field-command">
          <label>Command</label>
          <select
            name="command"
            defaultValue={selectedCommand}
            onChange={onChangeCommand}
          >
            <option value={""} disabled selected hidden>
              Please select command
            </option>
            {commands.map((cmd) => {
              return <option value={cmd}>{cmd}</option>;
            })}
          </select>
        </div>
        {showArgs()}
        <button disabled={isInputPending()} onClick={handleCommand}>
          Done
        </button>
      </section>
    </>
  );
}

export default InputPanel;
