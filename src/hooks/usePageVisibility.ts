"use client";

import { useEffect, useSyncExternalStore } from "react";

function getSnapshot(): boolean {
  return document.visibilityState === "visible";
}

function subscribe(callback: () => void) {
  document.addEventListener("visibilitychange", callback);

  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

export function usePageVisibility() {
  return useSyncExternalStore(subscribe, getSnapshot);
}

export function usePageVisibilityChange(callback: (visible: boolean) => void) {
  const visible = useSyncExternalStore(subscribe, getSnapshot);

  useEffect(() => {
    callback(visible);
  }, [visible]);
}
