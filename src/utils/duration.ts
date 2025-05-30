import { UnitSeconds } from "@/constants";

function getDurationFromSeconds(durationInSeconds: number): Duration {
  const minutes = Math.floor(durationInSeconds / UnitSeconds.MINUTE);
  const seconds = Math.floor(durationInSeconds % UnitSeconds.MINUTE);
  return { minutes, seconds };
}

// Fallback to a simple string representation if Intl.DurationFormat is not available
export function formatDurationFallback(durationInSeconds: number): string {
  const { minutes = 0, seconds = 0 } =
    getDurationFromSeconds(durationInSeconds);

  return [
    minutes > 0 ? `${minutes}m` : "",
    seconds > 0 || durationInSeconds === 0 ? `${seconds}s` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function formatDuration(durationInSeconds: number): string {
  if (!Intl.DurationFormat) {
    return formatDurationFallback(durationInSeconds);
  }

  return new Intl.DurationFormat("en", {
    style: "narrow",
    // Force display of seconds with 0 time to show "0s". Otherwise, it returns an empty string
    secondsDisplay: durationInSeconds === 0 ? "always" : "auto",
  }).format(getDurationFromSeconds(durationInSeconds));
}
