import { Orientation } from "./orientation";
import { Position } from "./position";
import { formattedPosition } from "./printer";

export class MarsRover {
  private position: Position;
  constructor() {
    this.position = { x: 0, y: 0, orientation: Orientation.North };
  }
  command(input: string) {
    const commands: string[] = input.split("");
    for (const command of commands) {
      if (command === "M") {
        this.position.y++;
      }
      if (command === "R") {
        this.position.orientation = Orientation.East;
      }
      if (command === "L") {
        this.position.orientation = Orientation.West;
      }
    }
    return formattedPosition(this.position);
  }
}
