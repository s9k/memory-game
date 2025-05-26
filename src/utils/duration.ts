import { UnitSeconds } from "@/constants";

export function formatDuration(durationInSeconds: number): string {
  const minutes = Math.floor(durationInSeconds / UnitSeconds.MINUTE);
  const seconds = durationInSeconds % UnitSeconds.MINUTE;

  if (!Intl.DurationFormat) {
    // Fallback to a simple string representation if Intl.DurationFormat is not available
    return [
      minutes > 0 ? `${minutes}m` : "",
      seconds > 0 || durationInSeconds === 0 ? `${seconds}s` : "",
    ].join(" ");
  }

  return new Intl.DurationFormat("en", {
    style: "narrow",
    // Force display of seconds with 0 time to show "0s". Otherwise, it returns an empty string
    secondsDisplay: durationInSeconds === 0 ? "always" : "auto",
  }).format({ minutes, seconds });
}
