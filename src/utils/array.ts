// Simple shuffle function for small arrays O(n*logn)
// TODO. Could be improved to O(n) using Fisher-Yates shuffle algorithm
export function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}
