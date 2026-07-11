import {
  type RobotPosition,
  type Rotate,
  type Direction,
} from "../model/RobotType";

export class Robot {
  position: RobotPosition | null = null;

  moveRobot = () => {
    if (!this.position) return;
    switch (this.position.direction) {
      case "NORTH":
        this.position.y++;
        break;
      case "EAST":
        this.position.x++;
        break;
      case "SOUTH":
        this.position.y--;
        break;
      case "WEST":
        this.position.x--;
        break;
    }
    return this.position;
  };

  rotateRobot = (to: Rotate) => {
    if (!this.position) return;
    let rotation: Record<Rotate, Record<Direction, Direction>> = {
      LEFT: {
        NORTH: "WEST",
        EAST: "NORTH",
        SOUTH: "EAST",
        WEST: "SOUTH",
      },
      RIGHT: {
        NORTH: "EAST",
        EAST: "SOUTH",
        SOUTH: "WEST",
        WEST: "NORTH",
      },
    };

    this.position.direction = rotation[to][this.position.direction];
    this.updatePosition(
      this.position.x,
      this.position.y,
      this.position.direction,
    );
  };

  updatePosition = (x: number, y: number, direction: Direction) => {
    this.position = { x: x, y: y, direction: direction };
  };

  getPosition = () => {
    return this.position;
  };

  reportPosition = () => {
    if (this.position) {
      return (
        this.position.x +
        ", " +
        this.position.y +
        ", " +
        this.position.direction
      );
    }
    return "Robot is not placed yet.";
  };
}
