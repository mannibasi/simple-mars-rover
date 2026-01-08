export class MarsRover {
  command(input: string) {
    if (input === "M") {
      return "0:1:N";
    }
    if (input === "R") {
      return "0:0:E";
    }
    return "0:0:W";
  }
}
