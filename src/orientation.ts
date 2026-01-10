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
  [Orientation.West]: Orientation.North,
};

export const AntiClockwiseOrientation: Record<Orientation, Orientation> = {
  [Orientation.North]: Orientation.West,
  [Orientation.West]: Orientation.South,
  [Orientation.South]: Orientation.East,
  [Orientation.East]: Orientation.North,
};
