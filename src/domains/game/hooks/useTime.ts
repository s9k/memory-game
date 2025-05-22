import { useEffect, useState } from "react";

export function useGameTime() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    let id = requestAnimationFrame(tick);

    function tick(time: DOMHighResTimeStamp) {
      const secondsPast = Math.floor((time - startTime) / 1_000);
      setTime(secondsPast);

      id = requestAnimationFrame(tick);
    }

    return () => cancelAnimationFrame(id);
  }, []);

  return time;
}
