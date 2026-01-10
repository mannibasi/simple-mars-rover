import { Orientation } from "./orientation";

export class Position {
  constructor(
    public x: number,
    public y: number,
    public orientation: Orientation
  ) {}
  moveForward(): void {
    this.y = this.y + 1;
  }
  turnLeft() {
    this.orientation = Orientation.West;
  }
  turnRight() {
    this.orientation = Orientation.East;
  }
}
