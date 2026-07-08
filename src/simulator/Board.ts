import type { RobotPosition } from "../model/RobotType";
import type { BoardDimensions } from "../model/BoardType";

export class Board {
  dimensions: BoardDimensions = {
    x: process.env.x ? parseInt(process.env.x) : 5,
    y: process.env.y ? parseInt(process.env.y) : 5,
  };

  getBoardDimensions() {
    return this.dimensions;
  }

  isMoveValid = (newPosition: RobotPosition) => {
    return (
      0 <= newPosition.x &&
      newPosition.x < this.dimensions.x &&
      0 <= newPosition.y &&
      newPosition.y < this.dimensions.y
    );
  };
}
