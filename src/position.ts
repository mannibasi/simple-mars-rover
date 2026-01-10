import { Orientation } from "./orientation";

export class Position {
  constructor(
    public x: number,
    public y: number,
    public orientation: Orientation
  ) {}
  moveForward(): void {
    if (this.orientation === Orientation.North) {
      this.y = this.y + 1;
    } else if (this.orientation === Orientation.East) {
      this.x = this.x + 1;
    }
  }
  turnLeft() {
    if (this.orientation === Orientation.North) {
      this.orientation = Orientation.West;
    } else if (this.orientation === Orientation.West) {
      this.orientation = Orientation.South;
    } else if (this.orientation === Orientation.South) {
      this.orientation = Orientation.East;
    } else if (this.orientation === Orientation.East) {
      this.orientation = Orientation.North;
    }
  }
  turnRight() {
    this.orientation = Orientation.East;
  }
}
