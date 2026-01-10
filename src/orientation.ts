export enum Orientation {
  North = "N",
  East = "E",
  South = "S",
  West = "W"
}

export const ClockwiseOrientation: Record<Orientation, Orientation> = {
  [Orientation.North]: Orientation.East,
  [Orientation.East]: Orientation.South,
  [Orientation.South]: Orientation.West,
  [Orientation.West]: Orientation.North
};

export const AntiClockwiseOrientation: Record<Orientation, Orientation> = {
  [Orientation.North]: Orientation.West,
  [Orientation.West]: Orientation.South,
  [Orientation.South]: Orientation.East,
  [Orientation.East]: Orientation.North
};

export const MovementDelta: Record<Orientation, { dx: number; dy: number }> = {
  [Orientation.North]: { dx: 0, dy: 1 },
  [Orientation.East]: { dx: 1, dy: 0 },
  [Orientation.South]: { dx: 0, dy: -1 },
  [Orientation.West]: { dx: -1, dy: 0 }
};
