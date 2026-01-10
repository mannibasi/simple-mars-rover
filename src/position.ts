import {
  Orientation,
  ClockwiseOrientation,
  AntiClockwiseOrientation,
  MovementDelta
} from "./orientation";

export class Position {
  constructor(
    private readonly x: number,
    private readonly y: number,
    private readonly orientation: Orientation
  ) {}

  moveForward(gridSize: number): Position {
    const { dx, dy } = MovementDelta[this.orientation];
    const limit = gridSize + 1;

    const nextX = (this.x + dx + limit) % limit;
    const nextY = (this.y + dy + limit) % limit;

    return new Position(nextX, nextY, this.orientation);
  }

  turnLeft(): Position {
    return new Position(
      this.x,
      this.y,
      AntiClockwiseOrientation[this.orientation]
    );
  }

  turnRight(): Position {
    return new Position(this.x, this.y, ClockwiseOrientation[this.orientation]);
  }

  toString() {
    return `${this.x}:${this.y}:${this.orientation}`;
  }
}
