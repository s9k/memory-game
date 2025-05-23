import { useGameStore } from "@/domains/game/hooks";

export function TimeCounter() {
  const time = useGameStore((state) => state.timePassed);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  if (!Intl.DurationFormat) {
    // Fallback to a simple string representation if Intl.DurationFormat is not available
    return [
      minutes ? `${minutes}m` : "",
      seconds || !time ? `${seconds}s` : "",
    ].join(" ");
  }

  return new Intl.DurationFormat("en", {
    style: "narrow",
    // Force display of seconds with 0 time to show "0s". Otherwise, it returns an empty string
    secondsDisplay: time === 0 ? "always" : "auto",
  }).format({ minutes, seconds });
}
