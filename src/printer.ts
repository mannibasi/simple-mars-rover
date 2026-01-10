import { Position } from "./position";

export function formattedPosition(position: Position): string {
  return `${position.x}:${position.y}:${position.orientation}`;
}
