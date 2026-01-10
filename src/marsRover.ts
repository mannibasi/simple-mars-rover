import { Orientation } from "./orientation";
import { Position } from "./position";

type RoverAction = (pos: Position) => Position;

export class MarsRover {
  private static readonly GRID_SIZE = 9;
  private position: Position;

  private readonly commands: Record<string, RoverAction> = {
    M: (pos) => pos.moveForward(MarsRover.GRID_SIZE),
    L: (pos) => pos.turnLeft(),
    R: (pos) => pos.turnRight()
  };

  constructor() {
    this.position = new Position(0, 0, Orientation.North);
  }

  command(input: string): string {
    this.position = input.split("").reduce((pos, char) => {
      const action = this.commands[char];
      return action ? action(pos) : pos;
    }, this.position);

    return this.position.toString();
  }
}
