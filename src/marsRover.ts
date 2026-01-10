import { Orientation } from "./orientation";
import { Position } from "./position";
import { formattedPosition } from "./printer";

export class MarsRover {
  private position: Position;
  constructor() {
    this.position = { x: 0, y: 0, orientation: Orientation.North };
  }
  command(input: string) {
    if (input === "M") {
      this.position.y++;
    }
    if (input === "R") {
      this.position.orientation = Orientation.East;
    }
    if (input === "L") {
      this.position.orientation = Orientation.West;
    }
    return formattedPosition(this.position);
  }
}
