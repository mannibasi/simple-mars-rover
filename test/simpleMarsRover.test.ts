import { MarsRover } from "../src/marsRover";

describe("Simple Mars Rover", () => {
  test.each([
    { command: "L", expected: "0:0:W" },
    { command: "LL", expected: "0:0:S" },
    { command: "LLL", expected: "0:0:E" },
    { command: "LLLL", expected: "0:0:N" },
    { command: "LLLLL", expected: "0:0:W" },
    { command: "R", expected: "0:0:E" },
    { command: "RR", expected: "0:0:S" },
    { command: "RRR", expected: "0:0:W" },
    { command: "RRRR", expected: "0:0:N" },
    { command: "RRRRR", expected: "0:0:E" },
    { command: "M", expected: "0:1:N" },
    { command: "RM", expected: "1:0:E" },
    { command: "MM", expected: "0:2:N" },
    { command: "MMMRM", expected: "1:3:E" },
    { command: "MMRMRM", expected: "1:1:S" },
    { command: "MMMMMMMMMM", expected: "0:0:N" },
    { command: "RMMMMMMMMM", expected: "9:0:E" },
    { command: "RMMMMMMMMMM", expected: "0:0:E" },
    { command: "LM", expected: "9:0:W" },
    { command: "RRM", expected: "0:9:S" },
    { command: "LLM", expected: "0:9:S" }
  ])(
    "Command '$command' results in position '$expected'",
    ({ command, expected }) => {
      const rover = new MarsRover();
      expect(rover.command(command)).toBe(expected);
    }
  );
});
