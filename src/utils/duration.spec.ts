import { formatDurationFallback } from "./duration";

describe("formatDurationFallback", () => {
  it("formats 0 seconds as '0s'", () => {
    expect(formatDurationFallback(0)).toEqual("0s");
  });

  it("formats minutes", () => {
    expect(formatDurationFallback(60)).toEqual("1m");
    expect(formatDurationFallback(120)).toEqual("2m");
  });

  it("formats durations with minutes and seconds", () => {
    expect(formatDurationFallback(83)).toEqual("1m 23s");
  });

  it("rounds down fractional seconds to the nearest whole number", () => {
    expect(formatDurationFallback(1.7)).toEqual("1s");
  });
});
