import {
  Orientation,
  ClockwiseOrientation,
  AntiClockwiseOrientation,
  MovementDelta
} from "./orientation";

export class Position {
  constructor(
    public x: number,
    public y: number,
    public orientation: Orientation
  ) {}

  moveForward(): void {
    const GRID_SIZE = 9;
    const { dx, dy } = MovementDelta[this.orientation];

    this.x = (this.x + dx + (GRID_SIZE + 1)) % (GRID_SIZE + 1);
    this.y = (this.y + dy + (GRID_SIZE + 1)) % (GRID_SIZE + 1);
  }

  turnLeft() {
    this.orientation = AntiClockwiseOrientation[this.orientation];
  }
  turnRight() {
    this.orientation = ClockwiseOrientation[this.orientation];
  }
}
