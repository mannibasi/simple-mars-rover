import { Orientation, ClockwiseOrientation, AntiClockwiseOrientation } from "./orientation";

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
    this.orientation = AntiClockwiseOrientation[this.orientation];
  }
  turnRight() {
    this.orientation = ClockwiseOrientation[this.orientation];
  }
}
