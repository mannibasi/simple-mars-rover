import { Orientation, ClockwiseOrientation, AntiClockwiseOrientation } from "./orientation";

export class Position {
  constructor(
    public x: number,
    public y: number,
    public orientation: Orientation
  ) {}

  moveForward(): void {
    const EDGE_OF_BOARD = 9;
    if (this.orientation === Orientation.North) {
      if (this.y === EDGE_OF_BOARD) {
        this.y = 0;
      } else {
        this.y = this.y + 1;
      }
    } else if (this.orientation === Orientation.East) {
      if (this.x === EDGE_OF_BOARD) {
        this.x = 0;
      } else {
        this.x = this.x + 1;
      }
    } else if (this.orientation === Orientation.West) {
      if (this.x === 0) {
        this.x = EDGE_OF_BOARD;
      } else {
        this.x = this.x - 1;
      }
    }
  }

  turnLeft() {
    this.orientation = AntiClockwiseOrientation[this.orientation];
  }
  turnRight() {
    this.orientation = ClockwiseOrientation[this.orientation];
  }
}
