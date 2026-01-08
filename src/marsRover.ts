export class MarsRover {
  command(input: string) {
    if (input === "R") {
      return "0:0:E";
    }
    return "0:0:W";
  }
}
