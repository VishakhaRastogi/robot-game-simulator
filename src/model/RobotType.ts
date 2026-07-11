export type Direction = "NORTH" | "EAST" | "SOUTH" | "WEST";
export type Commands = "PLACE" | "MOVE" | "LEFT" | "RIGHT" | "REPORT";
export type Rotate = "LEFT" | "RIGHT";

export type RobotPosition = {
  x: number;
  y: number;
  direction: Direction;
};
