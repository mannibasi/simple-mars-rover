import { Orientation } from "./orientation";
import { Position } from "./position";
import { formattedPosition } from "./printer";

export class MarsRover {
  private position: Position;
  constructor() {
    this.position = new Position(0, 0, Orientation.North);
  }
  command(input: string) {
    const commands: string[] = input.split("");
    for (const command of commands) {
      this.executeCommand(command);
    }
    return formattedPosition(this.position);
  }
  private executeCommand(command: string) {
    if (command === "M") {
      this.position.moveForward();
    }
    if (command === "R") {
      this.position.turnRight();
    }
    if (command === "L") {
      this.position.turnLeft();
    }
  }
}
