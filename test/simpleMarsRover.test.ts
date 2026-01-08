import { MarsRover } from "../src/marsRover";

describe("Simple Mars Rover", () => {
  test("Facing 'West' after turn 'Left' command", () => {
    const rover = new MarsRover();
    expect(rover.command("L")).toBe("0:0:W");
  });
  test("Facing 'East' after turn 'Right' command", () => {
    const rover = new MarsRover();
    expect(rover.command("R")).toBe("0:0:E");
  });
});
