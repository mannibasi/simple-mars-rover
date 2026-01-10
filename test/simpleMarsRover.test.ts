import { MarsRover } from "../src/marsRover";

describe("Simple Mars Rover", () => {
  test.each([
    { command: "L", expected: "0:0:W" },
    { command: "LL", expected: "0:0:S" },
    { command: "R", expected: "0:0:E" },
    { command: "M", expected: "0:1:N" },
    { command: "RM", expected: "1:0:E" },
    { command: "MM", expected: "0:2:N" }
  ])(
    "Command '$command' results in position '$expected'",
    ({ command, expected }) => {
      const rover = new MarsRover();
      expect(rover.command(command)).toBe(expected);
    }
  );
});
